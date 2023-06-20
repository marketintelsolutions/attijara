import React from "react";
import logoTransparent from "../assets/logos/logoTransparent.svg";
import locationGrey from "../assets/logos/locationGrey.svg";
import emailGrey from "../assets/logos/emailGrey.svg";
import phoneGrey from "../assets/logos/phone.svg";
import arrowGreen from "../assets/logos/arrowGreen.svg";
import instagramBlack from "../assets/logos/instagramBlack.svg";
import twitterBlack from "../assets/logos/twitterBlack.svg";
import facebookBlack from "../assets/logos/facebookBlack.svg";
import pinterestBlack from "../assets/logos/pinterestBlack.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="item logo">
          <img src={logoTransparent} alt="logoTransparent" />
        </div>
        <div className="item contact">
          <h2>Contact Us</h2>
          <div className="contact-item">
            <img src={locationGrey} alt="locationGrey" />
            <p>3138 Single Lagbaja Street, Lagos Nigeria</p>
          </div>
          <div className="contact-item">
            <img src={emailGrey} alt="emailGrey" />
            <p>contact@domain.com</p>
          </div>
          <div className="contact-item">
            <img src={phoneGrey} alt="phoneGrey" />
            <p>
              08036412211,
              <br /> 07032259444,
              <br /> 08074698948{" "}
            </p>
          </div>
        </div>
        <div className="item links">
          <h2>quick links</h2>
          <p className="links-item">about us</p>
          <p className="links-item">services</p>
          <p className="links-item">contact</p>
        </div>
        <div className="item touch">
          <h2>stay in touch</h2>
          <div className="input">
            <input placeholder="Enter Email Address" type="email" />
            <button>
              <img src={arrowGreen} alt="arrowGreen" />
            </button>
          </div>
          <p>follow</p>
          <div className="socials">
            <div className="social-item">
              <img src={instagramBlack} alt="instagramBlack" />
            </div>
            <div className="social-item">
              <img src={twitterBlack} alt="twitterBlack" />
            </div>
            <div className="social-item">
              <img src={facebookBlack} alt="facebookBlack" />
            </div>
            <div className="social-item">
              <img src={pinterestBlack} alt="pinterestBlack" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
