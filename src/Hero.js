import React from "react";
import "./App.css";
import "./Hero.css";
import background from "./background.jpg";

export default function Hero() {
  return (
    <div className="head-text text-center">
      <div className="head-image position-relative">
        <img
          src={background}
          className="img-fluid"
          alt="ocean background"
        ></img>
      </div>
      <div className="text-on-image text-center">
        <h1>Rachel Blackie</h1>
        <h3>Frontend Developer</h3>
        <div className="recent-projects mt-6">
          <h4>Recent Projects</h4>
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
