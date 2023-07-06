import "../pages/Mobile.scss";
import { useContext } from "react";
import MyContext from "../MyContext";
import Carousel from "react-bootstrap/Carousel";

function Mobile() {
  const data = useContext(MyContext);
  console.log(data);
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
          />
        </a>

        <Carousel className="carousel">
          <Carousel.Item>
            <img src="https://cdn.hoanghamobile.com/i/cat/Uploads/2020/09/14/brand%20(6).png" />
            <Carousel.Caption>
              <button type="button" className="btn btn-primary">
                <i className="fa fa-star" aria-hidden="true"></i>{" "}
                {/* Thay đổi icon thành fa-star */}
                Custom Button
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/19/honor-logo-2022-svg.png" />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="products">
        <div className="top-nav">
          <div className="nav-breadcrums"></div>
          <div className="nav-fillter"></div>
        </div>
        <div className="list-products"></div>
      </div>
    </div>
  );
}

export default Mobile;
// Xử lý lỗi lặp top-ads của components mobile
