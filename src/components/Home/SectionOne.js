import React from "react";
import darkwoman from "../../assets/images/darkwoman.png";

const SectionOne = () => {
  return (
    <div
      className="section-one"
      style={{ backgroundImage: `url(${darkwoman})` }}
    >
      <div className="content">
        <h1>Nigeria’s best financial and investment company.</h1>
        <p>We help you save, invest and plan for generational wealth</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default SectionOne;
