import { axiosClient } from "./axiosClient";

export const fetcher = async (data) => {
  try {
    const response = await axiosClient(data);
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};
