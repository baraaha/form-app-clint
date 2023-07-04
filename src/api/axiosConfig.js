import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.43.106:8000/api/", // Replace with your desired base URL
});

// Add an interceptor to include the authentication token in headers
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Assuming the token is stored in localStorage

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
