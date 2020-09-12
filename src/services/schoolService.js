const Axios = require("axios");
const apiBaseURL = process.env.REACT_APP_API_URL;

export function getSchools() {
  return Axios.get(`${apiBaseURL}/school`);
}
export function getSchool(id) {
  return Axios.get(`${apiBaseURL}/school/${id}`);
}
export function saveSchool(data) {
  return Axios.post(`${apiBaseURL}/school`, data);
}

export function deleteSchool(id) {
  return Axios.delete(`${apiBaseURL}/school/${id}`);
}

export function updateSchool(id, data) {
  return Axios.put(`${apiBaseURL}/school/${id}`, data);
}
