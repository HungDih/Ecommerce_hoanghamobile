import axios from "axios";

const fetchFooter = () => {
  return axios.get("http://localhost:5000/footers");
};

export { fetchFooter };
