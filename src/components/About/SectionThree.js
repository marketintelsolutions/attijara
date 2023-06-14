import React, { useState } from "react";
import afroAmericans from "../../assets/images/afroAmericans.png";
import { coreValues } from "../../utils/data";

const SectionThree = () => {
  return (
    <div className="about-section-three">
      <div className="image">
        <img src={afroAmericans} alt="afroAmericans" />
      </div>

      <div className="core-values">
        <div className="center">
          <div className="content">
            <h1>Our Core values</h1>
            <div className="values">
              {coreValues.map((i) => {
                const { heading, item } = i;

                return (
                  <div className="item">
                    <h2>{heading}</h2>
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
