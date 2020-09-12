const Axios = require("axios");
const apiBaseURL = process.env.REACT_APP_API_URL;

export function getStudents() {
  return Axios.get(`${apiBaseURL}/student`);
}
export function getStudent(id) {
  return Axios.get(`${apiBaseURL}/student/${id}`);
}
export function saveStudent(data) {
  return Axios.post(`${apiBaseURL}/student`, data);
}

export function deleteStudent(id) {
  return Axios.delete(`${apiBaseURL}/student/${id}`);
}

export function updateStudent(id, data) {
  return Axios.put(`${apiBaseURL}/student/${id}`, data);
}
