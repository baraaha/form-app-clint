import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.43.106:8000/api/", // Replace with your desired base URL
});

// Add an interceptor to include the authentication token in headers
instance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add an interceptor to check if the user is authenticated
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        // User is not authenticated, remove user from local storage
        localStorage.removeItem("user");
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
