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
                const { heading, item, image } = i;

                return (
                  <div className="item">
                    <div className="heading">
                      <img src={image} alt={heading} />
                      <h2>{heading}</h2>
                    </div>
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
