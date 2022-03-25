import React, { useEffect, useState } from "react";
import axios from "axios";
const Products = () => {
  const [category1, setCategory1] = useState("");
  const [category2, setCategory2] = useState("");
  const [category3, setCategory3] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setCategory1(
      sessionStorage.getItem("category2") != null
        ? sessionStorage.getItem("category1") + "  >  "
        : sessionStorage.getItem("category1")
    );
    setCategory2(
      sessionStorage.getItem("category3") != null
        ? sessionStorage.getItem("category2") + "  >  "
        : sessionStorage.getItem("category2")
    );
    setCategory3(sessionStorage.getItem("category3"));
    axios({
      url: "/product/products",
      method: "post",
      data: {
        category1: sessionStorage.getItem("category1"),
        category2: sessionStorage.getItem("category2"),
        category3: sessionStorage.getItem("category3"),
      },
      baseURL: "http://localhost:8088",
    }).then((response) => {
      setProducts(response.data);
    });
  });

  return (
    <>
      <div
        style={{ marginTop: "135px", marginLeft: "10px", fontSize: "1.2rem" }}
      >
        {category1}
        {category2}
        {category3}
      </div>
      <main
        className="mv2 center"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="productsgroup" style={{ marginTop: "10px" }}>
          <div className="products">
            {products.map((product, id) => {
              return (
                <div key={id} style={{ width: "280px", margin: "20px" }}>
                  <a href="/Module/Product" className="db link dim tc">
                    <img
                      src={product.image}
                      className="w-100 db outline black-10"
                      style={{
                        border: "5px solid rgba(128, 128, 128, .6)",
                        borderRadius: "30px",
                      }}
                    />
                    <dl className="mt2 f6 lh-copy">
                      <dt
                        className="ml0 gray truncate w-100"
                        dangerouslySetInnerHTML={{ __html: product.title }}
                      ></dt>
                      <dt className="ml0 gray truncate w-100">
                        {product.brand}
                      </dt>
                      <dd className="ml0 gray truncate w-100">
                        {product.lprice}
                      </dd>
                    </dl>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};
export default Products;
