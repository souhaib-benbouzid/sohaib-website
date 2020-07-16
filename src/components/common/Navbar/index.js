import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import Email from "./icons/email";
// import Eco from "./icons/eco";
import Info from "./icons/info";
import Build from "./icons/build";
import Home from "./icons/home";
import Logo from "./icons/face";
import SocialMedia from "./socialmedia/SocialMedia";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <NavLink to="/" className="nav-link">
            <span className="link-text">Souhaib</span>
            <Logo className="icon logo-icon" />
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/" className="nav-link" exact activeClassName="selected">
            <Home className="icon" />
            <span className="link-text">Home</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className="nav-link"
            exact
            activeClassName="selected"
          >
            <Info className="icon" />
            <span className="link-text">About</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/projects"
            className="nav-link"
            exact
            activeClassName="selected"
          >
            <Build className="icon" />
            <span className="link-text">Projects</span>
          </NavLink>
        </li>

        {/* <li className="nav-item">
          <NavLink
            to="/hire"
            className="nav-link"
            exact
            activeClassName="selected"
          >
            <Eco className="icon" />
            <span className="link-text">Hire Me</span>
          </NavLink>
        </li> */}

        <li className="nav-item">
          <NavLink
            to="/contact"
            className="nav-link"
            exact
            activeClassName="selected"
          >
            <Email className="icon" />
            <span className="link-text">Contact</span>
          </NavLink>
        </li>

        <li className="nav-item" id="social">
          <SocialMedia />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
