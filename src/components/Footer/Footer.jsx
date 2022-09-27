import React from "react";
import "./Footer.css";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer__icon__container">
      <div>
        <a href="https://github.com/Siar416">
          <GoMarkGithub class="footer__icon" />{" "}
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/siarwahidi/">
          <AiFillLinkedin class="footer__icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
