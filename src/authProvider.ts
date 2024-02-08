import { AuthProvider } from "react-admin";
import {
  setRefreshTokenEndpoint,
  eraseToken,
  getRefreshedToken,
  getToken,
} from "./inMemoryJWTManager";
import { jwtDecode } from "jwt-decode";

export const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    const request = new Request("api/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "include",
    });
    setRefreshTokenEndpoint("/api/auth/token");
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ accessToken, ...user }) => {
        localStorage.setItem("user", JSON.stringify(user));
        const { exp, iat } = jwtDecode(accessToken);
        if (exp && iat) setToken(accessToken, exp - iat);
      });
  },
  logout: () => {
    localStorage.removeItem("user");
    eraseToken();
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () => {
    console.log("checkAuth");
    if (!getToken()) {
      setRefreshTokenEndpoint("/api/auth/token");
      return getRefreshedToken().then((tokenHasBeenRefreshed) => {
        return tokenHasBeenRefreshed ? Promise.resolve() : Promise.reject();
      });
    } else {
      return Promise.resolve();
    }
  },
  getPermissions: () => {
    return Promise.resolve(undefined);
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;

export const authProviderFactory = (auth, setAuth) => {
  const authProvider: AuthProvider = {
    login: ({ username, password }) => {
      console.log({ username, password });
      const request = new Request("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: new Headers({ "Content-Type": "application/json" }),
      });
      return fetch(request)
        .then((response) => {
          if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((user) => {
          console.log({ user });
          setAuth(user);
        })
        .catch(() => {
          throw new Error("Network error");
        });
    },
    logout: () => {
      setAuth(null);
      return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () => (auth ? Promise.resolve() : Promise.reject()),
    getPermissions: () => {
      return Promise.resolve(undefined);
    },
    getIdentity: () => {
      return Promise.resolve(auth);
    },
  };
  return authProvider;
};
