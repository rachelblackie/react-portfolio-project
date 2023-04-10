import React from "react";
import "./App.css";
import "./Hero.css";
import background from "./background.jpg";

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
    <div className="head-text">
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
            <i className="fa-solid fa-circle-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
