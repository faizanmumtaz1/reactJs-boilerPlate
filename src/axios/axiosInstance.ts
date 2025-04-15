import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
// import { store } from '../redux/store';
// import { logout } from '../redux/slices/authSlice';

// Request Interceptor
const requestHandler = (request: any) => {
  const token = localStorage.getItem("token"); // Get token from localStorage
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  // console.log('Request:', request);
  return request;
};

// Response Success Interceptor
const successResponseHandler = (response: any) => {
  // console.log('Response:', response);
  return response;
};

// Response Error Interceptor
const errorResponseHandler = async (error: any) => {
  const originalRequest = error.config;

  // If the error is 401 and we haven't retried yet
  if (error.response?.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    // Clear auth data and redirect to login
    // store.dispatch(logout());
    // window.location.href = '/';
    return Promise.reject(error);
  }

  return Promise.reject(error);
};

// Create Axios Instance
export const getAxiosInstance = (
  config: AxiosRequestConfig = {}
): AxiosInstance => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_BASE_API_URL, // Set base URL from environment variables
    ...config,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  // Attach interceptors
  instance.interceptors.request.use(requestHandler);
  instance.interceptors.response.use(
    successResponseHandler,
    errorResponseHandler
  );

  return instance;
};
