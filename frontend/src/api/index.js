import axios from "axios";
const production_url = process.env.REACT_APP_BACKEND_URL;
const local_api = "http://localhost:4000";
const prod = process.env.REACT_APP_ENV === "production";
const url = prod ? production_url : local_api;

const Axios = axios.create({
  baseURL: url,
  crossDomain: true,
});
export class request {
  static get(path) {
    return Axios.get(path);
  }
  static post(path, body) {
    return Axios.post(path, body);
  }
  static delete(path) {
    return Axios.delete(path);
  }
}
