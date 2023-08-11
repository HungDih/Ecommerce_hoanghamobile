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
      <div className="content section">
        <div className="description">
          <p>
            Smartphone hay còn được biết tới là một loại điện thoại di động với
            hệ điều hành được tích hợp khiến cho 1 chiếc điện thoại trở nên đa
            công dụng hơn rất nhiều. Điện thoại di động từ trước đến nay phát
            triển theo 2 xu hướng. 1 là rất nhỏ, tiên lợi mang đi mọi nơi. 2 là
            to như chiếc tablet kết hợp giữa điện thoại và máy tính. Những chiếc
            điện thoại di động thường bỏ túi, thường được kết hợp các tính năng
            của một chiếc điện thoại thông thường như nghe và thực hiện các cuộc
            gọi thông thường, nhận tin nhắc văn bản và các tính năng phổ biến
            khác như là máy nghe nhạc, lịch, máy tính, trò chơi, máy ảnh và cả
            quáy quay video nữa, Hầu hết những chiếc điện thoại di động hiện nay
            đều có thể truy cập internet và cài đặt được nhiều ứng dụng từ bên
            thứ 3 trong CH play hay Appstore.{" "}
          </p>
          <p>
            Điện thoại di động chính thức ra mắt và được chấp nhận từ năm 1999
            và được sử dụng phổ biến từ năm 2000. Hầu hết những chiếc điện thoại
            di động sản xuất từ năm 2012 trở đi đều có thể sử dụng 3G và 4G.
            Tính cho tới quý thứ 3 của năm 2012 thì đã có 1 tỷ chiếc điện thoại
            được bán ra trên toàn thế giới. TÍnh đến năm đã có 65% người sử dụng
            điện thoại di động là smartphone. Đến năm 2016, con số này đã chiếm
            tới 79% trong thị trường di động. Và hiện nay, điện thoại di động đa
            phần chạy hệ điều hành IOS và Android.
          </p>

          <p>
            Vào đầu năm 2007, Apple giới thiệu iPhone và đây là 1 trong những
            chiếc điện thoại di động smartphone đầu tiên có sử dụng cảm ứng đa
            giao diện. và iOS là hệ điều hành độc quyèn được phát hành bởi Apple
            và chỉ dành cho những chiếc iPhone mà hãng sản xuất ra. Những fan
            nhà Táo cũng đã thoát ra khỏi sự bó buộc vào máy tính khi hãng này
            đã cung cấp chương trình đồng bộ hóa dữ liệu người dùng thông qua
            iCloud. Tuy nhiên, iPhone hay iOS vẫn chỉ đứng thứ 2 khi điện thoại
            di động sử dụng nhiều nhất vẫn là Android.
          </p>
          <p>
            Android là hệ điều hành điện thoại di động giá rẻ và phổ biến hơn cả
            do Tập đoàn Google phát triển. Cho đến năm 2015 thì đã có tới 325
            triệu chiếc điện thoại di động giá rẻ sử dụng hệ điều hành Android,
            dẫn đầu trong số các nền tảng hệ điều hành. Và hãng Samsung cũng là
            một trong những nhà sản xuất các thiết bị điện thoại di động giá rẻ
            hàng đầu hiện nay. HIện nay ngành công nghệ điện thoại di động ngày
            càng phát triển, trong một năm có tới hàng chục chiếc điện thoại di
            động mới được nghiên cứu và phát hành ra ngoài thị trường. Ngoài ra,
            khi lựa chọn một chiếc điện thoại di động chúng ta còn quá nhiều vấn
            đề cần phải xem xét tới. Ví như thời lượng pin, chiếc điện thoại di
            động gí rẻ đó sử dụng loại chip gì, hay đơn giản là loại điện thoại
            di động đó có những màu nào và loại điện thoại đó có nhiều phụ kiện
            đi kèm hay không. Chọn được một chiếc điện thoại di động giá rẻ chất
            lượng tốt cho bạn hay những người thân trong gia đình là một quyết
            định quan trọng. Trước đó, Hoàng Hà Mobile đưa ra khẩu hiệu “Những
            gì chúng tôi không có, tức là bạn không cần”. Hoàng Hà đưa ra rất
            nhiều sự lựa chọn cho bạn. một chiếc điện thoại di động bền, đẹp,
            hay điện thoại di động giá rẻ lại có khả năng chống nước chống bụi,
            có thẻ nhớ mở rộng và pin rất khỏe.
          </p>
          <p>
            Đưa ra quyết định mua một chiếc điện thoại di động giá rẻ không hề
            dễ dàng. Nhưng hãy để Hoàng Hà Mobile giúp bạn. Chúng tôi cung cấp
            mọi mặt hàng thiết bị di động đủ loại hãng và phân khúc. Với sự lựa
            chọn là 1 chiếc điện thoại di động giá rẻ smartphone bền và tốt thì
            bạn có thể lựa chọn Xiaomi hoặc Samsung cũng có rất nhiều mẫu điện
            thoại thuộc phân khúc tầm trung chất lượng tốt. Hay nếu bạn tìm kiếm
            những chiếc điện thoại di động chính hãng và giá rẻ thì Hoàng Hà
            cũng có rất nhiều sự lựa chọn cho bạn. Đặc biệt là khi bạn có thể
            mua điện thoại với mức giá vô cùng phải chăng khi tham gia gói mua
            hàng trả góp tại Hoàng Hà. Hoàng Hà Mobile – Siêu thị điện thoại di
            động giá rẻ nhất, miễn phí vận chuyển toàn quốc, bảo hành 12 tháng,
            trả góp 0%.
          </p>
        </div>

        <div class="corevalue">
          <div class="item-value">
            <span class="icon-value">
              <i class="fa-regular fa-circle-check"></i>
            </span>
            <div class="text-value">
              <span>Sản phẩm</span>
              <strong>CHÍNH HÃNG</strong>
            </div>
          </div>
          <div class="item-value">
            <span class="icon-value">
              <i class="fa-solid fa-cart-flatbed"></i>
            </span>
            <div class="text-value">
              <span>Miễn phí vận chuyển</span>
              <strong>TOÀN QUỐC</strong>
            </div>
          </div>
          <div class="item-value">
            <span class="icon-value">
              <i class="fa-solid fa-headphones-simple"></i>
            </span>
            <div class="text-value">
              <span>Hotline hỗ trợ</span>
              <strong>1900.2091</strong>
            </div>
          </div>
          <div class="item-value">
            <span class="icon-value">
              <i class="fa-solid fa-repeat"></i>
            </span>
            <div class="text-value">
              <span>Thủ tục đổi trả</span>
              <strong>DỄ DÀNG</strong>
            </div>
          </div>
        </div>

        <div className="catelogy">
          {footerData.map((itemF, indexF) => {
            return (
              <div className="link-content" key={indexF}>
                <h4>{itemF.header}</h4>

                <ul>
                  {itemF.extends &&
                    itemF.extends.map((itemE, indexE) => {
                      return (
                        <li key={indexE}>
                          <a href={itemE.path}>{itemE.title}</a>
                        </li>
                      );
                    })}
                </ul>

                <ul>
                  {itemF.label &&
                    itemF.label.map((itemE, indexE) => {
                      if (itemE.src.length == 2) {
                        return (
                          <li key={itemE.row}>
                            {itemE.src.map((itemS, indexS) => {
                              return <img key={indexS} src={itemS} />;
                            })}
                          </li>
                        );
                      } else {
                        return (
                          <a href={itemE.path} target="_BCT" key={indexE}>
                            <img src={itemE.src} />
                          </a>
                        );
                      }
                    })}
                </ul>
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
