import axios from "axios";

const fetchTopNav = () => {
  return axios.get("http://localhost:5000/navtitles");
};

const fetchCatelogy = () => {
  return axios.get("http://localhost:5000/catelogys");
};

export { fetchTopNav, fetchCatelogy };
