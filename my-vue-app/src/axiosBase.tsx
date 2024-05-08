import axios from "axios";

const axiosBase = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosBase.interceptors.request.use((config) => {
  config.headers["Channel"] = "SarveshGupta";
  return config;
});

axiosBase.interceptors.response.use(
  (response) => {
    console.log("Interceptor Response: ", response);
    return response;
  },
  (error) => {
    console.error("Interceptor Error: ", error);
    return Promise.reject(error);
  }
);

export default axiosBase;
