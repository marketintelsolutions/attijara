import maleEmployeeFemales from "../../assets/images/maleEmployeeFemales.png";
import React from "react";

const SectionTwo = () => {
  return (
    <div className="about-section-two">
      <div className="content">
        <p>
          As a locally owned and operated company, we have a deep understanding
          of the unique challenges and opportunities in the Nigerian market. We
          leverage this knowledge to provide innovative financial products and
          services that cater to the diverse needs of individuals, businesses,
          and organizations across the country.
          <br />
          <br />
          With a strong focus on customer satisfaction, we prioritize building
          long-lasting relationships with our clients. Whether you are a
          first-time customer or a seasoned investor, we are committed to
          offering personalized attention and guidance to help you make informed
          financial decisions.
        </p>
      </div>
      <div className="right">
        <img src={maleEmployeeFemales} alt="maleEmployeeFemales" />
      </div>
    </div>
  );
};

export default SectionTwo;
