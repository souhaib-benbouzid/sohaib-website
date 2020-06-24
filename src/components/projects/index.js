import React from "react";
import "./style.scss";
import { data } from "../../api/projects";
import Card from "../common/Card";
console.log(data);

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <h1>Portfolio Projects</h1>
        <div className="projects-grid">
          {data.map((test, i) => {
            return <Card project={test} key={i} />;
          })}
        </div>
        <p className="pagination">next 1 2 3 prev</p>
      </div>
    </div>
  );
};

export default Projects;
