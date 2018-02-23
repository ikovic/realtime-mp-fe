import axios from "axios";

const instance = axios.create();

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  error => {
    console.log("interceptor error");
  }
);

const loginUser = (service, data) => {
  instance.post(`http://localhost:3000/api/login/${service}`, data);
};

export default {
  loginUser
};
