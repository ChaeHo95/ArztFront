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
        <div className="row gx-4 gx-lg-5 row-cols-3 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div className="fl w-50 w-25-m w-20-l pa2">
            <a href="/Module/Product" className="db link dim tc">
              <Image
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17f96b182a7%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17f96b182a7%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.375%22%20y%3D%2295.4%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="Everybody Looking - Album Cover"
                className="w-100 db outline black-10"
                thumbnail="thumbnail"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100">Everybody Looking</dd>
                <dt className="clip">Artist</dt>
                <dd>Gucci Mane</dd>
              </dl>
            </a>
          </div>
          <div className="fl w-50 w-25-m w-20-l pa2">
            <a href="/Module/Product" className="db link dim tc">
              <Image
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17f96b182a7%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17f96b182a7%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.375%22%20y%3D%2295.4%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="Everybody Looking - Album Cover"
                className="w-100 db outline black-10"
                thumbnail="thumbnail"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100">Everybody Looking</dd>
                <dt className="clip">Artist</dt>
                <dd>Gucci Mane</dd>
              </dl>
            </a>
          </div>
          <div className="fl w-50 w-25-m w-20-l pa2">
            <a href="/Module/Product" className="db link dim tc">
              <Image
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17f96b182a7%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17f96b182a7%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.375%22%20y%3D%2295.4%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="Everybody Looking - Album Cover"
                className="w-100 db outline black-10"
                thumbnail="thumbnail"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100">Everybody Looking</dd>
                <dt className="clip">Artist</dt>
                <dd>Gucci Mane</dd>
              </dl>
            </a>
          </div>
          <div className="fl w-50 w-25-m w-20-l pa2">
            <a href="/Module/Product" className="db link dim tc">
              <Image
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17f96b182a7%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17f96b182a7%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.375%22%20y%3D%2295.4%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="Everybody Looking - Album Cover"
                className="w-100 db outline black-10"
                thumbnail="thumbnail"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100">Everybody Looking</dd>
                <dt className="clip">Artist</dt>
                <dd>Gucci Mane</dd>
              </dl>
            </a>
          </div>
          <div className="fl w-50 w-25-m w-20-l pa2">
            <a href="/Module/Product" className="db link dim tc">
              <Image
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17f96b182a7%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17f96b182a7%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.375%22%20y%3D%2295.4%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="Everybody Looking - Album Cover"
                className="w-100 db outline black-10"
                thumbnail="thumbnail"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100">Everybody Looking</dd>
                <dt className="clip">Artist</dt>
                <dd>Gucci Mane</dd>
              </dl>
            </a>
          </div>
          <div className="fl w-50 w-25-m w-20-l pa2">
            <a href="/Module/Product" className="db link dim tc">
              <Image
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17f96b182a7%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17f96b182a7%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.375%22%20y%3D%2295.4%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="Everybody Looking - Album Cover"
                className="w-100 db outline black-10"
                thumbnail="thumbnail"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100">Everybody Looking</dd>
                <dt className="clip">Artist</dt>
                <dd>Gucci Mane</dd>
              </dl>
            </a>
          </div>
          <div className="fl w-50 w-25-m w-20-l pa2">
            <a href="/Module/Product" className="db link dim tc">
              <Image
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17f96b182a7%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17f96b182a7%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.375%22%20y%3D%2295.4%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="Everybody Looking - Album Cover"
                className="w-100 db outline black-10"
                thumbnail="thumbnail"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100">Everybody Looking</dd>
                <dt className="clip">Artist</dt>
                <dd>Gucci Mane</dd>
              </dl>
            </a>
          </div>
          <div className="fl w-50 w-25-m w-20-l pa2">
            <a href="/Module/Product" className="db link dim tc">
              <Image
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17f96b182a7%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17f96b182a7%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.375%22%20y%3D%2295.4%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="Everybody Looking - Album Cover"
                className="w-100 db outline black-10"
                thumbnail="thumbnail"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100">Everybody Looking</dd>
                <dt className="clip">Artist</dt>
                <dd>Gucci Mane</dd>
              </dl>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  );
};

export default Product;
