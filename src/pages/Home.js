import React from "react";
import SectionOne from "../components/Home/SectionOne";
import SectionTwo from "../components/Home/SectionTwo";
import Navbar from "../components/Navbar";
import Prenav from "../components/Prenav";

const Home = () => {
  return (
    <div>
      <Prenav />
      <Navbar />
      <SectionOne />
      <SectionTwo />
    </div>
  );
};

export default Home;
