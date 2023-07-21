import axios from "axios";

const fetchFooter = () => {
  return axios.get("http://localhost:8000/footerSection");
};

export { fetchFooter };
