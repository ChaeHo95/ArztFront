import {React} from "react";
import {Container, Nav} from "react-bootstrap";
import Footer from "../Layout/Footer";


const Buy = () => {

    return (
        <Container
            style={{
                marginTop: '200px',
                textAlign: 'center'
            }}>
        <h2 class="">Thanks for your order</h2>
        
        <ul className="list tc pl0 w-100 mt5">
            



          <li className="dib"><a className="f5 link black db pv2 ph3 hover-light-purple" href="/Module/Cart"><h2><b>Return to Cart</b></h2></a></li>
          <li className="dib"><a className="f5" href="/"><h2><b>Return to Home</b></h2></a></li>
        </ul>
            <Footer/>
        </Container>

    );
};
export default Buy;