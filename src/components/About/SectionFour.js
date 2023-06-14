import React from "react";
import { team } from "../../utils/data";

const SectionFour = () => {
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
              <div className="item">
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
    </div>
  );
};

export default SectionFour;
