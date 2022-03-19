import react from "react";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Footer from "../Layout/Footer";

const Account = () => {
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <h4>Recent Views</h4>
      </div>

      <ListGroup>
        <ListGroup.Item>Item 1</ListGroup.Item>
        <ListGroup.Item>Item 2</ListGroup.Item>
        <ListGroup.Item>Item 3</ListGroup.Item>
        <ListGroup.Item>Item 4</ListGroup.Item>
        <ListGroup.Item>Item 5</ListGroup.Item>
        <ListGroup.Item>Item 6</ListGroup.Item>
        <ListGroup.Item>Item 7</ListGroup.Item>
        <ListGroup.Item>Item 8</ListGroup.Item>
        <ListGroup.Item>Item 9</ListGroup.Item>
        <ListGroup.Item>Item 10</ListGroup.Item>
        <ListGroup.Item>Item 11</ListGroup.Item>
        <ListGroup.Item>Item 12</ListGroup.Item>
        <ListGroup.Item>Item 13</ListGroup.Item>
        <ListGroup.Item>Item 14</ListGroup.Item>
        <ListGroup.Item>Item 15</ListGroup.Item>
      </ListGroup>
      <Footer />
    </Container>
  );
};

export default Account;
