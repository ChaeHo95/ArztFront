import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Footer from "../Layout/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Info = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [cpw, setCpw] = useState("");
  const [names, setNames] = useState("");
  const [sex, setSex] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [adress, setAdress] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const navi = useNavigate();

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
        console.log(response.data);
        setIsLogin(response.data);
      });
    } else {
      alert("로그인 안됨");
      navi("/Module/Login");
    }
  });
  useEffect(() => {
    if (isLogin) {
      axios({
        url: "/member/infos",
        method: "post",
        data: {
          id: null,
          user_session: sessionStorage.getItem("session_key"),
          user_login: false,
        },
        baseURL: "http://localhost:8088",
      }).then((response) => {
        const user = response.data;
        setId(user.user_id);
        setPw(user.user_pwd);
        setSex(user.user_sex);
        setMail(user.user_mail);
        setPhone(user.user_phone);
        setAdress(user.user_adress == null ? "정보 없음" : user.user_adress);
        setNames(user.user_name);
      });
    }
  });

  const isNummer = (e) => {
    const { name, value } = e.target;
    if (value.length > 13) {
      alert("더 이상 입력이 불가능합니다.");
    } else if (
      isNaN(
        value
          .split("")
          .filter((e) => e != "-")
          .join("")
      )
    ) {
      alert("숫자만 입력해주세요.");
    } else {
      setPhone(phoneNumber(value));
    }
    console.log(phone);
  };

  const phoneNumber = (phone) => {
    const text = [];
    for (let i = 0; i < phone.length; i++) {
      if (i == 3 && phone[3] != "-" && !phone.includes("-")) {
        text.push("-");
      }
      if (
        i == 8 &&
        phone[8] != "-" &&
        phone.match(/-/g).filter((e) => e !== "").length != 2
      ) {
        text.push("-");
      }
      text.push(phone[i]);
    }
    return text.join("");
  };

  const login_logout = () => {
    if (isLogin) {
      return (
        <>
          <Container>
            <div style={{ textAlign: "center" }}>
              <h4>My Information</h4>
            </div>

            <Form className="mb-2">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  ID
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    plaintext
                    readOnly
                    value={id}
                    style={{ cursor: "default", outline: "0px" }}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  PASSWORD
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={pw}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  NAME
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    plaintext
                    readOnly
                    value={names}
                    style={{ cursor: "default", outline: "0px" }}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  SEX
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    plaintext
                    readOnly
                    value={sex}
                    style={{ cursor: "default", outline: "0px" }}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  PHONE
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" value={phone} placeholder="Phone" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  EMAIL
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" value={mail} placeholder="Mail" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  ADRESS
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    value={adress}
                    placeholder="Adress"
                  />
                </Col>
              </Form.Group>
            </Form>
            <div className="d-grid gap-2">
              <Button variant="primary">Change</Button>
              <Button variant="secondary">Close</Button>
            </div>
            <Footer />
          </Container>
        </>
      );
    }
  };
  return <>{login_logout()}</>;
};

export default Info;
