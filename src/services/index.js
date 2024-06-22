import axios from "axios";
import AuthService from "./auth";
import UsersService from "./users";
import FeedbacksService from "./feedBacks";

import router from "../router";
import { setGlobalLoading } from "../store/global";

const API_ENVS = {
  production: "",
  development: "",
  local: "http://localhost:8000/api",
};

const httpClient = axios.create({
  baseURL: API_ENVS.local,
});

httpClient.interceptors.request.use((config) => {
  console.log("Entrou aqui!");

  setGlobalLoading(true);

  const token = window.localStorage.getItem("token");
  if (token) {
    console.log(token);
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

httpClient.interceptors.response.use(
  (response) => {
    setGlobalLoading(false);

    return response;
  },
  (error) => {
    console.log("error:", error);

    if (error.response.status == 401) {
      window.localStorage.removeItem('token');
      router.push({
        name: "Home",
      });
      
      return;
    }
    const canThrowAnError =
      error.request.status === 0 || error.request.status === 500;

    if (canThrowAnError) {
      setGlobalLoading(false);

      throw new Error(error.message);
    }

    setGlobalLoading(false);
    return error.response;
  }
);

export default {
  auth: AuthService(httpClient),
  users: UsersService(httpClient),
  feedbacks: FeedbacksService(httpClient),
};
