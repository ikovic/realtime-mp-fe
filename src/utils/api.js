import axios from "axios";
import { BASE_URL } from "config/";

const instance = axios.create();

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    const activeService = localStorage.getItem("service");

    config.headers.Authorization = `Bearer ${token}`;
    config.headers.Service = activeService;

    return config;
  },
  error => {
    console.log("interceptor error");
  }
);

const loginUser = () => instance.post(`${BASE_URL}/api/login`);

export default {
  loginUser
};
