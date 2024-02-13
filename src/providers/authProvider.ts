import { AuthProvider } from "react-admin";
import TokenManager from "./JWTManager";

export const API_PREFIX = import.meta.env.VITE_API_PREFIX;

const LOGIN_URL = API_PREFIX + import.meta.env.VITE_LOGIN_URL;
const LOGOUT_URL = API_PREFIX + import.meta.env.VITE_LOGOUT_URL;
const TOKEN_URL = API_PREFIX + import.meta.env.VITE_TOKEN_URL;

export const inMemoryJWT = new TokenManager(TOKEN_URL, LOGOUT_URL);

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    try {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const { accessToken, ...user } = await response.json();

      localStorage.setItem("user", JSON.stringify(user));
      inMemoryJWT.setToken(accessToken);
    } catch (error) {
      Promise.reject(error);
    }
  },

  logout: () => {
    localStorage.removeItem("user");
    inMemoryJWT.eraseTokens();
    return Promise.resolve();
  },
  checkError: async () => {
    console.log("checkError");
    const token = await inMemoryJWT.getRefreshedToken();
    if (!token) {
      console.log("removeItem(user)");
      localStorage.removeItem("user");
      Promise.reject();
    }
    Promise.resolve();
  },
  checkAuth: () => {
    console.log("checkAuth");
    return localStorage.getItem("user") ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => {
    console.log("checkPermissions");
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
  getIdentity: () => {
    console.log("checkIdentity");
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;
