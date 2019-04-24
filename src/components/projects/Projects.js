import React from "react";
import "./Projects.css";
import Project from "./Project";
import "./Projects.css";
import portfolio from "./images/portfolio.png";
import landingPage from "./images/landing-page.png";
import docs from "./images/docs.png";
import surveyForm from "./images/survey-form.png";
import "../utilities.css";

const Projects = () => {
  return (
    <div id="projects" className="container mt-5 mb-5">
      <h2 className="title is-center">Projects</h2>
      <div className="projects-grid">
        <Project
          projectName={"My Portfolio"}
          link={"https://github.com/ejazahm3d/portfolio-fcc"}
          src={landingPage}
          alt={"my portfolio"}
        />
        <Project
          projectName={"Landing Page"}
          link={"https://github.com/ejazahm3d/landing-page-workoutlog"}
          src={portfolio}
          alt={"landing page pic"}
        />
        <Project
          projectName={"JavaScript Docs"}
          link={"https://github.com/ejazahm3d/documentation-freecodecamp"}
          src={docs}
          alt={"docs"}
        />
        <Project
          projectName={"Survey Form"}
          link={"https://github.com/ejazahm3d/survey-form"}
          src={surveyForm}
          alt={"Survey form "}
        />
      </div>
    </div>
  );
};

export default Projects;
