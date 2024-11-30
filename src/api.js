import axios from "axios";
import { BASE_URL } from "./env.js";

const $axios = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export default $axios;
