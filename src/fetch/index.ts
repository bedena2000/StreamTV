import axios from "axios";
import { envConfig } from "../config";

export const apiClient = axios.create({
  baseURL: envConfig.apiURL,
  headers: {
    Authorization: `Bearer ${envConfig.apiKey}`,
  },
});
