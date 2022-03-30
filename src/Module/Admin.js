import axios from "axios";
import { react, useEffect, useState } from "react";
import { React } from "react";
import { Container, Nav } from "react-bootstrap";
import Footer from "../Layout/Footer";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Admin = () => {
  const [memberData, setMemberData] = useState([]);
  const [isOP, setOP] = useState("");
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("session_key") != null) {
      axios({
        url: "/member/state",
        method: "post",
        data: {
          user_session: sessionStorage.getItem("session_key"),
        },
        baseURL: "http://localhost:8088",
      }).then((response) => {
        setOP(response.data.op);
      }, []);
    }
  });

  useEffect(() => {
    if (isOP === "관리자") {
      axios({
        url: "/member/show",
        method: "GET",
        baseURL: "http://localhost:8088",
      }).then((response) => {
        setMemberData(response.data);
      });
    }
  });
  const chunk = (arr, size) => {
    // 배열 나누는 함수

    var i,
      j,
      temparray = [],
      chunk = size;
    for (i = 0, j = arr.length; i < j; i += chunk) {
      temparray.push(arr.slice(i, i + chunk));
    }
    return temparray;
  };
  useEffect(() => {
    // axios({
    //   url: "/product/allProducts",
    //   method: "get",
    //   baseURL: "http://localhost:8088",
    // }).then((response) => {
    //   setProducts(chunk(response.data, 100));
    // });
  });

  function addPadding(num) {
    return num < 10 ? `0${num}` : num;
  }

  function getdate(date) {
    const d = new Date(date);

    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${addPadding(
      d.getHours()
    )}:${addPadding(d.getMinutes())}:${addPadding(d.getSeconds())}`;
  }
  const setNum = (e) => {
    setPages(e.target.id);
  };
  const delet = (e) => {
    console.log("삭제");
    const index = e.target.id;
    console.log(index);
    axios({
      url: "/member/delete",
      method: "post",
      data: memberData[index],
      baseURL: "http://localhost:8088",
    }).then((response) => {
      if (response.data) {
        alert("회원삭제를 성공적으로 끝내었습니다.");
        window.location.reload();
      } else {
        alert("회원삭제 도중 오류가 발생하여 회원삭제를 실패 하였습니다.");
      }
    });
  };

  return (
    <Container
      style={{
        marginTop: "200px",
        textAlign: "center",
        maxWidth: "1200px",
      }}
    >
      <h1 class="f4 bold center mw6">Admin Page</h1>
      <Accordion defaultActiveKey="0" alwaysOpen>
        {isOP == "관리자" && (
          <Accordion.Item eventKey="0">
            <Accordion.Header>회원 관리</Accordion.Header>
            <Accordion.Body>
              <div className="pa1">
                <div className="overflow-auto">
                  <table className="f6 w-100 mw9 center" cellSpacing="0">
                    <thead>
                      <tr className="stripe-dark">
                        <th className="fw6 pa3 bg-white">ID</th>
                        <th className="fw6 pa3 bg-white">PASSWORD</th>
                        <th className="fw6 pa3 bg-white">NAME</th>
                        <th className="fw6 pa3 bg-white">SEX</th>
                        <th className="fw6 pa3 bg-white">PHONE</th>
                        <th className="fw6 pa3 bg-white">E-EMAIL</th>
                        <th className="fw6 pa3 bg-white">ADDRESS</th>
                      </tr>
                    </thead>
                    <tbody className="lh-copy">
                      {memberData.length !== 0 &&
                        memberData.map((statement, index) => {
                          return (
                            <tr className="stripe-dark" key={index}>
                              <td className="pa3">{statement.user_id}</td>
                              <td className="pa3">{statement.user_pwd}</td>
                              <td className="pa3">{statement.user_name}</td>
                              <td className="pa3">{statement.user_sex}</td>
                              <td className="pa3">{statement.user_phone}</td>
                              <td className="pa3">{statement.user_mail}</td>
                              <td className="pa3">{statement.user_adress}</td>
                              <div class="pa3">
                                <button
                                  id={index}
                                  class="fw6 db dark-pink link"
                                  style={{
                                    border: "0px",
                                    backgroundColor: "rgba(255, 255, 255, 0)",
                                  }}
                                  onClick={delet}
                                >
                                  삭제
                                </button>
                              </div>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        )}
        <Accordion.Item eventKey="1" alwaysOpen>
          <Accordion.Header>상품 관리</Accordion.Header>
          <Accordion.Body>
            <div className="pa1">
              <div className="overflow-auto">
                <table className="f6 w-100 mw9 center" cellSpacing="0">
                  <thead>
                    <tr className="stripe-dark">
                      <th className="fw6 pa3 bg-white">PNAME</th>
                      <th className="fw6 pa3 bg-white">BRAND</th>
                      <th className="fw6 pa3 bg-white">C1</th>
                      <th className="fw6 pa3 bg-white">C2</th>
                      <th className="fw6 pa3 bg-white">C3</th>
                      <th className="fw6 pa3 bg-white">PRICE</th>
                      <th className="fw6 pa3 bg-white">PLACE</th>
                      <th className="fw6 pa3 bg-white">DATA</th>
                    </tr>
                  </thead>
                  <tbody className="lh-copy">
                    {products.length !== 0 &&
                      products[pages].map((statement) => {
                        const parsedDate = getdate(statement.date);
                        return (
                          <tr
                            className="stripe-dark"
                            style={{ margin: "0px", padding: "0px" }}
                          >
                            <td
                              className="pa3"
                              style={{ margin: "0px", padding: "0px" }}
                              dangerouslySetInnerHTML={{
                                __html: statement.title,
                              }}
                            ></td>
                            <td
                              className="pa3"
                              style={{ margin: "0px", padding: "0px" }}
                            >
                              {statement.brand}
                            </td>
                            <td
                              className="pa3"
                              style={{ margin: "0px", padding: "0px" }}
                            >
                              {statement.category1}
                            </td>
                            <td
                              className="pa3"
                              style={{ margin: "0px", padding: "0px" }}
                            >
                              {statement.category2}
                            </td>
                            <td
                              className="pa3"
                              style={{ margin: "0px", padding: "0px" }}
                            >
                              {statement.category3}
                            </td>
                            <td
                              className="pa3"
                              style={{ margin: "0px", padding: "0px" }}
                            >
                              {statement.lprice}
                            </td>
                            <td
                              className="pa3"
                              style={{ margin: "0px", padding: "0px" }}
                            >
                              {statement.mallName}
                            </td>
                            <td
                              className="pa3"
                              style={{ margin: "0px", padding: "0px" }}
                            >
                              {parsedDate}
                            </td>
                            <div class="pa3">
                              <a class="fw6 db dark-pink link" href="#0">
                                삭제
                              </a>
                            </div>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
                {products.length != 0 &&
                  products.map((value, index) => {
                    if (pages + 5 < index || pages > index) {
                      return (
                        <button
                          id={index}
                          key={index}
                          onClick={setNum}
                          style={{
                            margin: "2px",
                            background: "white",
                          }}
                        >
                          {index + 1}
                        </button>
                      );
                    }
                  })}
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" alwaysOpen>
          <Accordion.Header>상품 등록</Accordion.Header>
          <Accordion.Body>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">상품명</InputGroup.Text>
              <FormControl
                placeholder="Item Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="title"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>브랜드</InputGroup.Text>
              <FormControl
                placeholder="Brand Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="title"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>분류 1</InputGroup.Text>
              <DropdownButton id="dropdown-item-button" title="C1">
                <Dropdown.ItemText>C1</Dropdown.ItemText>
                <Dropdown.Item as="button">Action</Dropdown.Item>
              </DropdownButton>

              <InputGroup.Text>분류 2</InputGroup.Text>
              <DropdownButton id="dropdown-item-button" title="C2">
                <Dropdown.ItemText>C2</Dropdown.ItemText>
              </DropdownButton>
              <InputGroup.Text>분류 3</InputGroup.Text>
              <DropdownButton id="dropdown-item-button" title="C3">
                <Dropdown.ItemText>C3</Dropdown.ItemText>
              </DropdownButton>
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>가격</InputGroup.Text>
              <FormControl
                placeholder="Price"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="title"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>판매처</InputGroup.Text>
              <FormControl
                placeholder="Sell Place"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="title"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>이미지</InputGroup.Text>&nbsp;
              <label className="fileupload" for="input-file"></label>
              <input type="file" id="input-file" />
            </InputGroup>

            <div className="Btn-right">
              <Button href="/Module/Admin" variant="dark">
                등록
              </Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Footer />
    </Container>
  );
};
export default Admin;
