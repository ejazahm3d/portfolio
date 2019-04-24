import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <header>
        <nav id="navbar">
          <div className="navbar-brand">
            <h2 className="navbar-item">Ejaz Ahmed</h2>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <a href="#home" className="navbar-item">
                Home
              </a>
              <a href="#projects" className="navbar-item">
                Projects
              </a>
              <a href="#contact-me" className="navbar-item">
                Contact Me
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
