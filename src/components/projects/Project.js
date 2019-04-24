import React from "react";
import "./Projects.css";
import "./Projects.css";

const Project = props => {
  return (
    <div>
      <div className="project-tile">
        <h3 className="project-title subtitle is-center">
          {props.projectName}
        </h3>
        <a href={props.link} target="_blank">
          <img className="project-tile-img" src={props.src} alt={props.alt} />
        </a>
      </div>
    </div>
  );
};

export default Project;
