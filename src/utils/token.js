import { LOCAL_STORAGE_KEYS } from "../constants/Global";

export const getAuthToken = () => {
  return localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN) || "";
};

export const getAuthName = () => {
  return localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_NAME) || "";
};

export const getAuthEmail = () => {
  return localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_EMAIL) || "";
};

export const setToStorage = (key, token) => {
  localStorage.setItem(key, token);
};

export const getFromStorage = (key) => {
  return localStorage.getItem(key) || "";
};

export const clearStorage = (key) => {
  localStorage.removeItem(key);
};
