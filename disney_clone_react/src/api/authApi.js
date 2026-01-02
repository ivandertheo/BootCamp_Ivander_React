import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true
});

export const registerUser = (data) =>
  axiosInstance.post(`/register`, data);

export const loginUser = (data) =>
  axiosInstance.post(`/login`, data);
    withCredentials: true;

export const logoutUser = () =>
  axios.post(`${API_URL}/logout`, {}, {
    withCredentials: true
  });

export const getProfile = () =>
  axios.get(`${API_URL}/profile`, {
    withCredentials: true
  });