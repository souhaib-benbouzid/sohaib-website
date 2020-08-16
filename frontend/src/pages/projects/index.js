import React from "react";
import "./style.scss";
import { data } from "../../api/projects";
import Card from "./Card";

import Button from "../../components/common/IconButton";

import { useState } from "react";

const Projects = () => {
  const initialState = [];
  const [projects, setprojects] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("submitted");
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
              onClick={handleSubmit}
              type="submit"
              secondary="1"
              content="prev"
            >
              Prev
            </Button>
          )}
          {projects.length > 0 && (
            <Button onClick={handleSubmit} type="submit" content="Next">
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
