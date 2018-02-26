import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    const activeService = localStorage.getItem('service');

    config.headers.Authorization = `Bearer ${token}`;
    config.headers.Service = activeService;

    return config;
  },
  error => {
    console.log('interceptor error', error);
  },
);

export default instance;
