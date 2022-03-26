import axios from "axios";
import { react, useEffect, useState } from "react";
import { React } from "react";
import { Container, Nav } from "react-bootstrap";
import Footer from "../Layout/Footer";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import $ from "jquery";

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const Notice = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      url: "/board/show",
      method: "GET",
      baseURL: "http://localhost:8088",
    }).then((response) => {
      setData(response.data);
    });
  }, []);

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
    });
  }, []);

  const boardOpen = (e) => {
    console.log(e.target);
    // sessionStorage.setItem("boardId", e.target.id);
    // window.location.href = "/Module/Detail";
    $("#content" + e.target.id).css({
      display: "flex",
    });
  };

  const boardClose = (e) => {
    e.target.style.display = "none";
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
                번호
              </th>
              <th className="pa3 bg-white" style={{ cursor: "default" }}>
                제목
              </th>
              <th className="pa3 bg-white" style={{ cursor: "default" }}>
                작정자
              </th>
              <th className="pa3 bg-white" style={{ cursor: "default" }}>
                작성일
              </th>
            </tr>
          </thead>
          {data.length !== 0 &&
            data.map((statement, index) => {
              const parsedDate = getdate(statement.date);
              return (
                <>
                  <tbody>
                    <tr className="stripe-dark">
                      <td className="pa3">
                        <button
                          id={statement.id}
                          onClick={boardOpen}
                          style={{
                            textDecoration: "none",
                            border: "0px",
                            backgroundColor: "rgba(255, 255, 255, 0)",
                          }}
                        >
                          {index + 1}
                        </button>
                      </td>
                      <td className="pa3">
                        <button
                          id={statement.id}
                          onClick={boardOpen}
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
                  </tbody>
                  <div
                    id={"content" + statement.id}
                    style={{
                      display: "none",
                      border: "1px solid black",
                      width: "100px",
                    }}
                    onClick={boardClose}
                  >
                    {statement.content}
                  </div>
                </>
              );
            })}
        </table>
        <div style={{ textAlign: "right" }}>
          <Button href="/Module/Writer" variant="dark">
            글쓰기
          </Button>
        </div>
        <div className="fn fl-ns w-50-ns">
          <p className="f5 lh-copy measure"></p>
        </div>
      </article>

      <Pagination size="sm">{items}</Pagination>
      <Footer />
    </Container>
  );
};
export default Notice;
