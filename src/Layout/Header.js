import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  InputGroup,
  SplitButton,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import axios from "axios";
import NavDropdown from "react-bootstrap/NavDropdown";
import $ from "jquery";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [categorys, setCategorys] = useState([]);
  const [category2s, setCategory2s] = useState([]);
  const [category3s, setCategory3s] = useState([]);
  const [category1name, setCategory1Name] = useState("");
  const [category2name, setCategory2Name] = useState("");
  const [category, serCategory] = useState(false);
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
          <Nav.Link href="/Module/SignUp">SignUp</Nav.Link>
        </>
      );
    }
  };

  useEffect(() => {
    // <NavDropdown.Item href="/Action6">Category link 6</NavDropdown.Item>;
    axios({
      url: "/product/category1",
      method: "get",
      baseURL: "http://localhost:8088",
    }).then((response) => {
      setCategorys(response.data);
    });
  }, []);

  useEffect(() => {
    if (category) {
      axios({
        url: "/product/category2",
        method: "post",
        data: {
          category1: category1name.replace(" >", ""),
        },
        baseURL: "http://localhost:8088",
      }).then((response) => {
        console.log(response.data);
        setCategory2s(response.data);
        serCategory(false);
      });
    }
  });
  useEffect(() => {
    if (category && category2name != "") {
      axios({
        url: "/product/category3",
        method: "post",
        data: {
          category1: category1name.replace(" >", ""),
          category2: category2name.replace(" >", ""),
        },
        baseURL: "http://localhost:8088",
      }).then((response) => {
        console.log(response.data);
        setCategory3s(response.data);
        serCategory(false);
      });
    }
  });
  const category3Open = (e) => {
    setCategory2Name(e.target.innerText);
    serCategory(true);
    $(".category2").css({
      backgroundColor: "",
    });
    $(".category3").css({
      backgroundColor: "",
    });
    e.target.style.backgroundColor = "#28E7FF";
  };
  const category2Open = (e) => {
    setCategory1Name(e.target.innerText);
    serCategory(true);
    $(".category1").css({
      backgroundColor: "",
    });
    $(".category2").css({
      backgroundColor: "",
    });
    $(".category3").css({
      backgroundColor: "",
    });
    e.target.style.backgroundColor = "#28E7FF";
  };
  const categorysOpen = () => {
    $(".category1").css({
      display: "flex",
    });
  };
  const categoryClose = () => {
    $(".category1").css({
      display: "none",
      backgroundColor: "",
    });
    $(".category2").css({
      display: "none",
      backgroundColor: "",
    });
    $(".category3").css({
      display: "none",
      backgroundColor: "",
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
            <Nav
              style={{ color: "rgba(255, 255, 255, 0.55)", cursor: "pointer" }}
              onClick={categorysOpen}
            >
              CATEGORY
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Nav className="justify-content-end">
          <Nav.Link href="/Module/Notice">Notice</Nav.Link>
          {login_logout()}
          <Nav.Link href="/Module/Global">Global</Nav.Link>
        </Nav>
      </Navbar>
      <div onMouseLeave={categoryClose} className="categorys">
        <div>
          <div className="category1s">
            {categorys.map((category, id) => {
              return (
                <button
                  className="category1"
                  key={id}
                  style={{ display: "none" }}
                  onClick={category2Open}
                >
                  {category + " >"}
                </button>
              );
            })}
          </div>
        </div>
        <div className="category2s">
          {category2s.map((category, id) => {
            return (
              <button
                className="category2"
                key={id}
                style={{ display: "flex" }}
                onClick={category3Open}
              >
                {category + " >"}
              </button>
            );
          })}
        </div>
        <div className="category3s">
          {category3s.map((category, id) => {
            return (
              <button
                className="category3"
                key={id}
                style={{ display: "flex" }}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
