import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/logo.svg";
import phone from "../assets/logos/phone.svg";
import menu from "../assets/logos/menu.svg";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [path, setPath] = useState("");
  const [menuActive, setMenuActive] = useState(true);

  useEffect(() => {
    // console.log(location.pathname);
    setPath(location.pathname);
  }, [location]);

  return (
    <nav className="navbar">
      <div className={menuActive ? "nav-center menu-active" : "nav-center"}>
        <Link to="/" className="left">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <h1>Attijara Finance</h1>
        </Link>
        <div className="right">
          <Link
            to="/"
            className={`${path === "/" ? "item active" : "item"}`}
            onClick={() => setMenuActive(false)}
          >
            <p>Home</p>
          </Link>
          <Link
            to="/about"
            className={`${path === "/about" ? "item active" : "item"}`}
            onClick={() => setMenuActive(false)}
          >
            <p>About Us</p>
          </Link>
          <Link
            to="services"
            className={`${path === "/services" ? "item active" : "item"}`}
            onClick={() => setMenuActive(false)}
          >
            <p>Services</p>
          </Link>
          <Link
            to="/contact"
            className={`${path === "/contact" ? "item active" : "item"}`}
            onClick={() => setMenuActive(false)}
          >
            <p>Contact</p>
          </Link>
          <div className="item phone">
            <img src={phone} alt="phone" />
            <div className="text">
              {/* <p>Call Us Now</p> */}
              <h3>+2348036412211</h3>
              <h3>+2348074698948 </h3>
            </div>
          </div>
        </div>
        <div className="menu" onClick={() => setMenuActive(!menuActive)}>
          <img src={menu} alt="menu" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
