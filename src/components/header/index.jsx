import "./index.scss";
import React from "react";
import { ReactComponent as Logo } from "./../../logo.svg";

const Header = (props) => {
  return (
    <header className="header container">
      <a href="#" className="header__link">
        <Logo className="header__logo" />
      </a>
    </header>
  );
};

export default Header;
