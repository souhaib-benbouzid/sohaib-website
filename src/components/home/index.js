import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import File from "./svg/file";
import Proud from "./svg/proud";

const links = {
  resume:
    "https://drive.google.com/file/d/1DFM3inv01hLhi5xikmJ1oUFBFtm792b-/view?usp=sharing",
};

const Home = () => {
  return (
    <main>
      <div className="top">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={links.resume}
          className="resume"
        >
          <File className="file-icon" />
          <span>Resume</span>
        </a>
      </div>
      <div className="main">
        <h1>
          Hi, <br />
          I'm <span>Sohaib</span>,<br /> Web Developer.
        </h1>
        <h2>
          Fullstack Web Typescript / Python Developer
          <br />
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
