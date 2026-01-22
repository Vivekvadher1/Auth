import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Add token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  
    console.log("Sending token:", token);   // 👈 DEBUG

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;

