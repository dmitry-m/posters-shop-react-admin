import { AuthProvider } from "react-admin";
import TokenManager from "./JWTManager";
import { jwtDecode } from "jwt-decode";

export const inMemoryJWT = new TokenManager("ra-logout", "/api/auth/token");

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    try {
      const response = await fetch("api/auth/login", {
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
      const { exp, iat } = jwtDecode(accessToken);
      if (exp && iat) {
        inMemoryJWT.setToken(accessToken);
        Promise.resolve();
      } else Promise.reject();
    } catch (error) {
      Promise.reject();
    }
  },

  logout: () => {
    localStorage.removeItem("user");
    inMemoryJWT.eraseTokens();
    return Promise.resolve();
  },
  checkError: async () => {
    console.log("checkError");
    await inMemoryJWT.getRefreshedTokens();
  },
  checkAuth: () => {
    console.log("checkAuth");
    return localStorage.getItem("user") ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => {
    console.log("checkPermissions");
    return Promise.resolve(undefined);
  },
  getIdentity: () => {
    console.log("checkIdentity");
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;
