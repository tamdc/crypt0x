import React from "react";
import logo from "../assets/logo.webp";
import "../styles/header.css";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/authentication";

const Header = () => {
  const { token, logout, login } = useAuth();
  return (
    <div className="header">
      <div className="logo--wrapper">
        <img src={logo} alt="logo" className="logo" height="60" />
      </div>
      <nav className="navbar--wrapper">
        <Link to="/cex">CEXs</Link>
        <Link to="/hacker-news">Hacker News</Link>
        {token ? (
          <button type="button" onClick={logout}>
            Log out
          </button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
