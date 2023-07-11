import "../pages/Mobile.scss";
import React from "react";

function Mobile() {
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

  const filter = [{
    
  }]

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
          <i class="fa-solid fa-caret-left"></i>
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
        <div className="fillter-nav">
          <div className="nav-breadcrums">

          </div>
          <div className="nav-fillter">
<div className="title-filter">

</div>
          </div>
        </div>
        <div className="list-products"></div>
      </div>
    </div>
  );
}

export default Mobile;
