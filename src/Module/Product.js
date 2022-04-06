import { Container } from "react-bootstrap";
import Footer from "../Layout/Footer";
import Image from "react-bootstrap/Image";
import { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [prod, setProd] = useState({});
  const [cnt, setCnt] = useState(1);
  useEffect(() => {
    axios({
      url: "/product/product",
      method: "post",
      data: {
        product_id: sessionStorage.getItem("product_id"),
      },
      baseURL: "http://localhost:8088",
    }).then((response) => {
      setProd(response.data);
    });
  }, []);
  const cntUp = () => {
    setCnt(cnt + 1);
  };
  const cntDown = () => {
    if (cnt == 1) {
      alert("최소값은 1입니다.");
    } else {
      setCnt(cnt - 1);
    }
  };
  const cartDate = () => {
    if (
      sessionStorage.getItem("cart") !== null &&
      sessionStorage
        .getItem("cart")
        .includes(sessionStorage.getItem("product_id"))
    ) {
      alert("장바구니에 담긴 상품입니다.");
    } else {
      sessionStorage.setItem(
        "cart",
        sessionStorage.getItem("cart") === null
          ? sessionStorage.getItem("product_id")
          : sessionStorage.getItem("cart") +
              "," +
              sessionStorage.getItem("product_id")
      );
      sessionStorage.setItem(
        "productCnt",
        sessionStorage.getItem("productCnt") === null
          ? cnt
          : sessionStorage.getItem("productCnt") + "," + cnt
      );
    }
  };

  return (
    <Container
      style={{
        textAlign: "center",
      }}
    >
      <main className="mw6 center">
        <div className="dt mw6 pv4 pv5-m pv6-ns">
          <div className="dtc v-mid">
            <Image fluid src={prod.image} className="mw9" />
          </div>
          <div className="dtc v-top pl3">
            <p dangerouslySetInnerHTML={{ __html: prod.title }} />
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="size">
                사이즈
              </label>
              <select id="size">
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="quanity">
                수량
              </label>
              <input
                className="pa2 input-reset ba bg-transparent w-90 measure"
                disabled="disabled"
                name="quanity"
                value={cnt}
                style={{ textAlign: "center", width: "328px" }}
              />
              <button
                onClick={cntUp}
                style={{ width: "30px", height: "42px", background: "white" }}
              >
                +
              </button>
              <button
                onClick={cntDown}
                style={{ width: "30px", height: "42px", background: "white" }}
              >
                -
              </button>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="price">
                가격
              </label>
              <input
                className="pa2 input-reset ba bg-transparent w-90 measure"
                type="text"
                name="price"
                disabled="disabled"
                value={prod.lprice * cnt}
                style={{ textAlign: "center" }}
              />
            </div>
            <div className="ph3">
              <button
                className="f6 link dim ph3 pv2 mb2 dib white bg-light-purple"
                href="#0"
                onClick={cartDate}
              >
                Cart
              </button>
            </div>
            <div className="ph3">
              <a
                className="f6 link dim ph3 pv2 mb2 dib white bg-dark-green"
                href="#0"
              >
                Buy
              </a>
            </div>
          </div>
        </div>

        <h5 className="fw-bolder mb-4">Related products</h5>
        
      </main>
      <Footer />
    </Container>
  );
};

export default Product;
