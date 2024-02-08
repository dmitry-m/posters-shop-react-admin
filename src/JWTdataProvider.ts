import { fetchUtils, Options } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { AuthInterface } from "./types";
import {
  getToken,
  setRefreshTokenEndpoint,
  getRefreshedToken,
} from "./inMemoryJWTManager";

const httpClient = (url: string, options: Options | undefined) => {
  const token = getToken();
  if (token) {
    if (!options) options = {};

    options.user = {
      authenticated: true,
      token: `Bearer ${token}`,
    };

    return fetchUtils.fetchJson(url, options);
  } else {
    setRefreshTokenEndpoint("/api/auth/token");
    return getRefreshedToken().then((gotFreshToken) => {
      if (gotFreshToken) {
        if (!options) options = {};
        options.user = {
          authenticated: true,
          token: `Bearer ${getToken()}`,
        };
      }
      return fetchUtils.fetchJson(url, options);
    });
  }
};

export const dataProvider = simpleRestProvider(
  "http://localhost:5173/api",
  httpClient
);

export default dataProvider;

// const httpClientFactory = (auth: AuthInterface) => {
//   return (url: string, options: Options | undefined) => {
//     if (!options) options = {};
//     // const auth: AuthInterface = JSON.parse(
//     //   localStorage.getItem("user") as string
//     // );
//     console.log({ JWT: auth });

//     if (auth) {//       console.log({ auth });
//       options.user = {
//         authenticated: true,
//         token: `Bearer ${auth.tokens.accessToken}`,
//       };
//     }

//     return fetchUtils.fetchJson(url, options);
//   };
// };

// export const dataProviderFactory = (auth: AuthInterface) => {
//   return simpleRestProvider(
//     "http://localhost:5173/api",
//     httpClientFactory(auth)
//   );
// };

// export default dataProviderFactory;
