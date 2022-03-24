import { Container } from 'react-bootstrap';
import Footer from '../Layout/Footer';
import Pagination from 'react-bootstrap/Pagination'

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const Cart = () => {
  return (

    <Container>
      <div className="title">
        Cart List</div>
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
            </tbody>
          </table>
        </div>
      </div>
      <Pagination size="sm">{items}</Pagination>
      <Footer />
    </Container>
  )
}

export default Cart;