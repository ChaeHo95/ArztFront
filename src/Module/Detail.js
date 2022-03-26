import axios from "axios";
import { react, useEffect, useState } from "react";
import { React } from "react";
import { Container, Nav } from "react-bootstrap";
import Footer from "../Layout/Footer";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}
const Detail = () => {
  const [borad, setBorad] = useState([]);

  useEffect(() => {
    axios({
      url: "/board/detail",
      method: "post",
      data: {
        id: sessionStorage.getItem("boardId"),
      },
      baseURL: "http://localhost:8088",
    }).then((response) => {
      console.log(response.data);
      setBorad(response.data);
      sessionStorage.removeItem("boardId");
    });
  }, []);

  function addPadding(num) {
    return num < 10 ? `0${num}` : num;
  }

  return (
    <Container
      style={{
        textAlign: "center",
        marginTop: "200px",
      }}
    >
      <h5>Detail</h5>
      <article className="cf ph3 ph5-ns pv5">
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">제목</InputGroup.Text>
          <FormControl
            placeholder="Title"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="title"
            value={borad.subject}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>내용</InputGroup.Text>
          <FormControl
            placeholder="Content"
            name="content"
            as="textarea"
            rows={12}
            aria-label="With textarea"
            value={borad.content}
          />
        </InputGroup>
        <div style={{ textAlign: "end", cursor: "default" }}>
          작성자 : {borad.writer}
        </div>
        <div style={{ textAlign: "right" }}>
          <Button
            variant="dark"
            style={{ marginTop: "10px", marginRight: "10px" }}
          >
            수정
          </Button>
          <Button
            href="/Module/Notice"
            variant="dark"
            style={{ marginTop: "10px" }}
          >
            목록가기
          </Button>
        </div>
        <div className="fn fl-ns w-50-ns">
          <p className="f5 lh-copy measure"></p>
        </div>
      </article>

      <Footer />
    </Container>
  );
};
export default Detail;
