import React from "react";
import WeatherAppScreenshot from "./images/WeatherAppScreenshot.png";
import shecodesChallenges from "./images/shecodesChallenges.PNG";

function RecentProjects(props) {
  let content = {
    English: {
      reactWeatherTitle: "React Weather App",
      reactWeatherBlurb:
        "This weather application was my final project in SheCodes Pro. I used the SheCodes Weather API to display the current weather conditions and a 5-day forecast.",
      reactWeatherButton: "Open React Weather App",
      shecodesChallengesTitle: "SheCodes Challenges",
      shecodesChallengesBlurb:
        "SheCodes Challenges are monthly coding contests launched by SheCodes in which participants create a landing page on a given topic. Click the button below to see what I've created for SheCodes Challenges so far.",
      shecodesChallengesButton: "Open Rachel's SheCodes Challenges",
    },
    Español: {
      reactWeatherTitle: "Aplicación Meteorológica React",
      reactWeatherBlurb:
        "Esta aplicación meteorológica fue mi proyecto final en SheCodes Pro. Usé la API meteorológica de SheCodes para mostrar las condiciones meteorológicas actuales y un pronóstico de 5 días.",
      reactWeatherButton: "Abrir Aplicación Meteorológica React",
      shecodesChallengesTitle: "Retos de SheCodes",
      shecodesChallengesBlurb:
        "Los Retos de SheCodes son concursos de codificación mensuales lanzados por SheCodes en los que los participantes crean una página web sobre un tema determinado. Haga clic en el botón de abajo para ver lo que he creado para SheCodes Challenges hasta ahora.",
      shecodesChallengesButton: "Abrir los Retos de SheCodes de Rachel",
    },
  };
  props.language === "Español"
    ? (content = content.Español)
    : (content = content.English);
  return (
    <div className="recent-projects" id="recent-projects">
      <div className="row m-5">
        <div className="col-lg">
          <img
            src={WeatherAppScreenshot}
            alt="weather app with 5-day forecast"
            className="img-fluid"
          ></img>
        </div>
        <div className="col-lg">
          <h2>{content.reactWeatherTitle}</h2>
          <p>{content.reactWeatherBlurb}</p>
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
            {content.reactWeatherButton}
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
          <h2>{content.shecodesChallengesTitle}</h2>
          <p>{content.shecodesChallengesBlurb}</p>
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
            {content.shecodesChallengesButton}
          </a>
        </div>
      </div>
    </div>
  );
}
export default RecentProjects;
