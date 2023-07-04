import "./Header.scss";
import { Nav } from "react-bootstrap";

const topNav = [
  {
    id: 1,
    title: "Bản mobile",
  },
  {
    id: 2,
    title: "Giới thiệu",
  },
  {
    id: 3,
    title: "Sản phẩm đã xem",
  },
  {
    id: 4,
    title: "Trung tâm bảo hành",
  },
  {
    id: 5,
    title: "Hệ thống 127 siêu thị",
  },
  {
    id: 6,
    title: "Tuyển dụng",
  },
  {
    id: 7,
    title: "Tra cứu đơn hàng",
  },
  {
    id: 8,
    title: "Đăng nhập",
  },
];

const products = [
  {
    id: 1,
    title: "Điện thoại",
    icon: <i className="fa-solid fa-mobile-screen-button"></i>,
    detail: {
      group1: [
        {
          heading: "Hãng sản xuất",
          brand: ["Apple", "Samsung", "Xiaomi", "OPPO", "TECNO", "Nokia"],
        },
      ],
      group2: [
        {
          heading: "Mức giá",
          price: [
            "Dưới 1 triệu",
            "Trên 100 triệu",
            "Từ 2 đến 3 triệu",
            "Từ 3 đến 4 triệu",
            "Từ 6 đến 8 triệu",
            "Từ 15 đến 20 triệu",
            "Từ 20 đến 100 triệu",
          ],
        },
      ],
      group3: [
        {
          heading: "Quan tâm nhất",
          liked: ["Hôm nay", "Tuần này", "Tháng này", "Năm nay"],
        },
      ],
    },
  },
  {
    id: 2,
    title: "Đồng hồ",
    icon: <i className="fa-regular fa-clock"></i>,
    detail: {
      group1: [
        {
          heading: "Hãng sản xuất",
          brand: [
            "Apple",
            "Garmin",
            "HUAWEI",
            "Samsung",
            "Xiaomi",
            "Amazfit",
            "Đồng hồ trẻ em",
            "Kieslect",
            "Masstel",
            "OPPO",
            "realme",
            "SoundPEATS",
          ],
        },
      ],
      group2: [
        {
          heading: "Mức giá",
          price: [
            "Dưới 1 triệu",
            "Trên 100 triệu",
            "Từ 2 đến 3 triệu",
            "Từ 3 đến 4 triệu",
            "Từ 6 đến 8 triệu",
            "Từ 15 đến 20 triệu",
            "Từ 20 đến 100 triệu",
          ],
        },
      ],
      group3: [
        {
          heading: "Quan tâm nhất",
          liked: ["Hôm nay", "Tuần này", "Tháng này", "Năm nay"],
        },
      ],
    },
  },
  {
    id: 3,
    title: "Laptop",
    icon: <i className="fa-solid fa-laptop"></i>,
    detail: {
      group1: [
        {
          heading: "Hãng sản xuất",
          brand: [
            "Apple",
            "ASUS",
            "Dell",
            "Acer",
            "MSI",
            "LG",
            "Huawei",
            "Surface",
            "Lenovo",
            "HP",
            "GIGABYTE",
            "Itel",
            "Xiaomi",
            "Masstel",
          ],
        },
      ],
      group2: [
        {
          heading: "Mức giá",
          price: ["Trên 20 triệu", "Từ 12 đến 15 triệu", "Từ 15 đến 20 triệu"],
        },
      ],
      group3: [
        {
          heading: "Phân loại sản phẩm",
          liked: [
            "Cao cấp - Sang trọng",
            "Đồ họa - Kĩ thuật",
            "Học tập - Văn phòng",
            "Laptop Gaming",
            "Mỏng nhẹ",
          ],
        },
      ],
    },
  },
  {
    id: 4,
    title: "Apple",
    icon: <i className="fa-brands fa-apple"></i>,
  },
  {
    id: 5,
    title: "Màn hình",
    icon: <i className="fa-solid fa-display"></i>,
    detail: {
      heading: ["Hãng sản xuất", "Phân loại sản phẩm", "Phụ kiện màn hình"],
      brand: [
        "Acer",
        "AOC",
        "Asus",
        "Dell",
        "GIGABYTE",
        "HP",
        "Huawei",
        "Lenovo",
        "LG",
        "MSI",
        "Samsung",
        "Viewsonic",
      ],
      price: [
        "Màn hình đồ họa",
        "Màn hình Gaming",
        "Màn hình văn phòng",
        "Màn hình di động",
      ],
    },
  },
  {
    id: 6,
    title: "SmartTV",
    icon: <i className="fa-solid fa-tv"></i>,
  },
  {
    id: 7,
    title: "Tablet",
    icon: <i className="fa-solid fa-tablet"></i>,
  },
  {
    id: 8,
    title: "Âm thanh",
    icon: <i className="fa-solid fa-headphones"></i>,
  },
  {
    id: 9,
    title: "Smarthome",
    icon: <i className="fa-solid fa-house-laptop"></i>,
  },
  {
    id: 10,
    title: "Phụ kiện",
    icon: <i className="fa-solid fa-paperclip"></i>,
  },
  {
    id: 11,
    title: "Đồ chơi CN",
    icon: <i className="fa-solid fa-gamepad"></i>,
  },
  {
    id: 12,
    title: "Máy trôi",
    icon: <i className="fa-solid fa-recycle"></i>,
  },
  {
    id: 13,
    title: "Sửa chữa",
    icon: <i className="fa-solid fa-screwdriver-wrench"></i>,
  },
  {
    id: 14,
    title: "Sim thẻ",
    icon: <i className="fa-solid fa-sim-card"></i>,
  },
  {
    id: 15,
    title: "Tin hot",
    icon: <i className="fa-solid fa-newspaper"></i>,
  },
  {
    id: 16,
    title: "Ưu đãi",
    icon: <i className="fa-solid fa-bolt"></i>,
  },
];

const subGroup = [
  {
    id: 1,
    group: [
      {
        header: "Hãng sản xuất",
        item: ["Apple", "Samsung", "Xiaomi", "OPPO", "TECNO", "Nokia"],
      },
      {
        header: "Mức giá",
        item: [
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
        header: "Quan tâm nhất",
        item: ["Hôm nay", "Tuần này", "Tháng này", "Năm nay"],
      },
    ],
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
              <a href="/gio-hang">
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
            return (
              <li className="actived" key={index}>
                <a href="#">
                  {item.icon}
                  <span>{item.title}</span>
                </a>

                <div className="sub-container">
                  <div className="sub">
                    {/* {item.detail.heading.map((itemHeading, indexHeading) => {
                      return (
                        <div className="menu g1">
                          <h4>
                            <a>{itemHeading}</a>
                          </h4>
                        </div>
                      );
                    })} */}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Header;
