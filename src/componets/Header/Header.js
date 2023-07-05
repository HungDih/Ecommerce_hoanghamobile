import "./Header.scss";
import { Nav } from "react-bootstrap";

const topNav = [
  {
    id: 1,
    title: "Bản mobile",
    path: "/",
  },
  {
    id: 2,
    title: "Giới thiệu",
    path: "/gioi-thieu",
  },
  {
    id: 3,
    title: "Sản phẩm đã xem",
    path: "/san-pham-da-xem",
  },
  {
    id: 4,
    title: "Trung tâm bảo hành",
    path: "/trung-tam-bh",
  },
  {
    id: 5,
    title: "Hệ thống 127 siêu thị",
    path: "/dai-ly",
  },
  {
    id: 6,
    title: "Tuyển dụng",
    path: "/tuyen-dung",
  },
  {
    id: 7,
    title: "Tra cứu đơn hàng",
    path: "/tra-cuu-dh",
  },
  {
    id: 8,
    title: "Đăng nhập",
    path: "/login",
  },
];

const products = [
  {
    id: 0,
    title: "Điện thoại",
    path: "/dien-thoai",
    icon: <i className="fa-solid fa-mobile-screen-button"></i>,
    group: [
      {
        heading: "Hãng sản xuất",
        extend: [
          {
            name: "Apple",
            path: "/dien-thoai/Apple",
          },
          {
            name: "Samsung",
            path: "/dien-thoai/Samsung",
          },
          {
            name: "Xiaomi",
            path: "/dien-thoai/Xiaomi",
          },
          {
            name: "OPPO",
            path: "/dien-thoai/OPPO",
          },
          {
            name: "TECNO",
            path: "/dien-thoai/TECNO",
          },
          {
            name: "Nokia",
            path: "/dien-thoai/Nokia",
          },
        ],
      },
      {
        heading: "Mức giá",
        extend: [
          "Dưới 1 triệu",
          "Trên 100 triệu",
          "Từ 2 đến 3 triệu",
          "Từ 3 đến 4 triệu",
          "Từ 6 đến 8 triệu",
          "Từ 15 đến 20 triệu",
          "Từ 20 đến 100 triệu",
        ],
      },
      {
        img: "image",
      },
      {
        heading: "Quan tâm nhất",
        extend: ["Hôm nay", "Tuần này", "Tháng này", "Năm nay"],
      },
    ],
  },
  {
    id: 1,
    title: "Đồng hồ",
    path: "/dong-ho",
    icon: <i className="fa-regular fa-clock"></i>,
    group: [
      {
        heading: "Hãng sản xuất",
        extend: [
          {
            name: "Apple",
            path: "/dong-ho/Apple",
          },
          {
            name: "Garmin",
            path: "/dong-ho/Garmin",
          },
          {
            name: "HUAWEI",
            path: "/dong-ho/HUAWEI",
          },
          {
            name: "Samsung",
            path: "/dong-ho/Samsung",
          },
          {
            name: "Xiaomi",
            path: "/dong-ho/Xiaomi",
          },
          {
            name: "Amazfit",
            path: "/dong-ho/Amazfit",
          },
        ],
      },
      {
        heading: "Mức giá",
        extend: [
          "Dưới 1 triệu",
          "Trên 100 triệu",
          "Từ 2 đến 3 triệu",
          "Từ 3 đến 4 triệu",
          "Từ 6 đến 8 triệu",
          "Từ 15 đến 20 triệu",
          "Từ 20 đến 100 triệu",
        ],
      },
      {
        img: "image",
      },
      {
        heading: "Quan tâm nhất",
        extend: ["Hôm nay", "Tuần này", "Tháng này", "Năm nay"],
      },
    ],
  },
  {
    id: 2,
    title: "Laptop",
    path: "/laptop",
    icon: <i className="fa-solid fa-laptop"></i>,
    group: [
      {
        heading: "Hãng sản xuất",
        extend: [
          {
            name: "Apple",
            path: "/laptop/Apple",
          },
          {
            name: "ASUS",
            path: "/laptop/ASUS",
          },
          {
            name: "Dell",
            path: "/laptop/Dell",
          },
          {
            name: "Acer",
            path: "/laptop/Acer",
          },
          {
            name: "MSI",
            path: "/laptop/MSI",
          },
          {
            name: "LG",
            path: "/laptop/LG",
          },
        ],
      },
      {
        heading: "Mức giá",
        extend: ["Trên 20 triệu", "Từ 12 đến 15 triệu", "Từ 15 đến 20 triệu"],
      },
      {
        img: "image",
      },
      {
        heading: "Phân loại sản phẩm",
        extend: [
          "Cao cấp - Sang trọng",
          "Đồ họa - Kĩ thuật",
          "Học tập - Văn phòng",
          "Laptop Gaming",
          "Mỏng nhẹ",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Apple",
    path: "/apple",
    icon: <i className="fa-brands fa-apple"></i>,
  },
  {
    id: 4,
    title: "Màn hình",
    path: "/screen",
    icon: <i className="fa-solid fa-display"></i>,
    group: [
      {
        heading: "Hãng sản xuất",
        extend: [
          {
            name: "Acer",
            path: "/laptop/Acer",
          },
          {
            name: "AOC",
            path: "/laptop/AOC",
          },
          {
            name: "Asus",
            path: "/laptop/Asus",
          },
          {
            name: "Dell",
            path: "/laptop/Dell",
          },
          {
            name: "GIGABYTE",
            path: "/laptop/GIGABYTE",
          },
          {
            name: "LG",
            path: "/laptop/LG",
          },
        ],
      },
      {
        heading: "Phân loại sản phẩm",
        extend: [
          "Màn hình đồ họa",
          "Màn hình Gaming",
          "Màn hình văn phòng",
          "Màn hình di động",
        ],
      },
      {
        img: "image",
      },
      {
        heading: "Phụ kiện màn hình",
      },
    ],
  },
  {
    id: 5,
    title: "SmartTV",
    path: "/tv",
    icon: <i className="fa-solid fa-tv"></i>,
  },
  {
    id: 6,
    title: "Tablet",
    path: "/tablet",
    icon: <i className="fa-solid fa-tablet"></i>,
  },
  {
    id: 7,
    title: "Âm thanh",
    path: "/am-thanh",
    icon: <i className="fa-solid fa-headphones"></i>,
  },
  {
    id: 8,
    title: "Smarthome",
    path: "/smart-home",
    icon: <i className="fa-solid fa-house-laptop"></i>,
  },
  {
    id: 9,
    title: "Phụ kiện",
    path: "/phu-kien",
    icon: <i className="fa-solid fa-paperclip"></i>,
  },
  {
    id: 10,
    title: "Đồ chơi CN",
    path: "/do-choi-cn",
    icon: <i className="fa-solid fa-gamepad"></i>,
  },
  {
    id: 11,
    title: "Máy trôi",
    path: "/may-troi-bh",
    icon: <i className="fa-solid fa-recycle"></i>,
  },
  {
    id: 12,
    title: "Sửa chữa",
    path: "/sua-chua",
    icon: <i className="fa-solid fa-screwdriver-wrench"></i>,
  },
  {
    id: 13,
    title: "Sim thẻ",
    path: "/sim-card",
    icon: <i className="fa-solid fa-sim-card"></i>,
  },
  {
    id: 14,
    title: "Tin hot",
    path: "/news",
    icon: <i className="fa-solid fa-newspaper"></i>,
  },
  {
    id: 15,
    title: "Ưu đãi",
    path: "/uu-dai",
    icon: <i className="fa-solid fa-bolt"></i>,
  },
];

function Header() {
  return (
    <header>
      <div className="top-nav">
        <Nav
          className="justify-content-end align-items-center"
          activeKey="/home"
        >
          {topNav.map((item, index) => {
            return (
              <Nav.Item key={index}>
                <Nav.Link className="top-link" href="/home">
                  {item.title}
                </Nav.Link>
              </Nav.Item>
            );
          })}
        </Nav>
      </div>

      <div className="container">
        <div className="heading">
          <div className="top-logo">
            <a
              href="/"
              title="CÔNG TY CỔ PHẦN XÂY DỰNG VÀ ĐẦU TƯ THƯƠNG MẠI HOÀNG HÀ"
            >
              <img
                src="https://hoanghamobile.com/Content/web/img/logo-text.png"
                alt="CÔNG TY CỔ PHẦN XÂY DỰNG VÀ ĐẦU TƯ THƯƠNG MẠI HOÀNG HÀ"
              />
            </a>
          </div>

          <div className="top-input-search">
            <input
              type="text"
              placeholder="Hôm nay bạn cần tìm gì?"
              autoComplete="off"
            />
            <button type="submit" className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div className="top-order">
            <div className="item-check-order">
              <a id="btnCheckOrder" href="/order/check">
                <span className="icon">
                  <i className="fa-solid fa-truck-fast"></i>
                </span>
                <span className="text">Kiểm tra đơn hàng</span>
              </a>
            </div>

            <div className="item-cart">
              <a href="/order/gio-hang">
                <i className="fa-solid fa-cart-shopping"></i>
                <label>
                  <span id="cart-total">0</span>
                </label>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bot-nav">
        <ul className="products">
          {products.map((item, index) => {
            if ((index === item.id)) {
              return (
                <li className="nav-item" key={index}>
                  <a href={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </a>

                  {item.group && (
                    <div className="sub-container">
                      <div className="sub">
                        {item.group.map((itemGroup, indexGroup) => {
                          if (itemGroup.heading && itemGroup.extend) {
                            return (
                              <div key={indexGroup}>
                                <h4>
                                  <a href={item.path}>{itemGroup.heading}</a>
                                </h4>

                                {itemGroup.extend.map((itemEx, indexEx) => {
                                  // console.log(itemEx);
                                  return (
                                    <ul className="menu-list" key={indexEx}>
                                      <li>
                                        <a href={itemEx.path}>{itemEx.name}</a>
                                      </li>
                                    </ul>
                                  );
                                })}
                              </div>
                            );
                          } else {
                            return;
                            // <div key={indexGroup}>
                            //   <h4>
                            //     <a href={item.path}>
                            //       <img src={"/"} />
                            //     </a>
                            //   </h4>
                            // </div>
                          }
                        })}
                      </div>
                    </div>
                  )}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </header>
  );
}

export default Header;
