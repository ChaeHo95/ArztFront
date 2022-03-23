import axios from "axios";
import { react, useEffect, useState } from "react";
import { React } from "react";
import { Container, Nav } from "react-bootstrap";
import Footer from "../Layout/Footer";
import Button from 'react-bootstrap/Button'
import Pagination from 'react-bootstrap/Pagination'
import { Link } from "react-router-dom";

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const Notice = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      url: "/board/show",
      method: "GET",
      baseURL: "http://localhost:8088"
    })
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      }
      )
  }, [])

  function addPadding(num) {
    return num < 10
      ? `0${num}`
      : num
  }

  function getdate(date) {
    const d = new Date(date)
    console.log(d.getFullYear(), d.getMonth() + 1, d.getDate())
    console.log(d.getHours(), d.getMinutes(), d.getSeconds())

    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${addPadding(
      d.getHours()
    )}:${addPadding(d.getMinutes())}:${addPadding(d.getSeconds())}`

  }
  return (

    <Container
      style={{
        textAlign: "center",
        marginTop: '200px'
      }}>

      <h5 >Notice</h5>
      <article className="cf ph3 ph5-ns pv5">
        <table className="f6 w-100 mw9 center" cellSpacing="0">


          <thead style={{ textAlign: "center" }}>
            <tr className="stripe-dark">
              <th className="fw6  pa3 bg-white">번호</th>
              <th className="fw6  pa3 bg-white">제목</th>
              <th className="fw6  pa3 bg-white">작정자</th>
              <th className="fw6  pa3 bg-white">작성일</th>

            </tr>
          </thead>
          {/* <Link to={{ pathname: "/Module/detail" }} style={{ textDecoration: 'none', color: 'black' }}> */}
          <tbody>
            {
              data.length !== 0 && data.map(statement => {
                const parsedDate = getdate(statement.date)
                console.log('parsed date: ', parsedDate)
                return (

                  <tr>
                    <td
                      style={{
                        padding: "1%"
                      }}
                    ><a href="/Module/detail" style={{ textDecoration: 'none', color: 'black' }} >{statement.bno}</a></td>
                    <td><a href="/Module/detail" style={{ textDecoration: 'none', color: 'black' }} >{statement.subject}</a></td>
                    <td>{statement.writer}</td>
                    <td>{parsedDate}</td>
                  </tr>

                )

              })
            }
          </tbody>
          {/* </Link> */}
        </table>
        <div style={{ textAlign: "right" }}>
          <Button href="/Module/Writer" variant="dark">글쓰기</Button>
        </div>
        <div className="fn fl-ns w-50-ns">
          <p className="f5 lh-copy measure"></p>
        </div>
      </article>

      <Pagination size="sm">
        {items}</Pagination>
      <Footer />
    </Container >
  );
};
export default Notice;