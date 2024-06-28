import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL } from "../constants";

const defaultAxios = axios.create({
  baseURL: BASE_URL,
  headers: {},
});

defaultAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => error
);

defaultAxios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    window.location.href = "not-found";
    return Promise.reject(error);
  }
);

export default defaultAxios;
