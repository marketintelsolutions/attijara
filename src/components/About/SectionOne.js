import React from "react";
import businessArrow from "../../assets/images/businessArrow.png";
// import maleEmployeeFemales from "../../assets/images/maleEmployeeFemales.png";

const SectionOne = () => {
  return (
    <div className="about-section-one">
      <div className="content">
        <div
          className="left"
          //   style={{ backgroundImage: `url(${businessArrow})` }}
        >
          <div className="image">
            <img src={businessArrow} alt="businessArrow" />
          </div>
          <div className="white"></div>
          <div className="center">
            <div className="content-center">
              <h2>About Us</h2>
              <p>
                At Attijara Finance & Investment Company Limited, we believe
                that everyone deserves access to reliable financial services
                that can make a positive difference in their lives. With this
                philosophy at the heart of our operations, we have established
                ourselves as a leading financial service provider in Nigeria.
                Our team of experienced professionals is dedicated to delivering
                exceptional service and tailored solutions to our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
