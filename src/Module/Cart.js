import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../Layout/Footer";
import axios from "axios";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [pd, setPd] = useState([]);
  const [productCnt, setProductCnt] = useState([]);
  const [open, setOpen] = useState("");
  const [noItem, setNoItem] = useState();

  const navi = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("cart") !== null) {
      const carts = sessionStorage.getItem("cart");
      axios({
        url: "/product/cart",
        method: "post",
        data: {
          carts: carts,
          productCnt: sessionStorage.getItem("productCnt"),
        },
        baseURL: "http://localhost:8088",
      }).then((response) => {
        setPd(response.data);
        setProductCnt(sessionStorage.getItem("productCnt").split(","));
      });
    } else {
      alert("장바구니에 담긴 상품이 없습니다.");
      window.location.href = "/";
    }
  }, []);
  const cntUp = (e) => {
    const newProductCnt = [...productCnt];
    const index = e.target.id.replace("No", "");
    console.log(index);
    console.log(newProductCnt[index]);
    newProductCnt[index] = Number(productCnt[index]) + 1;
    setProductCnt(newProductCnt);
  };
  const cntDown = (e) => {
    const newProductCnt = [...productCnt];
    const index = e.target.id.replace("No", "");
    if (newProductCnt[index] == 1) {
      setNoItem(Number(index));
      openModal();
    } else {
      newProductCnt[index] = Number(productCnt[index]) - 1;
      setProductCnt(newProductCnt);
    }
  };
  const delet = () => {
    console.log(noItem);
    const newProductCnt = [...productCnt];
    const newProducts = [...pd];
    sessionStorage.setItem(
      "productCnt",
      newProductCnt
        .map((value, index) => {
          if (index == noItem) {
            return "";
          } else {
            return value;
          }
        })
        .filter((value) => value != "")
        .join(",")
    );

    sessionStorage.setItem(
      "cart",
      newProducts
        .map((value) => {
          if (value.product_id == newProducts[noItem].product_id) {
            return "";
          } else {
            console.log(value.product_id);
            return value.product_id;
          }
        })
        .filter((value) => value != "")
        .join(",")
    );
    if (sessionStorage.getItem("cart") == "") {
      sessionStorage.removeItem("cart");
      sessionStorage.removeItem("productCnt");
    }
    window.location.reload();
    closeModal();
  };
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setNoItem();
    setOpen(false);
  };
  return (
    <>
      <Container>
        <div className="title">Cart List</div>
        <div className="pa1">
          <div className="overflow-auto">
            <table className="f6 w-100 mw9 center" cellSpacing="0">
              <thead>
                <tr className="stripe-dark">
                  <th className="fw6 tl pa3 bg-white">Item No</th>
                  <th className="fw6 tl pa3 bg-white">Category</th>
                  <th className="fw6 tl pa3 bg-white">Item Name</th>
                  <th className="fw6 tl pa3 bg-white">Quanity</th>
                  <th className="fw6 tl pa3 bg-white">Price</th>
                </tr>
              </thead>
              <tbody className="lh-copy">
                {pd.map((pro, id) => {
                  return (
                    <tr className="stripe-dark" key={id}>
                      <td className="pa3">{id + 1}</td>
                      <td className="pa3">{pro.category1}</td>
                      <td className="pa3">
                        <p
                          dangerouslySetInnerHTML={{ __html: pro.title }}
                          style={{ margin: "auto" }}
                        />
                      </td>
                      <td className="pa3">
                        {productCnt[id]}
                        <button
                          onClick={cntUp}
                          id={"No" + id}
                          style={{
                            width: "22px",
                            height: "22px",
                            textAlign: "center",
                            padding: "0px",
                          }}
                        >
                          ▲
                        </button>
                        <button
                          onClick={cntDown}
                          id={"No" + id}
                          style={{
                            width: "22px",
                            height: "22px",
                            textAlign: "center",
                            padding: "0px",
                          }}
                        >
                          ▼
                        </button>
                      </td>
                      <td className="pa3">
                        {Number(pro.lprice * productCnt[id])}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </Container>
      <Modal open={open}>
        <div className="Modal-header">WITHDRAWAL</div>
        <div className="Modal-body">
          Do you really not want to buy the goods?
        </div>
        <div className="Modal-footer">
          <button className="Modal-btn" size="small" onClick={delet}>
            Yes
          </button>
          <button className="Modal-btn" size="small" onClick={closeModal}>
            No
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
