import "./Header.scss";
import { Nav } from "react-bootstrap";
import { fetchTopNav, fetchCatelogy } from "../service/headerSection";
import { useState, useEffect } from "react";

function Header() {
  const [topNav, setTopNav] = useState([]);
  const [catelogy, setCatelogy] = useState([]);

  useEffect(() => {
    getTopNav();
    getCatelogy();
  }, []);

  const getTopNav = async () => {
    let respone = await fetchTopNav();
    if (respone && respone.data) {
      setTopNav(respone.data);
    }
  };

  const getCatelogy = async () => {
    let respone = await fetchCatelogy();
    if (respone && respone.data) {
      setCatelogy(respone.data);
    }
  };

  return (
    <header>
      <div className="top-nav">
        <Nav
          className="justify-content-end align-items-center nav"
          activeKey="/home"
        >
          {topNav &&
            topNav.map((item, index) => {
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
          {catelogy &&
            catelogy.map((item, index) => {
              if (index === item.id) {
                return (
                  <li className="nav-item" key={index}>
                    <a href={item.path}>
                      <i className={item.icon.props.className} />
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
  );
}

export default Header;
