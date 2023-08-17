import "./Header.scss";
import { Nav } from "react-bootstrap";
import { fetchTopNav, fetchCatelogy } from "../service/headerSection";
import { useState, useEffect } from "react";

function Header() {
  const [topNav, setTopNav] = useState([]);
  const [catelogy, setCatelogy] = useState([]);

  // Scroll to fixed
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    const scrollTrigger = 120;
    const handleScroll = () => {
      if (window.scrollY > scrollTrigger) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                  <Nav.Link className="top-link" href="/dien-thoai">
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
              href="/dien-thoai"
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

      <div className={`bot-nav ${fixed ? "fixed" : ""}`}>
        <ul className="products">
          {catelogy &&
            catelogy.map((item, index) => {
              return (
                <li className="nav-item" key={index}>
                  <a href={item.path}>
                    <i className={item.icon.props.className} />
                    <span>{item.title}</span>
                  </a>
                  {item.group && (
                    <div className="sub-container">
                      <div className="sub">
                        <div className="content-list">
                          {item.group.map((itemG, indexG) => {
                            return (
                              itemG.menuList &&
                              itemG.menuList.map((itemList, indexList) => {
                                return (
                                  itemList && (
                                    <div className="group-item" key={indexList}>
                                      <h4>
                                        <a href={item.path}>
                                          {itemList.heading}
                                        </a>
                                      </h4>
                                      <ul className="menu-list">
                                        {itemList.extend &&
                                          itemList.extend.map(
                                            (itemEx, indexEx) => {
                                              return (
                                                <li key={indexEx}>
                                                  <a href={itemEx.path}>
                                                    {itemEx.name}
                                                  </a>
                                                </li>
                                              );
                                            }
                                          )}
                                      </ul>
                                    </div>
                                  )
                                );
                              })
                            );
                          })}
                        </div>

                        <div className="ads">
                          {item.group.map((itemG, indexG) => {
                            return (
                              itemG.menuAds && (
                                <div className="menu-ads" key={indexG}>
                                  <a href={itemG.menuAds.path} target="_blank">
                                    <img src={itemG.menuAds.img} />
                                  </a>
                                </div>
                              )
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );

              // }
            })}
        </ul>
      </div>
    </header>
  );
}

export default Header;
