import axios from "axios";
const baseURL = "http://127.0.0.1:8000";

function authHeader() {
  const temp = localStorage.getItem("token");
  const token = temp ? temp : "";

  if (token) {
    return "Bearer " + token;
  } else {
    return {};
  }
}

const request = axios.create({
  baseURL,
});

request.interceptors.request.use(
  (config: any) => {
    config.headers.Authorization = authHeader();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
