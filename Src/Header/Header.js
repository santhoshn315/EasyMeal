import React, { useState } from "react";
import "./header.css";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [logIn, setLogin] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/about"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/about"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/about"
            >
              Cart
            </Link>
          </li>
          <button
            className="login-button"
            onClick={() => {
              logIn === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {logIn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
