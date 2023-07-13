import "../pages/Mobile.scss";
import React, { useEffect, useState } from "react";
import { products } from "../Header/Header";
import Header from "../Header/Header";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Mobile() {
  const products = [
    {
      id: 1,
      title: "Nokia C21 Plus (2GB/64GB) - Chính hãng",
      price: "2,890,000 ₫",
      newPrice: "1,780,000 ₫",
      changePrice: "",
      brand: "Nokia",
      sale: "Giảm 1,110,000₫",
      saleDes: "VÀ 6 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/05/07/image-removebg-preview_637875529202208799.png",
    },
    {
      id: 2,
      title: "Redmi Note 12S (8GB/256GB) - Chính hãng",
      price: "6,690,000 ₫",
      newPrice: "6,190,000 ₫",
      changePrice: "5,890,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images: [
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12s.png",
      ],
    },
    {
      id: 3,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 4,
      title: "Redmi Note 12 (4GB/128GB) - Chính hãng",
      price: "4,990,000 ₫",
      newPrice: "4,290,000 ₫",
      changePrice: "3,990,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 9 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 5,
      title: "Redmi Note 12 (8GB/128GB) - Chính hãng",
      price: "",
      newPrice: "5,790,000 ₫",
      changePrice: "5,490,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 9 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 6,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 7,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 8,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 9,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 10,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 11,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 12,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 13,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 14,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 15,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 16,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 17,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 18,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 19,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 20,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 21,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 22,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 23,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 24,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 25,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 26,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 27,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 28,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 29,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 30,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 31,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 32,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 33,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 34,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 35,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 36,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 37,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 38,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 39,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 40,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 41,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 42,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 43,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 44,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 45,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 46,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 47,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 48,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 49,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 50,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 51,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 52,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 53,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 54,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 55,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 56,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 57,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 58,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 59,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 60,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 61,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 62,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 63,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 64,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 65,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 66,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 67,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 68,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 69,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 70,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 71,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 72,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 73,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 74,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 75,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 76,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 77,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 78,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 79,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
    {
      id: 80,
      title: "Redmi Note 12 Pro (8GB/256GB) - Chính hãng",
      price: "7,990,000 ₫",
      newPrice: "7,490,000 ₫",
      changePrice: "7,190,000 ₫",
      brand: "Redmi",
      saleDes: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png",
    },
  ];

  const brand = [
    {
      name: "Apple",
      path: "/dien-thoai/Apple",
      logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2022/09/07/logoooooooooooooooo.png",
    },
    {
      name: "Samsung",
      path: "/dien-thoai/Samsung",
      logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/11/30/samsung-logo-transparent.png",
    },
    {
      name: "Xiaomi",
      path: "/dien-thoai/Xiaomi",
      logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/05/27/xiaomi-global-logo-rgb-logo-moi.png",
    },
    {
      name: "OPPO",
      path: "/dien-thoai/OPPO",
      logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/09/14/brand%20(3).png",
    },
    {
      name: "TECNO",
      path: "/dien-thoai/TECNO",
      logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/02/tecno.png",
    },
    {
      name: "Nokia",
      path: "/dien-thoai/Nokia",
      logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/09/14/brand%20(4).png",
    },
    {
      name: "Realme",
      path: "/dien-thoai/Realme",
      logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/09/14/brand%20(6).png",
    },
    {
      name: "Vivo",
      path: "/dien-thoai/Vivo",
      logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/11/30/vivo-logo.png",
    },
    {
      name: "Honor",
      path: "/dien-thoai/Honor",
      logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/19/honor-logo-2022-svg.png",
    },
    {
      name: "Infinix",
      path: "/dien-thoai/Infinix",
      logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/05/26/infinix-logo-svg.png",
    },
    {
      name: "ROG",
      path: "/dien-thoai/ROG",
      logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/12/rog.png",
    },
    {
      name: "XOR",
      path: "/dien-thoai/XOR",
      logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/12/24/xorr.png",
    },
    {
      name: "Masstel",
      path: "/dien-thoai/Masstel",
      logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/10/30/logo-masstel-4.png",
    },
  ];

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const respone = await fetch("https://dummyjson.com/products");
      if (componentMounted) {
        setData(await respone.clone().json());
        setFilter(await respone.clone().json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  const Loading = () => {
    return <h1>Hello world....</h1>;
  };
  const ShowProducts = () => {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </>
    );
  };

  return (
    <div className="content">
      <div className="top-ads">
        <a
          href="https://hoanghamobile.com/dien-thoai-di-dong/xiaomi/redmi-note-12-series?source=Chuyenmuc"
          target="_top"
        >
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/07/04/1200x200_638240586236126285.jpg"
            className="img-ads"
            alt="Top Ad"
          />
        </a>
      </div>
      <div className="brand-carousel">
        <button type="button" role="presentation" className="btn-directional">
          <i className="fa-solid fa-caret-left"></i>
        </button>
        <ul className="list-carousel">
          {brand.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.path} title={item.name}>
                  <img src={item.logo} />
                </a>
              </li>
            );
          })}
        </ul>
        <button type="button" role="presentation" className="btn-directional">
          <span aria-label="Previous">
            <i className="fa-solid fa-caret-right"></i>
          </span>
        </button>
      </div>
      <div className="products">
        <div className="nav-breadcrums">
          <i className="fa-solid fa-house"></i>
          <a href="/">
            <strong>Trang chủ › </strong>
          </a>
          <a href="/dien-thoai">
            <span>Điện thoại</span>
          </a>
        </div>

        <div className="nav-fillter">
          <div className="detail-filter">
            <strong>Lọc danh sách: </strong>
            {filter.map((item, index) => {
              return (
                <div className="header-fillter" key={index}>
                  <label>
                    <a onClick={() => {}}>
                      {item}
                      <i className="fa-solid fa-angle-down"></i>
                    </a>
                  </label>
                </div>
              );
            })}

            <div className="sub-filter">
              <ul>
                <li>
                  <a href="/dien-thoai-di-dong/iphone">Apple</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="list-products"></div>
      </div>
    </div>
  );
}

export default Mobile;
