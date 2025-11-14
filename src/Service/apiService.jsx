import axios from 'axios';

// Create an 'api' instance of axios
const api = axios.create({
  baseURL: 'http://localhost:4001/api', // Your backend's base URL
});

// Add a request interceptor to automatically add the auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Get the token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;