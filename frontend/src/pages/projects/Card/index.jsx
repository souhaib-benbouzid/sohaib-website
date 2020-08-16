import React from "react";
import "./style.scss";
import Button from "../../../components/common/PrimaryButton";

export default function index({ project }) {
  const { name, description, stack, previewUrl, codeUrl, image } = project;

  return (
    <div className="card">
      <img className="image" alt="project " src={image}></img>
      <div className="content">
        <div className="top">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>

        <div className="bottom">
          <h2>Tech Stack</h2>
          <ul className="tech-list">
            {stack.map((tech, i) => {
              return (
                <li className="tech-item" key={i}>
                  {tech}
                </li>
              );
            })}
            .
          </ul>
        </div>
        <div className="buttons">
          <Button content="preview" url={previewUrl} />
          <Button secondary="1" content="code" url={codeUrl} />
        </div>
      </div>
    </div>
  );
}
