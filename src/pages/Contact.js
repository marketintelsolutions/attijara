import React, { useEffect } from "react";
import SectionOne from "../components/Contact/SectionOne";
import SectionTwo from "../components/Contact/SectionTwo";

const Contact = () => {
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

export default Contact;
