import React from "react";
import SectionOne from "../components/About/SectionOne";
import SectionThree from "../components/About/SectionThree";
import SectionTwo from "../components/About/SectionTwo";

const About = () => {
  return (
    <div className="about">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default About;
