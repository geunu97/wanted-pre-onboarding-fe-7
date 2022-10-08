import { webStorage } from "./webStorage";

export const setToken = (accessToken) => {
  webStorage().setItem("access_token", accessToken);
};

export const getToken = () => {
  return { accessToken: webStorage().getItem("access_token") };
};
