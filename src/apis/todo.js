import { todoApiUrl } from "./common/apiUrls";
import { fetcher } from "./common/fetcher";
import {
  getFetchOptions,
  postFetchOptions,
  putFetchOptions,
  deleteFetchOptions,
} from "./common/fetchOptions";

export const getTodos = async () => {
  return await fetcher(getFetchOptions(todoApiUrl));
};

export const createTodo = async (data) => {
  await fetcher(postFetchOptions(todoApiUrl, data));
};

export const updateTodo = async (id, data) => {
  await fetcher(putFetchOptions(`${todoApiUrl}/:${id}`, data));
};

export const deleteTodo = async (id) => {
  await fetcher(deleteFetchOptions(`${todoApiUrl}/:${id}`));
};
