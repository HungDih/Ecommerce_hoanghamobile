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
        </div>
        <div className="info"></div>
      </div>
    </footer>
  );
}

export default Footer;
