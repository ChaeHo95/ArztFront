import axios from "axios";
import { react, useEffect, useState } from "react";
import { React } from "react";
import { Container, Nav } from "react-bootstrap";
import Footer from "../Layout/Footer";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const Admin = () => {
    return (

        <Container style={{
            marginTop: '200px',
            textAlign: 'center',
            maxWidth: '600px'
        }}>
            <h5>관리자 페이지</h5>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">제목</InputGroup.Text>
                <FormControl
                    placeholder="Title"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="title"
                    
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
                    />
            </InputGroup>
            <div className="Btn-right">
                <Button href="/Module/Notice" variant="dark" >글작성</Button>
            </div>

            <Footer />
        </Container>

    );
};
export default Admin;