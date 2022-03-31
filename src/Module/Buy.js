import {React} from "react";
import {Container, Nav} from "react-bootstrap";
import Footer from "../Layout/Footer";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Accordion from 'react-bootstrap/Accordion'


const Buy = () => {

    return (
        <Container
            style={{
                marginTop: '200px',
                textAlign: 'center'
            }}>
            <h1 class="">Buy page</h1>
        <body class="animsition">
          <form class="bg0 p-t-75 p-b-85">
            <div class="container">
              <div class="row">
                <div class="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                  <div class="m-l-25 m-r--38 m-lr-0-xl">
                    <div class="wrap-table-shopping-cart">
                      <table class="table-shopping-cart">
                        <tr class="table_head">
                          <th class="column-1">Image</th>
                          <th class="column-2">Product</th>
                          <th class="column-3">Price</th>
                          <th class="column-4">Quantity</th>
                          <th class="column-5">Total</th>
                        </tr>

                        <tr class="table_row">
                          <td class="column-1">
                            <div class="how-itemcart1">
                              <img src="images/item-cart-04.jpg" alt="IMG"/>
                            </div>
                          </td>
                          <td class="column-2">Fresh Strawberries</td>
                          <td class="column-3">3600</td>
                          <td class="column-4">1</td>
                          <td class="column-5"> 36.00</td>
                        </tr>

                       
                      </table>
                    </div>

                    <div class="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
                      <div class="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">
                        장바구니 새로고침
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                  <div class="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                    <h4 class="mtext-109 cl2 p-b-30">
                      Cart Totals
                    </h4>

                    <div class="flex-w flex-t bor12 p-b-13">
                      <div class="size-208">
                        <span class="stext-110 cl2">
                          주문액:
                        </span>
                      </div>

                      <div class="size-209">
                        <span class="mtext-110 cl2">
                          79.65
                        </span>
                      </div>
                    </div>

                    <div class="flex-w flex-t bor12 p-t-15 p-b-30">
                      <div class="size-208 w-full-ssm">
                        <span class="stext-110 cl2">
                          물품 받을 곳:
                        </span>
                      </div>

                      <div class="size-209 p-r-18 p-r-0-sm w-full-ssm">
                        <p class="stext-111 cl6 p-t-2">
                          There are no shipping methods available. Please double check your address, or contact us if you need any help.
                        </p>

                        <div class="p-t-15">
                          <span class="stext-112 cl8">
                            주소 입력
                          </span>
                    

                          <div class="bor8 bg0 m-b-12">
                            <input class="stext-111 cl8 plh3 size-111 p-lr-15" type="text" name="state" placeholder="Order Name"/>
                          </div>

                          <div class="bor8 bg0 m-b-22">
                            <input class="stext-111 cl8 plh3 size-111 p-lr-15" type="text" name="postcode" placeholder="Postcode"/>
                          </div>
               
                        </div>
                      </div>
                    </div>

                    <div class="flex-w flex-t p-t-27 p-b-33">
                      <div class="size-208">
                        <span class="mtext-101 cl2">
                          합계액:
                        </span>
                      </div>

                      <div class="size-209 p-t-1">
                        <span class="mtext-110 cl2">
                          79.65
                        </span>
                      </div>
                    </div>

                    <button class="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
                      주문 하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </body>   
            <Footer/>
        </Container>

    );
};
export default Buy;