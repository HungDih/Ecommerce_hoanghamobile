import axios from "axios";

const fetchCarousel = () => {
  return axios.get("http://localhost:8000/carousel");
};

const fetchAllProducts = () => {
  return axios.get("http://localhost:8000/products");
};

const fetchFilterName = () => {
  return axios.get("http://localhost:8000/filterName");
};

const fetchFilterPrice = async () => {
  return axios.get("http://localhost:8000/filterPrice");
};

export { fetchCarousel, fetchAllProducts, fetchFilterName, fetchFilterPrice };
