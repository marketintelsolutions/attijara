import React from "react";

const MissionLeft = ({ heading, text, image }) => {
  return (
    <div className="left-item item">
      <div className="left">
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
      <div className="right">
        <img src={image} alt={image} />
      </div>
    </div>
  );
};

export default MissionLeft;
