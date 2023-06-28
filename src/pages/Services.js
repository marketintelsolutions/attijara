import React, { useEffect } from "react";
import SectionOne from "../components/services/SectionOne";
import SectionTwo from "../components/services/SectionTwo";

const Services = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <SectionOne />
      <SectionTwo />
    </div>
  );
};

export default Services;
