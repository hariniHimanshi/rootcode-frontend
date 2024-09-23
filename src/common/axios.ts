import axios, { AxiosError, AxiosResponse } from "axios";
import { API_BASE_URL } from "./configs";

import { IAPIErrorResponse } from "./types";

// Create axios instance, so that can be re-usable and interceptable
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (resp: AxiosResponse) => {
    return resp;
  },
  (error: AxiosError) => {
    if (error.response && error.response.data) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(error.response.data);
      return Promise.reject<IAPIErrorResponse>(error.response.data);
    }

    // The server hasn't handled the error
    return Promise.reject<IAPIErrorResponse>({
      error: "Unhandled Error",
      message: error.message,
      status: error.code,
    });
  }
);

export default axiosInstance;
