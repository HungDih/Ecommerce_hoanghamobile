import axios from "axios";

const fetchAllProducts = () => {
  return axios.get("http://localhost:8000/products");
};

export { fetchAllProducts };
