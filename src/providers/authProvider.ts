/* eslint-disable prefer-promise-reject-errors */
import { AuthProvider, fetchUtils } from "react-admin";

import { LOGIN_URL, SIGNUP_URL, LOGOUT_URL, TOKEN_URL } from "./apiConstants";
import TokenManager from "./JWTManager";

import { AuthInterface } from "../types";

export interface FormValues {
  username?: string;
  password?: string;
}

interface ResponseError extends Error {
  status?: number;
}

export type MyAuthProvider = AuthProvider & {
  setAuth: (data: AuthInterface) => Promise<{ redirectTo?: string | boolean } | void>;
  signUp: (params: FormValues) => Promise<{ redirectTo?: string | boolean } | void>;
};

export const inMemoryJWT = new TokenManager(TOKEN_URL);

export const authProvider: MyAuthProvider = {
  setAuth: (data) => {
    console.log("authProvider setAuth");
    const { accessToken, ...user } = data;
    localStorage.setItem("user", JSON.stringify(user));
    inMemoryJWT.setToken(accessToken);

    return Promise.resolve({ redirectTo: "/" });
  },

  login({ username, password }: FormValues) {
    return fetchUtils
      .fetchJson(LOGIN_URL, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        credentials: "include",
      })
      .then(({ json }: { json: AuthInterface }) => {
        return this.setAuth(json);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  },

  signUp({ username, password }: FormValues) {
    return fetchUtils
      .fetchJson(SIGNUP_URL, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        credentials: "include",
      })
      .then(({ json }: { json: AuthInterface }) => {
        return this.setAuth(json);
      })
      .catch((error: ResponseError) => {
        console.log("auth provider error");
        console.log({ error });
        return Promise.reject(error);
      });
  },

  logout: () => {
    inMemoryJWT.eraseToken();
    localStorage.removeItem("user");
    console.log("logout");
    void fetchUtils.fetchJson(LOGOUT_URL);

    return Promise.resolve("/login");
  },

  checkError(error: ResponseError) {
    const { status } = error;
    console.log("checkError");
    if (status !== 404) {
      localStorage.removeItem("user");
    }
    return Promise.resolve();
  },

  checkAuth() {
    console.log("checkAuth");
    const user = localStorage.getItem("user");
    if (user) return Promise.resolve();

    return fetchUtils
      .fetchJson(TOKEN_URL, {
        method: "GET",
        credentials: "include",
      })
      .then(async ({ json }: { json: AuthInterface }) => {
        await this.setAuth(json);
        return Promise.resolve();
      })
      .catch(() => {
        console.log({ eraseTokens: "checkAuth" });
        localStorage.removeItem("user");
        inMemoryJWT.eraseToken();
        console.log("auth error");
        return Promise.reject({ message: "ra.auth.auth_check_error" });
      });
  },

  getPermissions() {
    console.log("checkPermissions");
    const user = localStorage.getItem("user");
    if (user) {
      const { role } = JSON.parse(user) as AuthInterface;
      console.log({ role });
      return Promise.resolve(role);
    }
    return Promise.resolve(null);
  },

  getIdentity: () => {
    console.log("checkIdentity");
    const user = localStorage.getItem("user");
    console.log({ user });
    return user ? Promise.resolve(JSON.parse(user)) : Promise.reject({ redirectTo: "/" });
  },
};

export default authProvider;
