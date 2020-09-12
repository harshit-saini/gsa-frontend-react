import Axios from "axios";
if (process.env.NODE_ENV !== "development") require("dotenv").config();
Axios.defaults.baseURL = process.env.apiBaseURL;

export default {
  get: Axios.get,
  post: Axios.post,
  put: Axios.put,
  delete: Axios.delete,
};
