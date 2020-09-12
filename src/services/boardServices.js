const Axios = require("axios");
const apiBaseURL = process.env.REACT_APP_API_URL;

export function getBoards() {
  return Axios.get(`${apiBaseURL}/board`);
}
export function getBoard(id) {
  return Axios.get(`${apiBaseURL}/board/${id}`);
}
export function saveBoard(data) {
  return Axios.post(`${apiBaseURL}/board`, data);
}

export function deleteBoard(id) {
  return Axios.delete(`${apiBaseURL}/board/${id}`);
}

export function updateBoard(id, data) {
  return Axios.put(`${apiBaseURL}/board/${id}`, data);
}
