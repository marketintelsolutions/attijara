import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/logo.svg";
import phone from "../assets/logos/phone.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="left">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <h1>Attijara Finance</h1>
        </div>
        <div className="right">
          <Link to="/" className="item active">
            <p>Home</p>
          </Link>
          <Link to="/about" className="item">
            <p>About Us</p>
          </Link>
          <Link to="services" className="item">
            <p>Services</p>
          </Link>
          <Link to="/contact" className="item">
            <p>Contact</p>
          </Link>
          <div className="item phone">
            <img src={phone} alt="phone" />
            <div className="text">
              <p>Call Us Now</p>
              <h3>080 3641 2211</h3>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
