import React from "react";
import "./style.scss";
import logo from "../assets/logo.png";

const Header = props => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
