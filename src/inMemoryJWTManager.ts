import { jwtDecode } from "jwt-decode";
import cookie from "cookiejs";

let inMemoryJWT = null;
let isRefreshing = null;
let logoutEventName = "ra-logout";
let refreshEndpoint = "/refresh-token";
let refreshTimeOutId;

export const setLogoutEventName = (name: string) => (logoutEventName = name);
export const setRefreshTokenEndpoint = (endpoint: string) =>
  (refreshEndpoint = endpoint);

const refreshToken = (delay: number) => {
  console.log({ delay });
  if (refreshTimeOutId) aboardRefreshToken();
  refreshTimeOutId = window.setTimeout(getRefreshedToken, delay * 1000 - 5000); // Validity period of the token in seconds, minus 5 seconds
};

const aboardRefreshToken = () => {
  cookie.remove("refreshToken");
  if (refreshTimeOutId) {
    window.clearTimeout(refreshTimeOutId);
  }
};

export const waitForTokenRefresh = () => {
  if (!isRefreshing) {
    return Promise.resolve();
  }
  return isRefreshing.then(() => {
    isRefreshing = null;
    return true;
  });
};

export const getRefreshedToken = () => {
  const request = new Request(refreshEndpoint, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json" }),
    credentials: "include",
  });

  isRefreshing = fetch(request)
    .then((response) => {
      if (response.status !== 200) {
        eraseToken();
        console.log("Token renewal failure");
        return { token: null };
      }
      return response.json();
    })
    .then(({ accessToken }) => {
      console.log({ accessToken });
      if (accessToken) {
        const { exp, iat } = jwtDecode(accessToken);
        if (exp && iat) setToken(accessToken, exp - iat);
        return true;
      }
      eraseToken();
      return false;
    });

  return isRefreshing;
};

export const getToken = () => inMemoryJWT;

export const setToken = (token: string, delay: number) => {
  inMemoryJWT = token;
  refreshToken(delay);
  return true;
};

export const eraseToken = () => {
  inMemoryJWT = null;
  aboardRefreshToken();
  window.localStorage.setItem(logoutEventName, Date.now().toString());
  return true;
};

window.addEventListener("storage", (event) => {
  if (event.key === logoutEventName) {
    inMemoryJWT = null;
  }
});
