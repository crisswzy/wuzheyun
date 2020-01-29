import axios from "./axios";

export function getPosts() {
  return axios.get("/posts");
}

export function getPost(title) {
  return axios.get("/posts/" + title);
}
