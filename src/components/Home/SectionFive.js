import React from "react";
import { missionStatements } from "../../utils/data";
import MissionLeft from "../MissionLeft";
import MissionRight from "../MissionRight";
import arrowBig from "../../assets/images/arrowBig.png";

const SectionFive = () => {
  return (
    <div className="section-five">
      <div className="center">
        <div className="content">
          {missionStatements.map((item, index) => {
            if (index % 2 !== 0) {
              return <MissionRight {...item} />;
            }
            return <MissionLeft {...item} />;
          })}
        </div>
        <p className="bottom-text">
          By embodying these principles, we aspire to be the financial partner
          of choice for individuals and businesses in Nigeria. Through our
          unwavering commitment to excellence, integrity, and customer
          satisfaction, we aim to play a significant role in shaping a
          financially secure and prosperous nation.
        </p>

        <div className="vision">
          <img src={arrowBig} alt="arrowBig" />
          <div className="vision-right">
            <h2>Our Vision:</h2>
            <p>
              At Attijara Finance & Investment Company Limited, our vision is to
              be the leading and most trusted financial institution in Nigeria,
              recognized for our exceptional customer service, innovative
              solutions, and unwavering commitment to financial empowerment. We
              strive to create a future where every individual and business in
              Nigeria has access to the tools, knowledge, and support they need
              to achieve their financial aspirations. Through our vision, we aim
              to be a catalyst for positive change, contributing to the economic
              growth and prosperity of Nigeria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
