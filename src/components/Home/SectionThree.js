import React from "react";
import { chooseUs } from "../../utils/data";
import ChooseUs from "../ChooseUs";

const SectionThree = () => {
  return (
    <div className="section-three">
      <div className="content">
        <div className="left">
          <h2>Why Choose Us?</h2>
          <p>Why Choose Personal Banking</p>
          <button>Learn More</button>
        </div>
        <div className="right">
          {chooseUs.map((item) => {
            return <ChooseUs {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
