import React from "react";

const ServiceRight = ({ heading, text, img }) => {
  return (
    <div className="item right-item">
      <div className="right">
        <img src={img} alt={text} />
      </div>
      <div className="left">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceRight;
