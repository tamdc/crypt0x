import React from "react";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo--wrapper">
        <img src={logo} alt="logo" className="logo" height="60" />
      </div>
      <nav className="navbar--wrapper">
        <Link to="/products">Sản phẩm</Link>
        <Link to="/cex">CEXs</Link>
        <Link to="/hacker-news">Hacker News</Link>
      </nav>
    </div>
  );
};

export default Header;
