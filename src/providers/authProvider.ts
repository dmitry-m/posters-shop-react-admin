import { AuthProvider, fetchUtils } from "react-admin";
import TokenManager from "./JWTManager";
import { User } from "../types";
import { LOGIN_URL, SIGNUP_URL, LOGOUT_URL, TOKEN_URL } from "./apiConstants";

export type MyAuthProvider = AuthProvider & {
  setAuth: (data: User) => Promise<{ redirectTo?: string | boolean } | void>;
  signUp: (params: any) => Promise<{ redirectTo?: string | boolean } | void>;
};

export const inMemoryJWT = new TokenManager(TOKEN_URL);

export const authProvider: MyAuthProvider = {
  login: function ({ username, password }) {
    return fetchUtils
      .fetchJson(LOGIN_URL, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        credentials: "include",
      })
      .then(({ json }) => {
        return this.setAuth(json);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  },

  setAuth: (data: User) => {
    console.log("authProvider setAuth");
    const { accessToken, ...user } = data;
    localStorage.setItem("user", JSON.stringify(user));
    inMemoryJWT.setToken(accessToken);

    if (user.role !== "admin") {
      return Promise.resolve({ redirectTo: "/segments" });
    }
    return Promise.resolve({ redirectTo: "/" });
  },

  signUp: function ({ username, password }) {
    return fetchUtils
      .fetchJson(SIGNUP_URL, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        credentials: "include",
      })
      .then(({ json }) => {
        return this.setAuth(json);
      })
      .catch((error) => {
        console.log("auth provider error");
        console.log({ error });
        return Promise.reject(error);
        // return Promise.resolve(null);
      });
  },

  logout: () => {
    inMemoryJWT.eraseTokens();
    localStorage.removeItem("user");
    fetchUtils.fetchJson(LOGOUT_URL);

    return Promise.resolve();
  },

  checkError: function (error) {
    const status = error.status;
    const user = localStorage.getItem("user");
    console.log("checkError");
    if (status === 403 && user) {
      return Promise.resolve();
    }

    return fetchUtils
      .fetchJson(TOKEN_URL, {
        method: "GET",
        credentials: "include",
      })
      .then(({ json }) => {
        this.setAuth(json);

        return Promise.resolve();
      })
      .catch(() => {
        console.log({ eraseTokens: "checkError" });
        localStorage.removeItem("user");
        inMemoryJWT.eraseTokens();
        console.log("auth error");
        return Promise.reject("ra.auth.auth_check_error");
      });
  },

  checkAuth: function () {
    console.log("checkAuth");
    const user = localStorage.getItem("user");
    if (user) return Promise.resolve();

    return fetchUtils
      .fetchJson(TOKEN_URL, {
        method: "GET",
        credentials: "include",
      })
      .then(({ json }) => {
        this.setAuth(json);

        return Promise.resolve();
      })
      .catch(() => {
        console.log({ eraseTokens: "checkAuth" });
        localStorage.removeItem("user");
        inMemoryJWT.eraseTokens();
        console.log("auth error");
        return Promise.reject("ra.auth.auth_check_error");
      });
  },

  getPermissions: function () {
    console.log("checkPermissions");
    const user = localStorage.getItem("user");
    if (user) {
      const role = JSON.parse(user).role;
      console.log({ role });
      return Promise.resolve(role);
    }
    return Promise.resolve(null);
    // return fetchUtils
    //   .fetchJson(TOKEN_URL, {
    //     method: "GET",
    //     credentials: "include",
    //   })
    //   .then(({ json }) => {
    //     this.setAuth(json);
    //     const { role } = json;
    //     console.log({ role });

    //     return Promise.resolve(role);
    //   })
    //   .catch(() => {
    //     console.log({ eraseTokens: "getPermissions" });
    //     inMemoryJWT.eraseTokens();

    //     return Promise.resolve(null);
    //   });
  },

  getIdentity: () => {
    console.log("checkIdentity");
    const user = localStorage.getItem("user");
    return user ? Promise.resolve(JSON.parse(user)) : Promise.reject();
  },
};

export default authProvider;
