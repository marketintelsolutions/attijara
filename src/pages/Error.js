import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/images/error.jpg";

const Error = () => {
  return (
    <div className="error">
      <div className="center">
        <Link to="/">BACK HOME</Link>
        <img src={error} alt="error" />
      </div>
    </div>
  );
};

export default Error;
