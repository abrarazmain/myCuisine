import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
