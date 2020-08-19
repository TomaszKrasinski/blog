import React from "react";
import "./style.css";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="headerMenu">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};
export default Header;
