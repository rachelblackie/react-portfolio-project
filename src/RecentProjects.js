import React from "react";
import WeatherAppScreenshot from "./WeatherAppScreenshot.png";
import shecodesChallenges from "./shecodesChallenges.PNG";

export default function RecentProjects() {
  return (
    <div className="recent-projects">
      <div className="row m-5">
        <div className="col-lg">
          <img
            src={WeatherAppScreenshot}
            alt="weather app with 5-day forecast"
            className="img-fluid"
          ></img>
        </div>
        <div className="col-lg">
          <h2>React Weather App</h2>
          <p>
            This weather application was my final project in SheCodes Pro. I
            used the SheCodes Weather API to display the current weather
            conditions and a 5-day forecast.
          </p>
          <div className="tech-icons row">
            <div className="col text-center">
              <i class="fa-brands fa-html5"></i>
              <p>HTML</p>
            </div>
            <div className="col text-center">
              <i class="fa-brands fa-css3-alt"></i>
              <p>CSS</p>
            </div>
            <div className="col text-center">
              <i class="fa-brands fa-square-js"></i>
              <p>JavaScript</p>
            </div>
            <div className="col text-center">
              <i class="fa-brands fa-react"></i>
              <p>React</p>
            </div>
            <div className="col text-center">
              <i class="fa-brands fa-bootstrap"></i>
              <p>Bootstrap</p>
            </div>
          </div>
          <a
            href="https://rachelreactweather.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark text-center"
          >
            Open React Weather App
          </a>
        </div>
      </div>
      <hr className="small-divider" />
      <div className="row m-5">
        <div className="col-lg">
          <img
            src={shecodesChallenges}
            alt="Past SheCodes Challenges Screenshot"
            className="img-fluid border rounded"
          ></img>
        </div>
        <div className="col-lg">
          <h2>SheCodes Challenges</h2>
          <p>
            SheCodes Challenges are monthly coding contests launched by SheCodes
            in which participants create a landing page on a given topic. Click
            the button below to see what I've created for SheCodes Challenges so
            far.
          </p>
          <div className="tech-icons row">
            <div class="col text-center">
              <i class="fa-brands fa-html5"></i>
              <p>HTML</p>
            </div>
            <div className="col text-center">
              <i class="fa-brands fa-css3-alt"></i>
              <p>CSS</p>
            </div>
            <div className="col text-center">
              <i class="fa-brands fa-square-js"></i>
              <p>JavaScript</p>
            </div>
            <div className="col text-center">
              <i class="fa-brands fa-bootstrap"></i>
              <p>Bootstrap</p>
            </div>
          </div>
          <a
            href="https://rachelsshecodeschallenges.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            Open Rachel's SheCodes Challenges
          </a>
        </div>
      </div>
    </div>
  );
}
