import React from "react";
import WeatherAppScreenshot from "./WeatherAppScreenshot.png";
import dolly from "./dolly.PNG";
import Trixie from "./Trixie.PNG";

export default function RecentProjects() {
  return (
    <div className="recent-projects">
      <div className="row">
        <div className="col-6">
          <img
            src={WeatherAppScreenshot}
            alt="weather app with 5-day forecast"
            className="img-fluid"
          ></img>
        </div>
        <div className="col-6">
          <h2>React Weather App</h2>
          <p>ajehruaiwblveawucuwa</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            src={Trixie}
            alt="weather app with 5-day forecast"
            className="img-fluid"
          ></img>
          <img
            src={dolly}
            alt="weather app with 5-day forecast"
            className="img-fluid"
          ></img>
        </div>
        <div className="col-6">
          <h2>SheCodes Challenges</h2>
          <p>srhsbevrauw</p>
        </div>
      </div>
    </div>
  );
}
