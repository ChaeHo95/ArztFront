import react from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Layout/Footer';

const Global = () => {
  return(
    
      <Container>
        <section class="vh-100 bg-washed-blue baskerville">
          <header class="tc ph5 lh-copy">
              <hh1 class="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">404</hh1><br></br>
              <hh2 class="tc f1-l fw1">Sorry, we can't find the page you are looking for.</hh2>
          </header>
          
          <ul class="list tc pl0 w-100 mt5">
          <li class="dib"><a class="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/"><hh5>Return to Home</hh5></a></li>
          </ul>
        </section>
        <Footer/>
      </Container>
    
  )
}

export default Global;