import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Module/NotFound";
import Writer from "./Module/Writer";
import { Info, Recent, Cart, Notice, Login, SignUp, Global } from "./Module/";
import Layout from "./Layout/Layout";

const App = () => {


  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route exact path="/Module/Info" element={<Info />} />
        <Route exact path="/Module/Recent" element={<Recent />} />
        <Route exact path="/Module/Cart" element={<Cart />} />
        <Route exact path="/Module/Notice" element={<Notice />} />
        <Route exact path="/Module/Login" element={<Login />} />
        <Route exact path="/Module/SignUp" element={<SignUp />} />
        <Route exact path="/Module/Global" element={<Global />} />
        <Route exact path="/Module/Writer" element={<Writer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
