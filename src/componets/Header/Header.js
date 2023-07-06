import "./Header.scss";
import { Nav } from "react-bootstrap";
import MyContext from "../MyContext";
import Mobile from "../pages/Mobile";

function Header() {
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
              cdn: "https://cdn.hoanghamobile.com/i/cat/Uploads/2022/09/07/logoooooooooooooooo.png",
            },
            {
              name: "Samsung",
              path: "/dien-thoai/Samsung",
              cdn: "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/11/30/samsung-logo-transparent.png",
            },
            {
              name: "Xiaomi",
              path: "/dien-thoai/Xiaomi",
              cdn: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/05/27/xiaomi-global-logo-rgb-logo-moi.png",
            },
            {
              name: "OPPO",
              path: "/dien-thoai/OPPO",
              cdn: "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/09/14/brand%20(3).png",
            },
            {
              name: "TECNO",
              path: "/dien-thoai/TECNO",
              cdn: "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/02/tecno.png",
            },
            {
              name: "Nokia",
              path: "/dien-thoai/Nokia",
              cdn: "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/09/14/brand%20(4).png",
            },
            {
              name: "Realme",
              path: "/dien-thoai/Realme",
              cdn: "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/09/14/brand%20(6).png",
            },
            {
              name: "Vivo",
              path: "/dien-thoai/Vivo",
              cdn: "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/11/30/vivo-logo.png",
            },
            {
              name: "Honor",
              path: "/dien-thoai/Honor",
              cdn: "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/19/honor-logo-2022-svg.png",
            },
            {
              name: "Infinix",
              path: "/dien-thoai/Infinix",
              cdn: "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/05/26/infinix-logo-svg.png",
            },
            {
              name: "ROG",
              path: "/dien-thoai/ROG",
              cdn: "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/12/rog.png",
            },
            {
              name: "XOR",
              path: "/dien-thoai/XOR",
              cdn: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/12/24/xorr.png",
            },
            {
              name: "Masstel",
              path: "/dien-thoai/Masstel",
              cdn: "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/10/30/logo-masstel-4.png",
            },
          ],
        },
        {
          heading: "Mức giá",
          extend: [
            {
              name: "Dưới 1 triệu",
              path: "/dien-thoai/<1tr",
            },
            {
              name: "Trên 100 triệu",
              path: "/dien-thoai/>100tr",
            },
            {
              name: "Từ 2 đến 3 triệu",
              path: "/dien-thoai/2-3tr",
            },
            {
              name: "Từ 3 đến 4 triệu",
              path: "/dien-thoai/3-4tr",
            },
            {
              name: "Từ 6 đến 8 triệu",
              path: "/dien-thoai/6-8tr",
            },
            {
              name: "Từ 15 đến 20 triệu",
              path: "/dien-thoai/15-20tr",
            },
            {
              name: "Từ 20 đến 100 triệu",
              path: "/dien-thoai/20-100tr",
            },
          ],
        },
        {
          heading: "",
          extend: [
            {
              name: "",
              path: "/",
            },
          ],
        },
        {
          heading: "Quan tâm nhất",
          extend: [
            {
              name: "Hôm nay",
              path: "/dien-thoai/today",
            },
            {
              name: "Tuần này",
              path: "/dien-thoai/week",
            },
            {
              name: "Tháng này",
              path: "/dien-thoai/month",
            },
            {
              name: "Năm nay",
              path: "/dien-thoai/year",
            },
          ],
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
            {
              name: "Dưới 1 triệu",
              path: "/dong-ho/<1tr",
            },
            {
              name: "Trên 100 triệu",
              path: "/dong-ho/>100tr",
            },
            {
              name: "Từ 2 đến 3 triệu",
              path: "/dong-ho/2-3tr",
            },
            {
              name: "Từ 3 đến 4 triệu",
              path: "/dong-ho/3-4tr",
            },
            {
              name: "Từ 6 đến 8 triệu",
              path: "/dong-ho/6-8tr",
            },
            {
              name: "Từ 15 đến 20 triệu",
              path: "/dong-ho/15-20tr",
            },
            {
              name: "Từ 20 đến 100 triệu",
              path: "/dong-ho/20-100tr",
            },
          ],
        },
        {
          heading: "",
          extend: [
            {
              name: "",
              path: "/",
            },
          ],
        },
        {
          heading: "Quan tâm nhất",
          extend: [
            {
              name: "Hôm nay",
              path: "/dong-ho/today",
            },
            {
              name: "Tuần này",
              path: "/dong-ho/week",
            },
            {
              name: "Tháng này",
              path: "/dong-ho/month",
            },
            {
              name: "Năm nay",
              path: "/dong-ho/year",
            },
          ],
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
          extend: [
            {
              name: "Trên 20 triệu",
              path: "/laptop/>20tr",
            },
            {
              name: "Từ 12 đến 15 triệu",
              path: "/laptop/>12-15tr",
            },
            {
              name: "Từ 15 đến 20 triệu",
              path: "/laptop/15-20tr",
            },
          ],
        },
        {
          heading: "",
          extend: [
            {
              name: "",
              path: "/",
            },
          ],
        },
        {
          heading: "Phân loại sản phẩm",
          extend: [
            {
              name: "Cao cấp - Sang trọng",
              path: "/laptop/luxury",
            },
            {
              name: "Đồ họa - Kĩ thuật",
              path: "/laptop/graphic",
            },
            {
              name: "Học tập - Văn phòng",
              path: "/laptop/study-office",
            },
            {
              name: "Laptop Gaming",
              path: "/laptop/gaming",
            },
            {
              name: "Mỏng nhẹ",
              path: "/laptop/simple",
            },
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
              path: "/screen/Acer",
            },
            {
              name: "AOC",
              path: "/screen/AOC",
            },
            {
              name: "Asus",
              path: "/screen/Asus",
            },
            {
              name: "Dell",
              path: "/screen/Dell",
            },
            {
              name: "GIGABYTE",
              path: "/screen/GIGABYTE",
            },
            {
              name: "LG",
              path: "/screen/LG",
            },
          ],
        },
        {
          heading: "Phân loại sản phẩm",
          extend: [
            {
              name: "Màn hình đồ họa",
              path: "/screen/graphic",
            },
            {
              name: "Màn hình Gaming",
              path: "/screen/gaming",
            },
            {
              name: "Màn hình văn phòng",
              path: "/screen/study-office",
            },
            {
              name: "Màn hình di động",
              path: "/screen/mobile",
            },
          ],
        },
        {
          heading: "",
          extend: [
            {
              name: "",
              path: "/",
            },
          ],
        },
        {
          heading: "Phụ kiện màn hình",
          extend: [{ name: "", path: "" }],
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

  return (
    <>
      <header>
        <div className="top-nav">
          <Nav
            className="justify-content-end align-items-center nav"
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
              if (index === item.id) {
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
                                <div className="group-item" key={indexGroup}>
                                  <h4>
                                    <a href={item.path}>{itemGroup.heading}</a>
                                  </h4>

                                  {itemGroup.extend.map((itemEx, indexEx) => {
                                    return (
                                      <ul className="menu-list" key={indexEx}>
                                        <li>
                                          <a href={itemEx.path}>
                                            {itemEx.name}
                                          </a>
                                        </li>
                                      </ul>
                                    );
                                  })}
                                </div>
                              );
                            } else {
                              return;
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
      <MyContext.Provider value={products}>
        <Mobile />
      </MyContext.Provider>
    </>
  );
}

export default Header;
