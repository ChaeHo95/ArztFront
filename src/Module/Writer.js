import axios from "axios";
import { react, useEffect, useState } from "react";
import { React } from "react";
import { Container, Nav } from "react-bootstrap";
import Footer from "../Layout/Footer";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Writer = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const targetting = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "content":
        setContent(value);
        break;
    }
  };
  // (date = null, bno = null, subject = asd, content = dsa, writer = null)
  const contentWriter = () => {
    axios({
      url: "/board/insert",
      method: "POST",
      data: {
        subject: title,
        content: content,
        writer: "우앙",
      },
      baseURL: "http://localhost:8088",
    }).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <Container
      style={{
        marginTop: "200px",
        textAlign: "center",
        maxWidth: "800px",
      }}
    >
      <h5>Writer</h5>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">제목</InputGroup.Text>
        <FormControl
          placeholder="Title"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="title"
          onChange={targetting}
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
          onChange={targetting}
        />
      </InputGroup>
      <div className="Btn-right">
        <Button href="/Module/Notice" variant="dark" onClick={contentWriter}>
          글작성
        </Button>
      </div>

      <Footer />
    </Container>
  );
};
export default Writer;
