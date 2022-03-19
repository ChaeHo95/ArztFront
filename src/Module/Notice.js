import react from "react";
import { Container } from "react-bootstrap";
import Footer from "../Layout/Footer";

const Notice = () => {
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <article className="cf ph3 ph5-ns pv5">
          <header className="fn fl-ns w-50-ns pr4-ns">
            <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
              On Artz Shopmall
            </h1>
            <time className="f6 ttu tracked gray">Sometime before 2022</time>
          </header>
          <div className="fn fl-ns w-50-ns">
            <p className="f5 lh-copy measure">
              All typography consists of letters. These appear either in the
              form of a smoothly running sentence or as an assembly of lines,
              which may even have contrasting shapes. Good typog- raphy begins,
              and this is no minor matter, with the typeset- ting of a single
              line of text in a book or a newspaper. Using exactly the same
              typeface, it is possible to create either a pleasant line, easily
              read, or an onerous one. Spacing, if it is too wide or too
              compressed, will spoil almost any typeface.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </Container>
  );
};
export default Notice;
