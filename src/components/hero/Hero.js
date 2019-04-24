import React from "react";
import "./Hero.css";
import "../Animations.css";
import IconSocial from "../icons/IconSocial";

const Hero = () => {
  return (
    <div>
      <section id="welcome-section">
        <div id="particles-js" />
        <h1 className="title">Hey I am Ejaz</h1>
        <h3 className="subtitle">A web developer</h3>
        <IconSocial />
      </section>
    </div>
  );
};

export default Hero;
