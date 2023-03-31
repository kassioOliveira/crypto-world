import axios from "axios";


import { errorInterceptor} from "./interceptors/ErrorInterceptor";
import { responseInterceptor } from "./interceptors/ResponseInterceptor";

const Api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    maxBodyLength:Infinity
});

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error),
);


export { Api };