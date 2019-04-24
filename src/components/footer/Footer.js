import React from "react";
import "../Animations.css";
import "../icons/IconSocial.css";
import "./Footer.css";
import IconSocial from "../icons/IconSocial";

const Footer = () => {
  return (
    <div>
      <footer id="contact-me" className="colored-bg footer">
        <h2 id="title">Get in touch!</h2>
        <IconSocial />
      </footer>
    </div>
  );
};

export default Footer;
