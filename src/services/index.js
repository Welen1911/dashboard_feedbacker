import axios from "axios";
import AuthService from "./auth";
import UsersService from "./users";
import router from '../router';

const API_ENVS = {
  production: "",
  development: "",
  local: "http://localhost:8000/api",
};

const httpClient = axios.create({
  baseURL: API_ENVS.local,
});

httpClient.interceptors.request.use(
  config => {
    console.log('Entrou aqui!');
    const token = window.localStorage.getItem('token');
    if (token) {
      console.log(token);
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  }
);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);

    const canThrowAnError =
      error.request.status === 0 || error.request.status === 500;
      
    if (canThrowAnError) {
      throw new Error(error.message);
    }

    if (error.response.status === 401) {
      router.push({
        name: 'Home'
      });
    }
    return error.response;
  }
);

export default {
  auth: AuthService(httpClient),
  users: UsersService(httpClient)
};
