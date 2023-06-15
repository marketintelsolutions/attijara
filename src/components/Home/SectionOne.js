import React, { useEffect, useState } from "react";
import darkwoman from "../../assets/images/darkwoman.png";
import businessWoman from "../../assets/images/businessWoman.png";
import workingWoman from "../../assets/images/workingWoman.png";
import rightArrow from "../../assets/logos/rightArrow.svg";
import leftArrow from "../../assets/logos/leftArrow.svg";

const SectionOne = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (current === 200) {
        setCurrent(0);
        return;
      }
      setCurrent(current + 100);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [current]);

  const handleClick = (mode) => {
    if (mode === "left") {
      if (current === 0) {
        setCurrent(200);
        return;
      }
      setCurrent(current - 100);
    }
    if (mode === "right") {
      if (current === 200) {
        setCurrent(0);
        return;
      }
      setCurrent(current + 100);
    }
  };
  return (
    <div className="section-container">
      <div className="right-arrow" onClick={() => handleClick("right")}>
        <img src={rightArrow} alt="rightArrow" />
      </div>
      <div className="left-arrow" onClick={() => handleClick("left")}>
        <img src={leftArrow} alt="leftArrow" />
      </div>
      <div
        className="section-content"
        style={{ transform: `translateX(-${current}%)` }}
      >
        <div
          className="section-one"
          style={{ backgroundImage: `url(${darkwoman})` }}
        >
          <div className="content">
            <h1>Nigeria’s best financial and investment company.</h1>
            <p>We help you save, invest and plan for generational wealth</p>
            <button>Learn More</button>
          </div>
        </div>
        <div
          className="section-one"
          style={{ backgroundImage: `url(${businessWoman})` }}
        >
          <div className="content">
            <h1>
              Investments are the bedrock upon which true wealth is built.
            </h1>
            <p>Invest the right way, invest with the right partner.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div
          className="section-one"
          style={{ backgroundImage: `url(${workingWoman})` }}
        >
          <div className="content">
            <h1>If you fail to plan, you plan to fail</h1>
            <p>We help you save, invest and plan for generational wealth</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
