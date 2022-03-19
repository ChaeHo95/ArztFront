import React from "react";
import Header from "./Header";
import Upper from "./Upper";
import Lower from "./Lower";
import Footer from "./Footer";
import Browser from "../Browser";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center" }}>
        <h4>Event Slider</h4>
      </div>
      <Upper />
      {children}
      <br></br>
      <br></br>
      <div style={{ textAlign: "center" }}>
        <h4>Product List</h4>
      </div>
      <Lower />
      <Footer />
    </>
  );
};

export default Layout;
