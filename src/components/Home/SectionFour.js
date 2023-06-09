import React from "react";
import businessPeople from "../../assets/images/businessPeople.png";

const SectionFour = () => {
  return (
    <div
      className="section-four"
      style={{ backgroundImage: `url(${businessPeople})` }}
    >
      <div className="content">
        <h2>Our Mission Statement:</h2>
        <p>
          At Attijara Finance & Investment Company Limited, our mission is to
          empower individuals and businesses in Nigeria with financial solutions
          that drive prosperity and growth. We are committed to providing
          innovative and reliable financial products and services, supported by
          exceptional customer service and a deep understanding of our clients'
          needs. Our goal is to be a trusted partner and catalyst for financial
          success, contributing to the economic development and financial
          well-being of Nigeria.
          <br />
          <br />
          <br />
          Our mission is guided by the following principles:
        </p>
      </div>
    </div>
  );
};

export default SectionFour;
