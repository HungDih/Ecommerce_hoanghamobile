import "../pages/Mobile.scss";
import { useEffect, useState } from "react";
import {
  fetchCarousel,
  fetchAllProducts,
  fetchFilterName,
  fetchFilterPrice,
} from "../service/productService";
// import _, { range } from "lodash";

function Mobile() {
  const [brand, setBrand] = useState([]);
  const [listProducts, setListProducts] = useState([]);
  const [listFiltersName, setListFiltersName] = useState([]);
  const [listFilterPrice, setListFilterPrice] = useState([]);
  const [numOfProduct, setNumOfProduct] = useState(15);
  const [isAllLoaded, setIsAllLoaded] = useState(false);
  const [originData, setOriginData] = useState(listProducts);

  const productLoaded = listProducts.slice(0, numOfProduct);

  const handleLoadMore = () => {
    if (listProducts.length == productLoaded.length) {
      setIsAllLoaded(true);
    } else {
      setNumOfProduct(numOfProduct + numOfProduct);
    }
  };

  useEffect(() => {
    getBrand();
    getProducts();
    getFilterName();
    getFilterPrice();
  }, []);

  const getProducts = async () => {
    let respone = await fetchAllProducts();
    if (respone && respone.data) {
      setListProducts(respone.data);
    }
  };

  const getBrand = async () => {
    let respone = await fetchCarousel();
    if (respone && respone.data) {
      setBrand(respone.data);
    }
  };

  //Handle filterName
  const getFilterName = async () => {
    let respone = await fetchFilterName();
    if (respone && respone.data) {
      setListFiltersName(respone.data);
    }
  };

  const handleCatelogy = (cat) => {
    const updateProduct = originData.filter((x) => x.brand === cat);
    setOriginData(updateProduct);
  };

  //Handle filterPrice
  const getFilterPrice = async () => {
    let respone = await fetchFilterPrice();
    if (respone && respone.data) {
      setListFilterPrice(respone.data);
    }
  };

  const handlePrice = (filterType) => {
    const { minPrice, maxPrice } = listFilterPrice.ranges.find(
      (x) => x.label === filterType
    );
    const filteredPrice = listProducts.filter((product) => {
      const price = parseInt(product.price.replace(/\D/g, ""), 10);
      return price >= minPrice || price <= maxPrice;
    });
    setListFilterPrice(filteredPrice);
  };

  // console.log(listFilterPrice.ranges);

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
          <div className="group-filter">
            <strong>Lọc danh sách: </strong>
            {listFiltersName.map((itemF, indexF) => {
              return (
                <div className="item-filter" key={indexF}>
                  <a>
                    {itemF.validate}
                    <i className="fa-solid fa-angle-down" />
                  </a>
                  <div className="sub-filter">
                    <div className="list-filter">
                      {itemF.keyword.map((itemK, indexK) => {
                        return (
                          <button
                            key={indexK}
                            onClick={() => handleCatelogy(itemK)}
                          >
                            {itemK}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div className="item-filter">
              <a>
                {listFilterPrice.validate}
                <i className="fa-solid fa-angle-down" />
              </a>
              <div className="sub-filter">
                <div className="list-filter">
                  {listFilterPrice.ranges.map((item, index) => {
                  return (
                    <button key={index} onClick={() => handlePrice(item.label)}>
                      {item.label}
                    </button>
                  );
                })}
                </div>
              </div>
            </div> */}

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
