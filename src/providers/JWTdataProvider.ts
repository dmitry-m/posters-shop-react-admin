import { fetchUtils, Options } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

import { inMemoryJWT, API_PREFIX } from "./authProvider";

const httpClient = async (url: string, options: Options | undefined) => {
  const token =
    inMemoryJWT.getToken() || (await inMemoryJWT.getRefreshedToken());
  if (token === null) return Promise.reject("No JWT token");

  if (!options) options = {};
  options.user = {
    authenticated: true,
    token: `Bearer ${token}`,
  };

  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = simpleRestProvider(API_PREFIX, httpClient);

export default dataProvider;
