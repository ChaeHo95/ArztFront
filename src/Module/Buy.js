import {React} from "react";
import {Container, Nav} from "react-bootstrap";
import Footer from "../Layout/Footer";


const Buy = () => {

    return (
        <Container
            style={{
                marginTop: '200px'
                
        }}>
        <div className="center">
        <h2>Thanks for your order</h2>
        </div>
        <li className="dib"><h5><b>Your Address : { }</b></h5></li><br></br>
        <li className="dib red"><h5><b>Total Price : { }</b></h5></li><br></br>
            


            <div className="center" style={{marginTop:"200px"}}>
          <li className="dib"><a className="f5 link" href="/Module/Cart"><h5><b>Return to Cart</b></h5></a></li><br></br><br></br>
          <li className="dib"><a className="f5 link" href="/"><h5><b>Return to Home</b></h5></a></li>
        </div>
            <Footer/>
        </Container>

    );
};
export default Buy;