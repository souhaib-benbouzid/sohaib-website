import React from "react";
import Facebook from "../icons/socialmedia/facebook";
import Youtube from "../icons/socialmedia/youtube";
import Linkedin from "../icons/socialmedia/linkedin";
import Github from "../icons/socialmedia/github";

const links = {
  facebook: "https://www.facebook.com/souhaibbenbouzid",
  youtube:
    "https://www.youtube.com/channel/UCqWze7IcHI-_2mvByYeGTJg?view_as=subscriber",
  linkedin: "https://www.linkedin.com/in/souhaib-benbouzid/",
  github: "https://github.com/Souhaib-Benbouzid",
};

const SocialMedia = () => {
  return (
    <>
      <a href={links.facebook} className="nav-link">
        <Facebook className="i-media" />
        <span className="link-text">chat</span>
      </a>
      <a href={links.youtube} className="nav-link">
        <Youtube className="i-media" />
        <span className="link-text">channel</span>
      </a>
      <a href={links.linkedin} className="nav-link">
        <Linkedin className="i-media" />
        <span className="link-text">resume</span>
      </a>
      <a href={links.github} className="nav-link">
        <Github className="i-media" />
        <span className="link-text">code</span>
      </a>
    </>
  );
};

export default SocialMedia;
