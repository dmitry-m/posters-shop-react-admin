import { fetchUtils, Options } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

import { inMemoryJWT } from "./authProvider";
import { API_PREFIX as API_URL } from "./apiConstants";

const httpClient = async (url: string, options: Options | undefined) => {
  const token = await inMemoryJWT.getFreshToken();

  if (!options) options = {};
  options.user = {
    authenticated: true,
    token: `Bearer ${token}`,
  };

  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = simpleRestProvider(API_URL, httpClient);

export default dataProvider;
