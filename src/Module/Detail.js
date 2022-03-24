import axios from "axios";
import { react, useEffect, useState } from "react";
import { React } from "react";
import { Container, Nav } from "react-bootstrap";
import Footer from "../Layout/Footer";
import Button from 'react-bootstrap/Button'
import Pagination from 'react-bootstrap/Pagination'

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}
const Detail = () => {
    const [data, setData, subject, content, writer] = useState([]);

    axios({
        url: "/board/insert",
        method: "POST",
        data: {
            subject: subject,
            content: content,
            writer: writer
        },
        baseURL: "http://localhost:8088",
    }).then((response) => {
        console.log(response.data)
        setData(response.data)
    }, []);

    function addPadding(num) {
        return num < 10
            ? `0${num}`
            : num
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

                    <tbody>
                        {
                            data.length !== 0 && data.map(statement => {
                                return (
                                    <tr>
                                        <td
                                            style={{
                                                padding: "1%"
                                            }}
                                            href='location={}'>{statement.subject}</td>
                                        <td>{statement.content}</td>
                                    </tr>

                                )

                            })
                        }
                    </tbody>
                </table>
                <div style={{ textAlign: "right" }}>
                    <Button href="/Module/Notice" variant="dark">목록가기</Button>
                </div>
                <div className="fn fl-ns w-50-ns">
                    <p className="f5 lh-copy measure"></p>
                </div>
            </article>

            <Pagination size="sm">
                {items}</Pagination>
            <Footer />
        </Container>
    );
};
export default Detail;