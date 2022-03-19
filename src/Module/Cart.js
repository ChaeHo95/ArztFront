import react from "react";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Footer from "../Layout/Footer";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const Cart = () => {
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <h4>Cart List</h4>
      </div>

      <div className="pa4">
        <div className="overflow-auto">
          <table className="f6 w-100 mw8 center" cellSpacing="0">
            <thead>
              <tr className="stripe-dark">
                <th className="fw6 tl pa3 bg-white">Order No</th>
                <th className="fw6 tl pa3 bg-white">Odder Time</th>
                <th className="fw6 tl pa3 bg-white">Item Name</th>
                <th className="fw6 tl pa3 bg-white">Status</th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              <tr className="stripe-dark">
                <td className="pa3">1</td>
                <td className="pa3">220317151515</td>
                <td className="pa3">hassan@companywithalongdomain.co</td>
                <td className="pa3">14419232532474</td>
              </tr>
              <tr className="stripe-dark">
                <td className="pa3">2</td>
                <td className="pa3">220317151525</td>
                <td className="pa3">taral@companywithalongdomain.co</td>
                <td className="pa3">72326219423551</td>
              </tr>
              <tr className="stripe-dark">
                <td className="pa3">3</td>
                <td className="pa3">220317151535</td>
                <td className="pa3">ty@companywithalongdomain.co</td>
                <td className="pa3">92325170324444</td>
              </tr>
              <tr className="stripe-dark">
                <td className="pa3">4</td>
                <td className="pa3">220317151545</td>
                <td className="pa3">oliverg@companywithalongdomain.co</td>
                <td className="pa3">71165170352909</td>
              </tr>
              <tr className="stripe-dark">
                <td className="pa3">5</td>
                <td className="pa3">220317151555</td>
                <td className="pa3">dean@companywithalongdomain.co</td>
                <td className="pa3">71865178111909</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Pagination size="sm">{items}</Pagination>
      </div>
      <Footer />
    </Container>
  );
};

export default Cart;
