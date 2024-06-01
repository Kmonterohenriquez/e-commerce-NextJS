import axios, { AxiosRequestConfig } from "axios";
// import { getSession, signout } from "next-auth/react";

// const isProduction = process.env.NODE_ENV === "production";

// function getBasePath(){
//    let basePath ='';

// }
let basePath = "";
if (process.env.NEXT_PUBLIC_ENV === "production") {
  basePath = "https://be-ecommerce-nextjs.onrender.com/";
} else if (process.env.NEXT_PUBLIC_ENV === "development") {
  basePath = "http://localhost:8080/";
}


const axiosInstance = axios.create({
  baseURL: basePath + "api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosInstance as ApiClient };
