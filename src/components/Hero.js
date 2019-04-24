import React from "react";
import "./Hero.css";
import "./Animations.css";

const Hero = () => {
  return (
    <div>
      <section id="welcome-section">
        <div id="particles-js" />
        <h1 class="title">Hey I am Ejaz</h1>
        <h3 class="subtitle">A web developer</h3>
        <div class="icons-social">
          <a
            target="_blank"
            id="profile-link"
            href="https://github.com/ejazahm3d"
          >
            <i class="fab fa-github icon-color" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/ejazahm3d/">
            <i class="fab fa-linkedin icon-color" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
