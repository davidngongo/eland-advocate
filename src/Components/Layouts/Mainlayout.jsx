import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Comtof from "../Comtof";
import Contactus from "../Contactus";
import Footer from "../Footer";

const Mainlayout = () => {
  return (
    <>
      <Navbar />
      <Comtof />
      <Outlet />
      <Contactus />
      <Footer />
    </>
  );
};

export default Mainlayout;
