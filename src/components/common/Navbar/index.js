import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Email from "./icons/email";
import Eco from "./icons/eco";
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
          <Link to="/" className="nav-link">
            <span className="link-text">Souhaib</span>
            <Logo className="icon logo-icon" />
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link">
            <Home className="icon" />
            <span className="link-text">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <Info className="icon" />
            <span className="link-text">About</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">
            <Build className="icon" />
            <span className="link-text">Projects</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/hire" className="nav-link">
            <Eco className="icon" />
            <span className="link-text">Hire Me</span>
          </Link>
        </li>
        <li className="nav-item" id="social">
          <SocialMedia />
        </li>

        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            <Email className="icon" />
            <span className="link-text">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
