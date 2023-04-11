import React from "react";
import "./styles/App.css";
import "./styles/Hero.css";
import background from "./images/background.jpg";

function Hero(props) {
  let content = {
    English: {
      title: "Frontend Developer",
      subtitle: "Recent Projects",
    },
    Español: {
      title: "Desarrolladora Frontend",
      subtitle: "Proyectos Recientes",
    },
  };
  props.language === "Español"
    ? (content = content.Español)
    : (content = content.English);

  return (
    <div className="head-text" id="hero">
      <div className="head-image position-relative">
        <img
          src={background}
          className="img-fluid hero-background"
          alt="ocean background"
        ></img>
      </div>
      <div className="text-on-image text-center">
        <h1>Rachel Blackie</h1>
        <h3>{content.title}</h3>
        <div className="recent-projects mt-6">
          <hr />
          <h4>{content.subtitle}</h4>

          <div className="text-center projects-arrow">
            <a href="#recent-projects">
              <i className="fa-solid fa-circle-chevron-down"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
