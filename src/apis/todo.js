import { getTodosApiUrl } from "./common/apiUrls";
import { fetcher } from "./common/fetcher";
import { getFetchOptions, postFetchOptions } from "./common/fetchOptions";

export const getTodos = async () => {
  return await fetcher(getFetchOptions(getTodosApiUrl));
};

export const createTodo = async (data) => {
  return await fetcher(postFetchOptions(getTodosApiUrl, data));
};
