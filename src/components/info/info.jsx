import React from "react";
import "./info.css";
import siar_img from "../../assets/images/siar_img.jpg";
import About from "../About/About";
import Interests from "../Interests/Interest";
import Footer from "../Footer/Footer";

import { MdEmail } from "react-icons/md";

function info() {
  return (
    <div className="info__wrapper">
      <img className="info__img" src={siar_img} />

      <div className="info__container">
        <h2 className="info__name">Siar Wahidi</h2>
        <h6 className="info__title">Full Stack Developer</h6>
        <a className="info__site" href="https://siar-wahidi.netlify.app/">
          siarwahidi.portfolio
        </a>
        <button
          onClick={() => (window.location = "mailto:siar.wahidi@gmail.com")}
          className="info__btn"
        >
          <MdEmail class="info__email" />
          Email
        </button>
      </div>

      <About className="about__section" />
      <Interests className="interests__section" />

      <Footer />
    </div>
  );
}

export default info;
