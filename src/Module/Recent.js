import react from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Layout/Footer';
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

const Account = () => {
  return (
    <Container>
      <div className="title" style={{ textAlign: 'center' }}>
        Recent Views</div>

      <main className="mw6 center">
        <article>
          <a className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="/Module/Product">
            <div className="dtc w3">
              <img src="http://mrmrs.github.io/images/0010.jpg" className="db w-100" />
            </div>
            <div className="dtc v-top pl2">
              <h5 className="f6 f5-ns fw6 lh-title black mv0">Grid Systems</h5>
              <h5 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h5>
              <dl className="mt2 f6">
                <dt className="clip">Price</dt>
                <dd className="ml0">$75.00</dd>
              </dl>
            </div>
          </a>
        </article>
        <article>
          <a className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="/Module/Product">
            <div className="dtc w3">
              <img src="http://mrmrs.github.io/images/0002.jpg" className="db w-100" />
            </div>
            <div className="dtc v-top pl2">
              <h5 className="f6 f5-ns fw6 lh-title black mv0">History of the Poster</h5>
              <h5 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h5>
              <dl className="mt2 f6">
                <dt className="clip">Price</dt>
                <dd className="ml0">$15.00</dd>
              </dl>
            </div>
          </a>
        </article>
        <article>
          <a className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="/Module/Product">
            <div className="dtc w3">
              <img src="http://mrmrs.github.io/images/0004.jpg" className="db w-100" />
            </div>
            <div className="dtc v-top pl2">
              <h5 className="f6 f5-ns fw6 lh-title black mv0">Graphic Design in IBM: Typography, Photography, and Illustration</h5>
              <h5 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h5>
              <dl className="mt2 f6">
                <dt className="clip">Price</dt>
                <dd className="ml0">$15.00</dd>
              </dl>
            </div>
          </a>
        </article>
        <article>
          <a className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="/Module/Product">
            <div className="dtc w3">
              <img src="http://mrmrs.github.io/images/0006.jpg" className="db w-100" />
            </div>
            <div className="dtc v-top pl2">
              <h5 className="f6 f5-ns fw6 lh-title black mv0">Fotoplakate: Von den Anfängen</h5>
              <h5 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h5>
              <dl className="mt2 f6">
                <dt className="clip">Price</dt>
                <dd className="ml0">$15.00</dd>
              </dl>
            </div>
          </a>
        </article>
        <article>
          <a className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="/Module/Product">
            <div className="dtc w3">
              <img src="http://mrmrs.github.io/images/0030.jpg" className="db w-100" />
            </div>
            <div className="dtc v-top pl2">
              <h5 className="f6 f5-ns fw6 lh-title black mv0">The Graphic Artist</h5>
              <h5 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h5>
              <dl className="mt2 f6">
                <dt className="clip">Price</dt>
                <dd className="ml0">$15.00</dd>
              </dl>
            </div>
          </a>
        </article>
        <article className="mt2">
          <a className="link dt w-100 bb b--black-10 dim blue" href="/Module/Product">
            <div className="dtc w3">
              <img src="http://mrmrs.github.io/images/0010.jpg" className="db w-100" />
            </div>
            <div className="dtc v-top pl2">
              <h5 className="f6 f5-ns fw6 lh-title black mv0">A History of Visual Communication (Geschichte der visuellen Kommunikation)</h5>
              <h5 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h5>
              <dl className="mt2 f6">
                <dt className="clip">Price</dt>
                <dd className="ml0">$15.00</dd>
              </dl>
            </div>
          </a>
        </article>
      </main>
      <Pagination size="sm">{items}</Pagination>
      <Footer />
    </Container>
  )
}

export default Account;