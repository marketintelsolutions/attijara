import React from "react";

const MissionRight = ({ heading, text, image }) => {
  return (
    <div className="right-item item">
      <div className="right">
        <img src={image} alt={image} />
      </div>
      <div className="left">
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default MissionRight;
