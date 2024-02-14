import { AuthProvider } from "react-admin";
import TokenManager from "./JWTManager";

export const API_PREFIX = import.meta.env.VITE_API_PREFIX;

const LOGIN_URL = API_PREFIX + import.meta.env.VITE_LOGIN_URL;
const LOGOUT_URL = API_PREFIX + import.meta.env.VITE_LOGOUT_URL;
const TOKEN_URL = API_PREFIX + import.meta.env.VITE_TOKEN_URL;

export const inMemoryJWT = new TokenManager(TOKEN_URL, LOGOUT_URL);

export const authProvider: AuthProvider & {
  signup: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => Promise<{ redirectTo?: string | boolean } | void | any>;
} = {
  login: ({ username, password }) => {
    return fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        const { accessToken, ...user } = data;
        localStorage.setItem("user", JSON.stringify(user));
        inMemoryJWT.setToken(accessToken);
        if (user.role === "user") {
          return { redirectTo: "/" };
        }
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  },
  signup: ({ username, password }) => {
    return fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        const { accessToken, ...user } = data;
        localStorage.setItem("user", JSON.stringify(user));
        return inMemoryJWT.setToken(accessToken);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  },
  logout: () => {
    localStorage.removeItem("user");
    inMemoryJWT.eraseTokens();
    return Promise.resolve();
  },
  checkError: () => {
    console.log("checkError");
    return inMemoryJWT.getRefreshedToken().then((token) => {
      if (!token) {
        console.log("removeItem(user)");
        localStorage.removeItem("user");
        return Promise.reject();
      }
      return Promise.resolve();
    });
  },
  checkAuth: () => {
    console.log("checkAuth");
    return localStorage.getItem("user") ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => {
    console.log("checkPermissions");
    const persistedUser = localStorage.getItem("user");
    const role = persistedUser ? JSON.parse(persistedUser).role : null;
    console.log({ role });
    return Promise.resolve(role);
  },
  getIdentity: () => {
    console.log("checkIdentity");
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;
