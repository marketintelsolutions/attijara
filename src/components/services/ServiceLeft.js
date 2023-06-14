import React from "react";

const ServiceLeft = ({ heading, text, img }) => {
  return (
    <div className="item left-item">
      <div className="left">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="right">
        <img src={img} alt={text} />
      </div>
    </div>
  );
};

export default ServiceLeft;
