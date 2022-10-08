export const postFetchOptions = (url, data) => {
  return {
    method: "post",
    url: url,
    headers: { "Content-Type": "application/json" },
    data: data,
  };
};
