import React from "react";
import { Container } from "react-bootstrap";

const Products = () => {
  return (
    <div className="cardgroup" style={{ marginTop: "200px" }}>
      <div>카테고리 대 중 소</div>
      <article>
        <div className="cf pa2">
          <div className="fl w-50 w-25-m w-20-l pa2">
            <a
              href="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
              className="db link dim tc"
            >
              <img
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17f96b182a7%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17f96b182a7%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.375%22%20y%3D%2295.4%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="Frank Ocean Blonde Album Cover"
                className="w-100 db outline black-10"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100">Blonde</dd>
                <dt className="clip">Artist</dt>
                <dd className="ml0 gray truncate w-100">Frank Ocean</dd>
              </dl>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};
export default Products;
