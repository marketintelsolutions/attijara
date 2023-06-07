import React from "react";
import maleemployee from "../../assets/images/maleemployee.png";

const SectionTwo = () => {
  return (
    <div className="section-two">
      <div className="content">
        <p>
          Welcome to Attijara Finance & Investment Company Limited, your
          reliable partner in providing financial services in Nigeria. We
          provide a wide variety of financial options that are tailored to
          satisfy the requirements of both your company and your personal life.
          We can provide you with specialized banking services, investment
          options, as well as experienced financial guidance. If you are seeking
          for any of these things, you have come to the right place.
          <br />
          <br />
          We attempt to provide our customers with the means necessary to
          accomplish their financial objectives by demonstrating a dedication to
          excellence and possessing a profound familiarity with the Nigerian
          market. Explore our website to learn more about the services we
          provide, and get started on your path to achieving your financial
          goals right now.
        </p>
        <img src={maleemployee} alt="maleemployee" />
      </div>
    </div>
  );
};

export default SectionTwo;
