import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import axios from "axios";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("session_key") != null) {
      axios({
        url: "/member/state",
        method: "post",
        data: {
          id: null,
          user_session: sessionStorage.getItem("session_key"),
          user_login: false,
        },
        baseURL: "http://localhost:8088",
      }).then((response) => {
        setIsLogin(response.data);
      });
    }
  });

  const logout = () => {
    axios({
      url: "/member/logout",
      method: "post",
      data: {
        id: null,
        user_session: sessionStorage.getItem("session_key"),
        user_login: false,
      },
      baseURL: "http://localhost:8088",
    });
    sessionStorage.removeItem("session_key");
    setIsLogin(false);
    window.location.reload();
  };
  const login_logout = () => {
    if (isLogin) {
      return (
        <>
          <Nav.Link href="/Module/Login" onClick={logout}>
            Logout
          </Nav.Link>
        </>
      );
    } else {
      return (
        <>
          <Nav.Link href="/Module/Login">Login</Nav.Link>
          <Nav.Link href="/Module/SignUp">Sign Up</Nav.Link>
        </>
      );
    }
  };

  const category1 = () => {
    // <NavDropdown.Item href="/Action6">Category link 6</NavDropdown.Item>;
    axios({
      url: "",
      method: "get",
      baseURL: "http://localhost:8088",
    }).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <header>
      <Navbar
        bg="light"
        variant="light"
        fixed="top"
        className="justify-content-end"
      >
        <Navbar.Brand href="/" style={{ marginLeft: "10px" }}>
          <h1>Artz</h1>
        </Navbar.Brand>

        <InputGroup className="justify-content-center">
          <Col xs={8}>
            <Form.Control
              type="search"
              size="lg"
              htmlSize="10"
              placeholder="Search Item"
            />
          </Col>
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>

        <Nav className="justify-content-end">
          <Nav.Link href="/Module/Info">
            <img
              className="icon"
              title="MY Information"
              src="https://pics.gmarket.co.kr/pc/single/kr/common/image__header-mypage.svg"
            />
          </Nav.Link>
          <Nav.Link href="/Module/Recent">
            <img
              className="icon"
              title="Recent Item"
              src="https://pics.gmarket.co.kr/pc/single/kr/common/image__header-recent.svg"
            />
          </Nav.Link>
          <Nav.Link href="/Module/Cart">
            <img
              className="icon"
              title="Cart"
              src="https://pics.gmarket.co.kr/pc/single/kr/common/image__header-cart.svg"
            />
          </Nav.Link>
        </Nav>
      </Navbar>

      <Navbar
        bg="dark"
        variant="dark"
        fixed="top"
        className="justify-content-between"
        style={{ marginTop: "74px" }}
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Category"
                menuVariant="dark"
              >
                <NavDropdown.Divider />
                {category1}
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>

        <Nav className="justify-content-end">
          <Nav.Link href="/Module/Notice">Notice</Nav.Link>
          {login_logout()}
          <Nav.Link href="/Module/Global">Global</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
