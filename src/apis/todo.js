import { todoApiUrl } from "./common/apiUrls";
import { fetcher } from "./common/fetcher";
import {
  getFetchOptions,
  postFetchOptions,
  putFetchOptions,
} from "./common/fetchOptions";

export const getTodos = async () => {
  return await fetcher(getFetchOptions(todoApiUrl));
};

export const createTodo = async (data) => {
  return await fetcher(postFetchOptions(todoApiUrl, data));
};

export const updateTodo = async (id, data) => {
  return await fetcher(putFetchOptions(`${todoApiUrl}/:${id}`, data));
};
