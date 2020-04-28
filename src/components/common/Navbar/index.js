import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../static/png/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="souhaib benbouzid logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/Contact">Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
