import React from "react";
import "./style.scss";
import logo from "../../assets/logo.png";

const Header = props => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="imgLogo" src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
