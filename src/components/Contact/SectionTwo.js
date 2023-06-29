import React from "react";
import locationBig from "../../assets/logos/locationBig.svg";
import phoneBig from "../../assets/logos/phoneBig.svg";
import mailBig from "../../assets/logos/mailBig.svg";
import linkedinBig from "../../assets/logos/linkedinBig.svg";
import instaBig from "../../assets/logos/instaBig.svg";
import facebookBig from "../../assets/logos/facebookBig.svg";
import twitterBig from "../../assets/logos/twitterBig.svg";

const SectionTwo = () => {
  return (
    <div className="contact-section-two">
      <div className="content">
        <h1 className="heading">Get in Touch</h1>
        <p className="top-text">
          Do you want to make an enquiry, a complaint or do you just want to
          know more about us? Then you’re on the right page. Send us a message
          right here or contact us on any of the channels listed below
        </p>
        <div className="form-container">
          <form className="form">
            <h1>Send Us A Message</h1>
            <div className="form-item">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div className="form-item">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
            </div>
            <div className="form-item">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" />
            </div>
            <div className="form-item">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <div className="button form-item">
              <button type="button">submit</button>
            </div>
          </form>
          <div className="info">
            <h1>Contact Info</h1>
            <div className="details">
              <div className="detail-item">
                <img src={locationBig} alt="locationBig" />
                <div className="text">
                  <p>Our Location </p>
                  <p>
                    Suite C2 Wing C Plot 72, Ahmadu Bello Way, Abuja, FCT,
                    Nigeria
                  </p>
                </div>
              </div>
              <div className="detail-item">
                <img src={phoneBig} alt="phoneBig" />
                <div className="text">
                  <p>Call Us</p>
                  <p>+234 (1) 271 8630</p>
                </div>
              </div>
              <div className="detail-item">
                <img src={mailBig} alt="mailBig" />
                <div className="text">
                  <p>Our Email</p>
                  <p>info@attijara.com</p>
                </div>
              </div>
            </div>
            <h2>follow us</h2>
            <div className="socials">
              <div className="social-item">
                <img src={linkedinBig} alt="linkedinBig" />
              </div>
              <div className="social-item">
                <img src={instaBig} alt="instaBig" />
              </div>
              <div className="social-item">
                <img src={facebookBig} alt="facebookBig" />
              </div>
              <div className="social-item">
                <img src={twitterBig} alt="twitterBig" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
