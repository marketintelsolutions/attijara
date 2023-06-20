import React from "react";
import email from "../assets/logos/email.svg";
import location from "../assets/logos/location.svg";
import facebook from "../assets/logos/facebook.svg";
import twitter from "../assets/logos/twitter.svg";
import pinterest from "../assets/logos/pinterest.svg";
import instagram from "../assets/logos/instagram.svg";

const Prenav = () => {
  return (
    <div className="prenav">
      <div className="content">
        <div className="left">
          <div className="item">
            <img src={email} alt="email" />
            <p>contact@domain.com</p>
          </div>
          <div className="item">
            <img src={location} alt="location" />
            <p>
              Suite C2 Wing C Plot 72, Ahmadu Bello Way, Abuja, FCT, Nigeria
            </p>
          </div>
        </div>
        <div className="right">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={pinterest} alt="pinterest" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </div>
  );
};

export default Prenav;
