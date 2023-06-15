import React from "react";
import businessman from "../../assets/images/businessman.png";

const SectionOne = () => {
  return (
    <div
      className="services-section-one"
      style={{ backgroundImage: `url(${businessman})` }}
    >
      <div className="content">
        <h1>Contact Us</h1>
        <p>
          We value open communication and are always here to assist you. If you
          have any questions, concerns, or would like to learn more about our
          services, please feel free to contact us. Our friendly and
          knowledgeable customer service team is available to provide prompt
          assistance and address your inquiries.
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
