import React from "react";
import SectionOne from "../components/Home/SectionOne";
import Navbar from "../components/Navbar";
import Prenav from "../components/Prenav";

const Home = () => {
  return (
    <div>
      <Prenav />
      <Navbar />
      <SectionOne />
    </div>
  );
};

export default Home;
