import axios from "axios";
import { react, useEffect, useState } from "react";
import { React } from "react";
import { Container, Nav } from "react-bootstrap";
import Footer from "../Layout/Footer";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

const Admin = () => {
    return (

        <Container style={{
            marginTop: '200px',
            textAlign: 'center',
            maxWidth: '1200px'
        }}>
            

            
                <h1 class="f4 bold center mw6">Admin Page</h1>
                <Accordion defaultActiveKey="0" alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>회원 관리</Accordion.Header>
                    <Accordion.Body>
                        
                        <div className="pa1">
                            <div className="overflow-auto">
                                <table className="f6 w-100 mw9 center" cellSpacing="0">
                                    <thead >
                                        <tr className="stripe-dark">
                                            <th className="fw6 pa3 bg-white">ID</th>
                                            <th className="fw6 pa3 bg-white">PASSWORD</th>
                                            <th className="fw6 pa3 bg-white">NAME</th>
                                            <th className="fw6 pa3 bg-white">SEX</th>
                                            <th className="fw6 pa3 bg-white">PHONE</th>
                                            <th className="fw6 pa3 bg-white">E-EMAIL</th>
                                            <th className="fw6 pa3 bg-white">ADDRESS</th>
                                            <th className="fw6 pa3 bg-white">
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="lh-copy">
                                        <tr className="stripe-dark">
                                            <td className="pa3">1</td>
                                            <td className="pa3">****</td>
                                            <td className="pa3">hassan</td>
                                            <td className="pa3">M</td>
                                            <td className="pa3">010-3333-2222</td>
                                            <td className="pa3">VFF@GMAIL.COM</td>
                                            <td className="pa3">서울</td>
                                            <div class="pa3">
                                                <a class="fw6 db dark-pink link" href="#0">삭제</a>
                                            </div>
                                        </tr>
                                        <tr className="stripe-dark">
                                            <td className="pa3">2</td>
                                            <td className="pa3">Category 1</td>
                                            <td className="pa3">taral@</td>
                                            <td className="pa3">2</td>
                                            <td className="pa3">23551</td>
                                            <td className="pa3">23551</td>
                                            <td className="pa3">23551</td>
                                            <div class="pa3">
                                                <a class="fw6 db dark-pink link" href="#0">삭제</a>
                                            </div>
                                        </tr>
                                        <tr className="stripe-dark">
                                            <td className="pa3">3</td>
                                            <td className="pa3">Category 1</td>
                                            <td className="pa3">ty@</td>
                                            <td className="pa3">1</td>
                                            <td className="pa3">32444</td>
                                            <td className="pa3">32444</td>
                                            <td className="pa3">32444</td>
                                            <div class="pa3">
                                                <a class="fw6 db dark-pink link" href="#0">삭제</a>
                                            </div>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Accordion.Body>
                    </Accordion.Item>
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
                                            <th className="fw6 pa3 bg-white">
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="lh-copy">
                                        <tr className="stripe-dark">
                                            <td className="pa3">1</td>
                                            <td className="pa3">VIVIAN</td>
                                            <td className="pa3">패션의류</td>
                                            <td className="pa3">여성의류</td>
                                            <td className="pa3">티셔츠</td>
                                            <td className="pa3">532474</td>
                                            <td className="pa3">네이버</td>
                                            <div class="pa3">
                                                <a class="fw6 db dark-pink link" href="#0">삭제</a>
                                            </div>
                                        </tr>
                                        <tr className="stripe-dark">
                                            <td className="pa3">2</td>
                                            <td className="pa3">Category 1</td>
                                            <td className="pa3">taral@</td>
                                            <td className="pa3">2</td>
                                            <td className="pa3">23551</td>
                                            <td className="pa3">23551</td>
                                            <td className="pa3">23551</td>
                                            <div class="pa3">
                                                <a class="fw6 db dark-pink link" href="#0">삭제</a>
                                            </div>
                                        </tr>
                                        <tr className="stripe-dark">
                                            <td className="pa3">3</td>
                                            <td className="pa3">Category 1</td>
                                            <td className="pa3">ty@</td>
                                            <td className="pa3">1</td>
                                            <td className="pa3">32444</td>
                                            <td className="pa3">32444</td>
                                            <td className="pa3">32444</td>
                                            <div class="pa3">
                                                <a class="fw6 db dark-pink link" href="#0">삭제</a>
                                            </div>
                                        </tr>
                                    </tbody>
                                </table>
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
                            <label className='fileupload' for="input-file">
                            </label>
                            <input type="file" id="input-file" />
                        </InputGroup>
                        
                        
                        <div className="Btn-right">
                            <Button href="/Module/Admin" variant="dark" >등록</Button>
                        </div>
                    </Accordion.Body>

                </Accordion.Item>

                </Accordion>
                     
           

            <Footer />
        </Container>

    );
};
export default Admin;