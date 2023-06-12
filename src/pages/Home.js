import React from "react";
import Footer from "../components/Footer";
import SectionFive from "../components/Home/SectionFive";
import SectionFour from "../components/Home/SectionFour";
import SectionOne from "../components/Home/SectionOne";
import SectionThree from "../components/Home/SectionThree";
import SectionTwo from "../components/Home/SectionTwo";
import Navbar from "../components/Navbar";
import Prenav from "../components/Prenav";

const Home = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
};

export default Home;
