import React from "react";
import shecodesLogo from "./shecodesLogo.png";
import onestopLogo from "./onestopLogo.PNG";
import efLogo from "./efLogo.png";
import "./App.css";
import "./Cv.css";

export default function Cv() {
  return (
    <div>
      <hr />
      <h1 className="text-center">Curriculum Vitae</h1>
      <div className="row m-5">
        {" "}
        <div className="col-4-lg text-center my-auto">
          <img
            src={shecodesLogo}
            alt="SheCodes Logo"
            className="img-fluid cv-image rounded"
          ></img>
        </div>
        <div className="col-8-lg my-auto">
          <h3>
            <strong>Student</strong> @ SheCodes
          </h3>
          <h4>Remote</h4>
          <h4>2022-2023</h4>
          <ul>
            <li>
              Learned to code using HTML, CSS, Javascript, VS Code, GitHub,
              Bootstrap, APIs, & React
            </li>
            <li>Created web pages & applications</li>
          </ul>
        </div>
      </div>
      <hr className="small-divider" />
      <div className="row m-5">
        {" "}
        <div className="col-4-lg text-center my-auto">
          <img
            src={onestopLogo}
            alt="Onestop Logo"
            className="img-fluid cv-image rounded"
          ></img>
        </div>
        <div className="col-8-lg my-auto">
          <h3>
            <strong>Teacher</strong> @ 1-StopEDU
          </h3>
          <h4>Remote</h4>
          <h4>2020-2021</h4>
          <ul>
            <li>
              Taught one-on-one EAL lessons for children & adults via Skype
            </li>
            <li>Used CMS to track student progress</li>
          </ul>
        </div>
      </div>
      <hr className="small-divider" />
      <div className="row m-5">
        {" "}
        <div className="col-4-lg text-center my-auto">
          <img
            src={efLogo}
            alt="EF logo"
            className="img-fluid cv-image rounded"
          ></img>
        </div>
        <div className="col-8-lg my-auto">
          <h3>
            <strong>Teacher & Academic Manager</strong> @ EF International
            Language Campus
          </h3>
          <h4>Victoria, BC, Canada</h4>
          <h4>2018-2019</h4>
          <ul>
            <li>Taught EAL to adult & teenage students</li>
            <li>Assisted in the training & management of the academic team</li>
            <li>
              Used CMS to track student progress & SharePoint for staff
              resources
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h4 className="text-center m-5">
          See more on{" "}
          <a
            href="https://www.linkedin.com/in/rachel-blackie-273b18127/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>LinkedIn</strong>
          </a>
        </h4>
      </div>
    </div>
  );
}
