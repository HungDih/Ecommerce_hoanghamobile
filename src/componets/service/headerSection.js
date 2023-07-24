import axios from "axios";

const fetchTopNav = () => {
  return axios.get("http://localhost:8000/topNav");
};

const fetchCatelogy = () => {
  return axios.get("http://localhost:8000/catelogy");
};

export { fetchTopNav, fetchCatelogy };
