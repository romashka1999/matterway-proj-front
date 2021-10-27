import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
  headers: {
    Accept: "applicaiton/json",
    "Content-Type": "application/json",
  },
});
