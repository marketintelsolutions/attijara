import React, { useState } from "react";
import { team } from "../../utils/data";
import close from "../../assets/logos/close.svg";

const SectionFour = () => {
  const [content, setContent] = useState({});
  const [isContent, setIsContent] = useState(false);

  const handleClick = (e) => {
    // console.log(e.target.classList.contains("details"));
    if (e.target.classList.contains("details")) setIsContent(false);
  };

  return (
    <div className="about-section-four">
      <div className="content">
        <h1>Our Team</h1>
        <h2>Board Members</h2>
        <p>
          At Attijara Finance & Investment Company Limited, our success is
          driven by the expertise, dedication, and passion of our exceptional
          team. We have assembled a group of talented professionals who are
          committed to delivering top-notch financial services and solutions to
          our valued clients. With diverse backgrounds and a deep understanding
          of the financial industry, our team is united by a shared goal: to
          help you achieve financial success. Each member brings a unique set of
          skills, knowledge, and perspectives, enabling us to provide
          comprehensive and tailored solutions to meet your specific needs.
          <br />
          <br />
          We take pride in our team's professionalism, integrity, and commitment
          to excellence.
        </p>
        <div className="members">
          {team.map((member) => {
            const { image, text } = member;

            return (
              <div
                className="item"
                onClick={() => {
                  setIsContent(true);
                  setContent(member);
                }}
              >
                <div className="image">
                  <img src={image} alt={text} />
                </div>
                <div className="text">
                  <h3>{text}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {isContent && (
        <div className="details" onClick={(e) => handleClick(e)}>
          <div className="center">
            <div className="close" onClick={() => setIsContent(false)}>
              <img src={close} alt="close" />
            </div>
            <h4>{content.text}</h4>
            <p>{content.details}</p>
            {/* <p>hello</p> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionFour;
