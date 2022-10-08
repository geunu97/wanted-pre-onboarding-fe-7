import { fetcher } from "./common/fetcher";
import { postFetchOptions } from "./common/fetchOptions";

export const postAuth = async ({ url, data }) => {
  return await fetcher(postFetchOptions(url, data));
};
