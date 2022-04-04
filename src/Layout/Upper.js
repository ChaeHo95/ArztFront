import ListGroup from 'react-bootstrap/ListGroup'
import { Carousel } from "react-bootstrap";

const Upper = () => {
  return (

    <div className='cardgroup'>
      Event Slider
      <Carousel fade variant="dark">
        <Carousel.Item>
          <img
            style={{ height: "400px" }}
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2021/03/16/21/46/tea-6101059_960_720.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "400px" }}
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122_960_720.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "400px" }}
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2021/10/04/06/28/cactus-6679665_960_720.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

  )
}

export default Upper;
