import React from "react";
import Header from "./Header";
import Upper from "./Upper";
import Lower from "./Lower";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center" }}>
        <h4>Event</h4>
      </div>
      <Upper />
      {children}
      <br></br>
      <br></br>
      <div style={{ textAlign: "center" }}>
        <h4></h4>
      </div>
      <Lower />
      <Footer />
    </>
  );
};

export default Layout;
