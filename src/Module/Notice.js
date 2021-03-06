import axios from "axios";
import { useEffect, useState } from "react";
import { React } from "react";
import { Container } from "react-bootstrap";
import Footer from "../Layout/Footer";
import Button from "react-bootstrap/Button";
import Modal from "./Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const Notice = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState("");
  const [boardId, setBoradId] = useState("");
  const [boardTitle, setBoradTitle] = useState("");
  const [boardContent, setBoradContent] = useState("");
  const [boardWriter, setBoardWriter] = useState("");
  const [pages, setPages] = useState(0);
  const [isOP, setOP] = useState("");

  function addPadding(num) {
    return num < 10 ? `0${num}` : num;
  }

  function getdate(date) {
    const d = new Date(date);

    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${addPadding(
      d.getHours()
    )}:${addPadding(d.getMinutes())}:${addPadding(d.getSeconds())}`;
  }

  useEffect(() => {
    axios({
      url: "/board/show",
      method: "GET",
      baseURL: "http://localhost:8088",
    }).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);
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
  const openModal = (e) => {
    console.log(e.target);
    const num = e.target.id.split("");
    console.log(num);
    setBoradId(data[num[0]][num[1]].id);
    setBoradTitle(data[num[0]][num[1]].subject);
    setBoradContent(data[num[0]][num[1]].content);
    setBoardWriter(data[num[0]][num[1]].writer);

    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const updateBorad = () => {
    let ok = true;
    const checks = { content: boardContent, title: boardTitle };
    for (let check in checks) {
      if (checks[check] === "") {
        alert(`${check} ????????? ?????? ????????????.\n ???????????? ?????????`);
        ok = false;
      }
    }
    if (ok) {
      axios({
        url: "/board/update",
        method: "post",
        data: {
          subject: boardTitle,
          id: boardId,
          content: boardContent,
        },
        baseURL: "http://localhost:8088",
      }).then((response) => {
        console.log(response.data);
        if (response.data) {
          alert("????????? ?????????????????????.");
          window.location.reload();
        } else {
          alert("????????? ?????????????????????.");
        }
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isOP === "?????????") {
      switch (name) {
        case "content":
          setBoradContent(value);
          break;
        case "title":
          setBoradTitle(value);
          break;
      }
    }
  };
  const setNum = (e) => {
    setPages(e.target.id);
  };
  const WriteBoratd = () => {
    if (isOP === "?????????") {
      return (
        <>
          <div style={{ textAlign: "right" }}>
            <Button href="/Module/Writer" variant="dark">
              ?????????
            </Button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div style={{ textAlign: "right" }}></div>
        </>
      );
    }
  };
  const UpdataBoratd = () => {
    if (isOP === "?????????") {
      return (
        <>
          <Button
            variant="dark"
            style={{ marginTop: "10px", marginRight: "10px" }}
            onClick={updateBorad}
          >
            ??????
          </Button>
        </>
      );
    } else {
      return <></>;
    }
  };
  return (
    <Container
      style={{
        textAlign: "center",
        marginTop: "200px",
      }}
    >
      <h5 style={{ cursor: "default" }}>Notice</h5>
      <article className="cf ph3">
        <table className="f6 w-100 mw9 center" cellSpacing="0">
          <thead style={{ textAlign: "center" }}>
            <tr className="stripe-dark">
              <th className="pa3 bg-white" style={{ cursor: "default" }}>
                ??????
              </th>
              <th className="pa3 bg-white" style={{ cursor: "default" }}>
                ??????
              </th>
              <th className="pa3 bg-white" style={{ cursor: "default" }}>
                ?????????
              </th>
              <th className="pa3 bg-white" style={{ cursor: "default" }}>
                ?????????
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length != 0 &&
              data[pages].map((statement, index) => {
                const parsedDate = getdate(statement.date);
                return (
                  <tr className="stripe-dark" key={index}>
                    <td className="pa3">
                      <button
                        id={`${pages}${index}`}
                        onClick={openModal}
                        style={{
                          textDecoration: "none",
                          border: "0px",
                          backgroundColor: "rgba(255, 255, 255, 0)",
                        }}
                      >
                        {pages * 10 + index + 1}
                      </button>
                    </td>
                    <td className="pa3">
                      <button
                        id={`${pages}${index}`}
                        onClick={openModal}
                        style={{
                          textDecoration: "none",
                          border: "0px",
                          backgroundColor: "rgba(255, 255, 255, 0)",
                        }}
                      >
                        {statement.subject}
                      </button>
                    </td>
                    <td className="pa3" style={{ cursor: "default" }}>
                      {statement.writer}
                    </td>
                    <td className="pa3" style={{ cursor: "default" }}>
                      {parsedDate}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {data.length != 0 &&
          data.map((value, index) => {
            return (
              <button
                id={index}
                key={index}
                onClick={setNum}
                style={{ margin: "2px", background: "white" }}
              >
                {index + 1}
              </button>
            );
          })}
        <WriteBoratd />
        <div className="fn fl-ns w-50-ns">
          <p className="f5 lh-copy measure"></p>
        </div>
      </article>
      <Footer />
      <Modal open={open}>
        <h5 style={{ cursor: "default" }}>Detail</h5>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" style={{ cursor: "default" }}>
            ??????
          </InputGroup.Text>
          <FormControl
            placeholder="Title"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="title"
            value={boardTitle}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text style={{ cursor: "default" }}>??????</InputGroup.Text>
          <FormControl
            placeholder="Content"
            name="content"
            as="textarea"
            rows={12}
            aria-label="With textarea"
            value={boardContent}
            onChange={handleChange}
          />
        </InputGroup>
        <div style={{ textAlign: "end", cursor: "default" }}>
          ????????? : {boardWriter}
        </div>
        <div style={{ textAlign: "right" }}>
          <UpdataBoratd />
          <Button
            variant="dark"
            style={{ marginTop: "10px" }}
            onClick={closeModal}
          >
            ????????????
          </Button>
        </div>
        <div className="fn fl-ns w-50-ns">
          <p className="f5 lh-copy measure"></p>
        </div>
      </Modal>
    </Container>
  );
};
export default Notice;
