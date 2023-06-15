import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Prenav from "./Prenav";

const SharedComponents = ({ children }) => {
  return (
    <>
      <Prenav />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default SharedComponents;
