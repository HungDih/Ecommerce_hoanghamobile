import axios from "axios";

const fetchAllProducts = () => {
  return axios.get("http://localhost:8000/products");
};

const fetchFilterName = () => {
  return axios.get("http://localhost:8000/filterName");
};

export { fetchAllProducts, fetchFilterName };
