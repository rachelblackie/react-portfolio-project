import React from "react";
import "./App.css";

export default function Hero() {
  return (
    <div>
      <h1 className="text-center my-auto">Rachel Blackie</h1>
      <h3 className="text-center my-auto">Frontend Developer</h3>
      <h4 className="text-center my-auto">Recent Projects</h4>
      <div className="text-center">
        <a href="#recent-projects">
          <i className="fa-solid fa-circle-chevron-down"></i>
        </a>
      </div>
    </div>
  );
}
