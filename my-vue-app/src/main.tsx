import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import axios from "axios";

axios.interceptors.request.use((request) => {
  console.log(request);
  request.headers.channelName = "Sarvesh-Axios-Interceptor";
  return request;
});

axios.interceptors.response.use((response) => {
  console.log(response);
  return response;
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
