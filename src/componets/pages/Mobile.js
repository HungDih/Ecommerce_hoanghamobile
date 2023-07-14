import "../pages/Mobile.scss";
import React, { useEffect, useState } from "react";
import { products } from "../Header/Header";
import Header from "../Header/Header";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Mobile() {
  const products = [
    {
      title: "Redmi Note 12S (8GB/256GB) - Chính hãng",
      sticker: "https://hoanghamobile.com/Content/web/sticker/hot.png",
      newPrice: "6,190,000 ₫",
      price: "6,690,000 ₫",
      upPrice: "5,890,000 ₫",
      brand: "Xiaomi",
      discount: "Giảm 500,000₫",
      saleAdd: "VÀ 10 KM KHÁC",
      images:
        "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12s.png",
      id: 2,
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

  // const [data, setData] = useState([]);
  // const [filter, setFilter] = useState(data);
  // const [loading, setLoading] = useState(false);
  // let componentMounted = true;

  // useEffect(() => {
  //   const getProducts = async () => {
  //     setLoading(true);
  //     const respone = await fetch("https://dummyjson.com/products");
  //     if (componentMounted) {
  //       setData(await respone.clone().json());
  //       setFilter(await respone.clone().json());
  //       setLoading(false);
  //       console.log(filter);
  //     }
  //     return () => {
  //       componentMounted = false;
  //     };
  //   };
  //   getProducts();
  // }, []);
  // const Loading = () => {
  //   return <h1>Hello world....</h1>;
  // };

  // const ShowProducts = () => {
  //   return (
  //     <>
  //       <Card style={{ width: "18rem" }}>
  //         <Card.Img variant="top" src="holder.js/100px180" />
  //         <Card.Body>
  //           <Card.Title>Card Title</Card.Title>
  //           <Card.Text>
  //             Some quick example text to build on the card title and make up the
  //             bulk of the card's content.
  //           </Card.Text>
  //           <Button variant="primary">Go somewhere</Button>
  //         </Card.Body>
  //       </Card>
  //     </>
  //   );
  // };

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

        <div className="container">
          <div className="col-container">
            <h1>Hello</h1>
          </div>
          <div className="col-container">
            <h1>Hello</h1>
          </div>
          <div className="col-container">
            <h1>Hello</h1>
          </div>
          <div className="col-container">
            <h1>Hello</h1>
          </div>
          <div className="col-container">
            <h1>Hello</h1>
          </div>
          <div className="col-container">
            <h1>Hello</h1>
          </div>
          <div className="col-container">
            <h1>Hello</h1>
          </div>
          <div className="col-container">
            <h1>Hello</h1>
          </div>
          <div className="col-container">
            <h1>Hello</h1>
          </div>
          <div className="col-container">
            <h1>Hello</h1>
          </div>
        </div>
        {/* <div className="nav-fillter">
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
        </div> */}

        <div className="list-products"></div>
        <h1>Điện thoại</h1>

        <div className="item-product">
          <div className="img-product">
            <a
              href="/dien-thoai-di-dong/apple-iphone-14-pro-max-128gb-chinh-hang-vn-a"
              title="iPhone 14 Pro Max (128GB) - Chính hãng VN/A"
            >
              <img
                src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/06/05/my-project.png"
                alt="iPhone 14 Pro Max (128GB) - Chính hãng VN/A"
                title="iPhone 14 Pro Max (128GB) - Chính hãng VN/A"
              />
            </a>
          </div>

          <div className="sticker-product sticker-left">
            <span>
              <img
                src="/Content/web/sticker/apple.png"
                title="Chính hãng Apple"
              />
            </span>
          </div>

          <div className="info-product">
            <a
              href="/dien-thoai-di-dong/apple-iphone-14-pro-max-128gb-chinh-hang-vn-a"
              className="title"
              title="iPhone 14 Pro Max (128GB) - Chính hãng VN/A"
            >
              iPhone 14 Pro Max (128GB) - Chính hãng VN/A
            </a>
            <span className="price">
              <strong>25,990,000 ₫</strong>
            </span>

            <div className="upprice">
              <label>
                Giá lên đời từ:{" "}
                <strong className="text-red">23,990,000 ₫</strong>
              </label>
            </div>
          </div>

          <div className="note-product">
            <span className="bag">KM</span>{" "}
            <label title="Giảm thêm tới 800.000đ khi mở thẻ tín dụng TPBank EVO.">
              Giảm thêm tới 800.000đ khi mở thẻ t...
            </label>
            <strong className="text-orange">VÀ 10 KM KHÁC</strong>
          </div>

          <div className="promote-product">
            <a href="/dien-thoai-di-dong/apple-iphone-14-pro-max-128gb-chinh-hang-vn-a">
              <ul>
                <li>
                  <span className="bag">KM</span> Giảm thêm tới 800.000đ khi mở
                  thẻ tín dụng TPBank EVO.
                </li>
                <li>
                  <span className="bag">KM</span> GIẢM THÊM 200.000đ khi thanh
                  toán qua VNPAY-QR.
                </li>
                <li>
                  <span className="bag">KM</span> Trợ giá lên tới 1.000.000đ khi
                  thu cũ đổi mới lên đời iPhone từ iPhone cũ (trừ mã VN/A) và
                  các sản phẩm khác.
                </li>
              </ul>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
