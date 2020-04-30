import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import File from "./svg/file";
import Proud from "./svg/proud";

const links = {
  resume:
    "https://drive.google.com/file/d/1_z62BvtU99Jan1nmmUBA9m1iS5A1rrLR/view",
};

const Home = () => {
  return (
    <main>
      <div className="top">
        <a href={links.resume} className="resume">
          <File className="file-icon" />
          <span>Resume</span>
        </a>
      </div>
      <div className="main">
        <h1>
          Hi, <br />
          I'm <span>Sohaib</span>,<br /> web developer.
        </h1>
        <h2>
          Fullstack Web Developer / Designer /
          <br /> Computer Engineer
        </h2>
        <Link to="/contact" className="btn btn-primary">
          CONTACT ME
        </Link>
      </div>
      <Proud className="proud" />
    </main>
  );
};

export default Home;
