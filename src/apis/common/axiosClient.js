import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop",
});
