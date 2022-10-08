import { getToken } from "../../utils/token";

export const postFetchOptions = (url, data) => {
  const { accessToken } = getToken();
  return {
    method: "post",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
    data: data,
  };
};

export const getFetchOptions = (url) => {
  const { accessToken } = getToken();
  return {
    method: "get",
    url: url,
    headers: { Authorization: `Bearer ${accessToken}` },
  };
};
