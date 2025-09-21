import axios from "axios";
import { API_CONFIG } from "../Config/base";

export const apiClient = axios.create({
  baseURL: API_CONFIG.baseURL,
  timeout: 30000,
});

apiClient.interceptors.request.use((config) => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  if (token) {
    config.headers.token = token;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    return Promise.resolve({
      success: true,
      data: response.data,
      statusCode: response.status,
    });
  },
  (error) => {
    return Promise.reject({
      success: false,
      error,
      message: error?.response?.data?.message || "Unexpected error",
    });
  }
);
