import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils, Options, UpdateParams } from "react-admin";

import { API_URL } from "./apiConstants";
import { inMemoryJWT } from "./authProvider";

const httpClient = async (url: string, options: Options | undefined) => {
  const token = await inMemoryJWT.getFreshToken();

  const authOptions = { ...options };
  authOptions.user = {
    authenticated: true,
    token: typeof token === "string" ? `Bearer ${token}` : "",
    ...options?.user,
  };

  return fetchUtils.fetchJson(url, authOptions);
};

export const restProvider = simpleRestProvider(API_URL, httpClient);

export const dataProvider = {
  ...restProvider,
  update: (resource: string, params: UpdateParams & { data: { id?: string } }): Promise<any> => {
    const {
      data: { id, ...restData },
    } = params;
    const updatedParams = { ...params, data: { ...restData } };

    return restProvider.update(resource, updatedParams);
  },
};

export default dataProvider;
