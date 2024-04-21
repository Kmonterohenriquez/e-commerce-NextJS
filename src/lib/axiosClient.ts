import axios, { AxiosRequestConfig } from "axios";
// import { getSession, signout } from "next-auth/react";

// const isProduction = process.env.NODE_ENV === "production";

// function getBasePath(){
//    let basePath ='';

// }
const basePath = "http://localhost:8080/";
const axiosInstance = axios.create({
  baseURL: basePath + "api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosInstance as ApiClient };
