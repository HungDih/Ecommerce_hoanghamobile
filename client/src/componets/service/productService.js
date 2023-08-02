import axios from "axios";

const fetchCarousel = () => {
  return axios.get("http://localhost:5000/carousels");
};

const fetchAllProducts = () => {
  return axios.get("http://localhost:5000/products");
};

const fetchFilterName = () => {
  return axios.get("http://localhost:5000/names");
};

const fetchFilterPrice = async () => {
  return axios.get("http://localhost:5000/prices");
};

export { fetchCarousel, fetchAllProducts, fetchFilterName, fetchFilterPrice };
