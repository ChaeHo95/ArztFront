import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../Layout/Footer";
import axios from "axios";

const Cart = () => {
  const [pd, setPd] = useState([]);
  const [productCnt, setProductCnt] = useState([]);
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

  return (
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
<<<<<<< HEAD
              {pd.map((pro, id) => {
                return (
                  <tr className="stripe-dark" key={id}>
                    <td className="pa3">{id + 1}</td>
                    <td className="pa3">{pro.category1}</td>
                    <td className="pa3">
                      <p dangerouslySetInnerHTML={{ __html: pro.title }} />
                    </td>
                    <td className="pa3">{productCnt[id]}</td>
                    <td className="pa3">
                      {Number(pro.lprice * productCnt[id])}
                    </td>
                  </tr>
                );
              })}
=======
              <tr className="stripe-dark">
                <td className="pa3">1</td>
                <td className="pa3">Category 1</td>
                <td className="pa3">hassan@</td>
                <td className="pa3">1</td>
                <td className="pa3">532474</td>
              </tr>


              
              <tr className="stripe-dark">
                <td className="pa3">2</td>
                <td className="pa3">Category 1</td>
                <td className="pa3">taral@</td>
                <td className="pa3">2</td>
                <td className="pa3">23551</td>
              </tr>
              <tr className="stripe-dark">
                <td className="pa3">3</td>
                <td className="pa3">Category 1</td>
                <td className="pa3">ty@</td>
                <td className="pa3">1</td>
                <td className="pa3">32444</td>
              </tr>
              <tr className="stripe-dark">
                <td className="pa3">4</td>
                <td className="pa3">Category 1</td>
                <td className="pa3">oliverg@</td>
                <td className="pa3">2</td>
                <td className="pa3">7116509</td>
              </tr>
              <tr className="stripe-dark">
                <td className="pa3">5</td>
                <td className="pa3">Category 1</td>
                <td className="pa3">dean@</td>
                <td className="pa3">1</td>
                <td className="pa3">718659</td>
              </tr>
>>>>>>> 8aff48b1570490eef338f7deeafff7a03547e131
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Cart;
