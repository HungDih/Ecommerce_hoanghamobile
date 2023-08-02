import "./Footer.scss";
import { fetchFooter } from "../service/footerSection";
import { useState, useEffect } from "react";

function Footer() {
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let respone = await fetchFooter();
    if (respone && respone.data) {
      setFooterData(respone.data);
    }
  };

  // ScrollUpButton
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const scrollTrigger = 300;
    const handleScroll = () => {
      if (window.scrollY > scrollTrigger) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="section">
        <div className="content">
          {footerData.map((itemF, indexF) => {
            return (
              <div className="link-content" key={indexF}>
                <h4>{itemF.header}</h4>

                {itemF.extends &&
                  itemF.extends.map((itemE, indexE) => {
                    return (
                      <ul key={indexE}>
                        <li>
                          <a href={itemE.path}>{itemE.title}</a>
                        </li>
                      </ul>
                    );
                  })}

                {itemF.label &&
                  itemF.label.map((itemE, indexE) => {
                    if (itemE.src.length == 2) {
                      return (
                        <ul key={itemE.row}>
                          <li>
                            {itemE.src.map((itemS, indexS) => {
                              return <img key={indexS} src={itemS} />;
                            })}
                          </li>
                        </ul>
                      );
                    } else {
                      return (
                        <a href={itemE.path} target="_blank" key={indexE}>
                          <img src={itemE.src} />
                        </a>
                      );
                    }
                  })}
              </div>
            );
          })}

          <div className="info">
            <p>
              © 2020. CÔNG TY CỔ PHẦN XÂY DỰNG VÀ ĐẦU TƯ THƯƠNG MẠI HOÀNG HÀ.
              MST: 0106713191. (Đăng ký lần đầu: Ngày 15 tháng 12 năm 2014, Đăng
              ký thay đổi ngày 24/11/2022)
            </p>
            <p>
              <strong>
                GP số 426/GP-TTĐT do sở TTTT Hà Nội cấp ngày 22/01/2021
              </strong>
            </p>
            <p>
              Địa chỉ: Số 89 Đường Tam Trinh, Phường Mai Động, Quận Hoàng Mai,
              Thành Phố Hà Nội, Việt Nam. Điện thoại: 1900.2091. Chịu trách
              nhiệm nội dung: <strong>Hoàng Ngọc Chiến</strong>.
            </p>
          </div>
        </div>

        <div className="navigation">
          <div className="social">
            <ul>
              <li>
                <a href="https://www.facebook.com/hoanghamobilecom">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCJm_GdFJzT8h1odq1oMu_7Q">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/hoanghamobile/?hl=vi">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@hoanghaangels?">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="contact">
            <div className="sticker">
              <a href="https://hoanghamobile.com/kho-san-pham-cu">
                <img src="https://hoanghamobile.com/Content/web/img/maycugiatot.png" />
              </a>
            </div>
            <div className="sticker">
              <a href="https://hoanghamobile.com/dat-hang/thu-cu-doi-moi-iphone-chinh-hang-vn-a-hoanghamobile">
                <img src="https://hoanghamobile.com/Content/web/img/thucugiacao.png" />
              </a>
            </div>
            <div className="zalo">
              <a href="https://oa.zalo.me/262829019064124420">
                <img src="https://hoanghamobile.com/Content/web/img/zalo.svg" />
              </a>
            </div>
          </div>
        </div>

        <button
          className={`scroll-up-button ${isVisible ? "show" : ""}`}
          onClick={handleScrollUp}
        ></button>
      </div>
    </footer>
  );
}

export default Footer;
