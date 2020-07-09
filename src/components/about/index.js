import React from "react";
import "./style.scss";
import Photo from "./animation";

const About = () => {
  return (
    <section className="about">
      <div className="text">
        <div className="top">
          <h1>About me</h1>
          <p id="start">
            I'm a self-taught passionate developer, a creative person, and a
            hard worker. always learning, discovering, and trying new things.
            Passionate about web development specifically and interested in the
            entire spectrum of software development. in my journey, I had the
            chance to work with many Web Technologies, React, Redux , Node,
            Flask, Django & Firebase to name a few.
          </p>
          <p>
            Looking for opportunities and ambitious projects with positive
            people.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline__element">
            <h1 className="timeline_title">Experience</h1>
          </div>
          <div className="timeline__element">
            <span>JAN 2020 - Present</span>
            <h1>Freelance, ​Upwork—Frontend Web Developer</h1>
          </div>
          <div className="timeline__element">
            <span>October 2019 </span>
            <h1>SoftwareMonks ​— ​FullStack Web Developer</h1>
            <h2>Founder of the Software development team SoftwareMonks</h2>
          </div>
          <div className="timeline__element">
            <h1 className="timeline_title">Certificates & Achievements</h1>
          </div>
          <div className="timeline__element">
            <span>JAN 2020- April 2020</span>
            <h1>Udacity ​—​Full Stack Web Developer ​Nanodegree</h1>
            <h2>One million arab scholarship</h2>
          </div>
        </div>
      </div>

      <div className="animation">
        <Photo className="person" />
      </div>
    </section>
  );
};

export default About;
