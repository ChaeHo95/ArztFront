import react from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Layout/Footer';

const Global = () => {
  return (

    <Container>
      <section className="vh-100 bg-washed-blue baskerville" >
        <header className="tc ph5 lh-copy">
          <h4 className="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple" style={{ marginTop: "80px" }}>404</h4><br></br>
          <h4 className="tc f1-l fw1">Sorry, we can't find the page you are looking for.</h4>
        </header>
        
        <ul className="list tc pl0 w-100 mt5">
          <li className="dib"><a className="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/"><h4><b>Return to Home</b></h4></a></li>
        </ul>
      </section>
      <Footer />
    </Container>

  )
}

export default Global;