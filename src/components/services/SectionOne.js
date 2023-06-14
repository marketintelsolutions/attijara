import React from "react";
import focused from "../../assets/images/focused.png";

const SectionOne = () => {
  return (
    <div
      className="services-section-one"
      style={{ backgroundImage: `url(${focused})` }}
    >
      <div className="content">
        <h1>Our Services</h1>
        <p>
          At Attijara Finance & Investment Company Limited, we are committed to
          delivering excellence in every aspect of our services. Trust us to be
          your partner in financial success.
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
