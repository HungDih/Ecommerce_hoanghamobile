import "../pages/Mobile.scss";
import { useEffect, useState } from "react";
import { fetchAllProducts } from "../service/productService";

function Mobile() {
  const [listProducts, setlistProducts] = useState([]);
  const [numOfProduct, setNumOfProduct] = useState(15);
  const [isAllLoaded, setIsAllLoaded] = useState(false);

  const productLoaded = listProducts.slice(0, numOfProduct);

  const handleLoadMore = () => {
    if (listProducts.length == productLoaded.length) {
      setIsAllLoaded(true);
    } else {
      setNumOfProduct(numOfProduct + numOfProduct);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let respone = await fetchAllProducts();
    if (respone && respone.data) {
      setlistProducts(respone.data);
    }
  };

  const filter = [
    "Danh mục",
    "Thương hiệu",
    "Giá",
    "Bluetooth",
    "Độ phân giải",
    "RAM",
    "Sắp xếp",
  ];

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
          <i className="fa-solid fa-caret-left"></i>
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
        <div className="nav-breadcrums">
          <i className="fa-solid fa-house"></i>
          <a href="/">
            <strong>Trang chủ › </strong>
          </a>
          <a href="/dien-thoai">
            <span>Điện thoại</span>
          </a>
        </div>

        <div className="nav-fillter">
          <div className="detail-filter">
            <strong>Lọc danh sách: </strong>
            {filter.map((item, index) => {
              return (
                <div className="header-fillter" key={index}>
                  <label>
                    <a onClick={() => {}}>
                      {item}
                      <i className="fa-solid fa-angle-down"></i>
                    </a>
                  </label>
                </div>
              );
            })}

            <div className="sub-filter">
              <ul>
                <li>
                  <a href="/dien-thoai-di-dong/iphone">Apple</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="list-products ">
          <span>Điện thoại</span>
          <div className="content-products ">
            {productLoaded &&
              productLoaded.length > 0 &&
              productLoaded.map((item, index) => {
                return (
                  <div className="item-product" key={`item-${index}`}>
                    <div className="img-product">
                      <a href="/dien-thoai" title={item.title}>
                        <img
                          src={item.images}
                          alt={item.title}
                          title={item.title}
                        />
                      </a>
                    </div>

                    <div className="sticker-product">
                      <span>
                        <img src={item.sticker} />
                      </span>
                    </div>

                    {item.discount && (
                      <span className="sales-product">
                        <i className="fa-solid fa-bolt" />
                        {item.discount}
                      </span>
                    )}

                    <div className="info-product">
                      <a
                        href="/dien-thoai"
                        className="title"
                        title={item.title}
                      >
                        {item.title}
                      </a>
                      <span className="price">
                        <strong>{item.newPrice}</strong>
                        <strike>{item.price}</strike>
                      </span>
                      <div className="upprice">
                        {item.upPrice && (
                          <label>
                            Giá lên đời từ:
                            <strong className="text-red">{item.upPrice}</strong>
                          </label>
                        )}
                      </div>
                    </div>

                    <div className="note-product">
                      <span className="bag">KM</span>{" "}
                      <label title="Giảm thêm tới 800.000đ khi mở thẻ tín dụng TPBank EVO.">
                        Giảm thêm tới 800.000đ khi mở thẻ t...
                      </label>
                      <strong className="text-orange">{item.saleAdd}</strong>
                    </div>

                    <div className="promote-product">
                      <a href="/dien-thoai">
                        <ul>
                          <li>
                            <span className="bag">KM</span> Giảm thêm tới
                            800.000đ khi mở thẻ tín dụng TPBank EVO.
                          </li>
                          <li>
                            <span className="bag">KM</span> GIẢM THÊM 200.000đ
                            khi thanh toán qua VNPAY-QR.
                          </li>
                          <li>
                            <span className="bag">KM</span> Trợ giá lên tới
                            1.000.000đ khi thu cũ đổi mới lên đời iPhone từ
                            iPhone cũ (trừ mã VN/A) và các sản phẩm khác.
                          </li>
                        </ul>
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {!isAllLoaded ? (
          <div className="more-product">
            <button onClick={handleLoadMore}>Xem thêm sản phẩm</button>
          </div>
        ) : (
          <div className="more-product">
            <button disabled>Không còn sản phẩm nào.!</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Mobile;
