import axios from "axios";

const apiURL = "http://api.wuzheyun.cn/v1";
// const apiURL = "http://localhost:5000/v1";

var instance = axios.create({
  baseURL: apiURL
});

export default instance;
