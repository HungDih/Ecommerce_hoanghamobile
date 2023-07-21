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
  let respone = await axios.get("http://localhost:8000/filterPrice");
  console.log("from products.js :", respone);
  return respone;
};

export { fetchCarousel, fetchAllProducts, fetchFilterName, fetchFilterPrice };
