// src/libs/axios.ts
import axios from "axios"; // necessary package

// Set API URL and API key from environment variables
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
const API_KEY = import.meta.env.VITE_API_KEY || "x-api-key";

// Get access token from local storage
const accessToken = localStorage.getItem("accessToken");

// Create Axios instance with base URL and credentials
export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Request interceptor to add API key and access token to headers
axiosInstance.interceptors.request.use(
  (config) => {
    if (API_KEY) config.headers["x-api-key"] = API_KEY; // Add API key
    if (accessToken) config.headers["authorization"] = `Bearer ${accessToken}`; // Add access token
    return config; // Proceed with request
  },
  (error) => Promise.reject(error) // Handle errors
);
