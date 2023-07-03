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
              id="kwd"
              name="kwd"
              placeholder="Hôm nay bạn cần tìm gì?"
              autocomplete="off"
            />
            <button type="submit" class="search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div className="top-order">
            <div className="item-check-order">
              <a id="btnCheckOrder" href="/order/check">
                <span className="icon">
                  <i class="fa-solid fa-truck-fast"></i>
                </span>
                <span className="text">Kiểm tra đơn hàng</span>
              </a>
            </div>

            <div className="item-cart">
              <a href="/gio-hang">
                <i class="fa-solid fa-cart-shopping"></i>
                <label>
                  <span id="cart-total">0</span>
                </label>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bot-nav"></div>
    </header>
  );
}

export default Header;
