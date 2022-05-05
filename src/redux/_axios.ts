import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { TStore } from "./store";
import assign from "lodash/assign";
import { TokenKeys } from "../constants";
import Constants from "expo-constants";

const initAxios = (store: TStore) => {
  const injectAuthHeaders = (config: AxiosRequestConfig) => {
    const tokens = store.getState().tokens;
    const authorization = `Bear ${tokens[TokenKeys.USER_TOKEN]}`;
    const uid = tokens[TokenKeys.UID_TOKEN];
    const authHeaders = { authorization, uid };
    assign(config.headers, authHeaders);
    return config;
  };

  const unautherizedHandling = (error: AxiosError) => {
    const { status, data } = (error?.response as any) || {};
    //error handling
  };

  const handleFormData = (config: AxiosRequestConfig) => {
    if (config.data instanceof FormData) {
      assign(config.headers, {
        "Content-Type": "multipart/form-data",
      });
    }
    return config;
  };

  axios.defaults.baseURL = Constants.manifest?.extra?.BASE_URL;
  axios.interceptors.request.use(injectAuthHeaders);
  axios.interceptors.response.use(undefined, (error) => {
    unautherizedHandling(error);
    return Promise.reject(error?.response);
  });
  axios.interceptors.request.use(handleFormData);
};

export default initAxios;
