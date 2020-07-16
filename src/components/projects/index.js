import React from "react";
import "./style.scss";
import { data } from "../../api/projects";
import Card from "./Card";

import Button from "../common/IconButton";

import { useState } from "react";

const Projects = () => {
  const initialState = [];
  const [projects, setprojects] = useState(initialState);

  const handlSubmit = async (e) => {
    e.preventDefault();
    alert("submited");
  };

  return (
    <div className="projects">
      <div className="container">
        <h1>Portfolio Projects</h1>
        <div className="projects-grid">
          {data.projects.map((test, i) => {
            return <Card project={test} key={i} />;
          })}
        </div>
        <div className="pagination">
          {projects.length > 0 && (
            <Button
              onClick={handlSubmit}
              type="submit"
              secondary="1"
              content="prev"
            >
              Prev
            </Button>
          )}
          {projects.length > 0 && (
            <Button onClick={handlSubmit} type="submit" content="Next">
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
