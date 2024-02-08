import { fetchUtils, Options } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

import { inMemoryJWT } from "./authProvider";

const httpClient = async (url: string, options: Options | undefined) => {
  const token =
    inMemoryJWT.getToken() || (await inMemoryJWT.getRefreshedTokens());
  if (!options) options = {};
  options.user = {
    authenticated: true,
    token: `Bearer ${token}`,
  };
  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = simpleRestProvider("/api", httpClient);

export default dataProvider;
