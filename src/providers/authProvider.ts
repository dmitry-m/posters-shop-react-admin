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
        return Promise.reject(error);
      });
  },

  logout: () => {
    inMemoryJWT.eraseToken();
    localStorage.removeItem("user");
    void fetchUtils.fetchJson(LOGOUT_URL);

    return Promise.resolve();
  },

  checkError(error: ResponseError) {
    const { status } = error;
    if (status !== 404) {
      localStorage.removeItem("user");
    }
    return Promise.resolve();
  },

  checkAuth() {
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
        localStorage.removeItem("user");
        inMemoryJWT.eraseToken();
        return Promise.reject({ message: "ra.auth.auth_check_error" });
      });
  },

  getPermissions() {
    const user = localStorage.getItem("user");
    if (user) {
      const { role } = JSON.parse(user) as AuthInterface;
      return Promise.resolve(role);
    }
    return Promise.resolve(null);
  },

  getIdentity: () => {
    const user = localStorage.getItem("user");
    return user ? Promise.resolve(JSON.parse(user)) : Promise.reject({ redirectTo: "/" });
  },
};

export default authProvider;
