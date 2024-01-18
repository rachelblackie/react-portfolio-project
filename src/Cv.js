import React from "react";
import shecodesLogo from "./images/shecodesLogo.png";
import onestopLogo from "./images/onestopLogo.PNG";
import efLogo from "./images/efLogo.png";
import endpointLogo from "./images/endpointLogo.png";
import "./styles/App.css";
import "./styles/Cv.css";

function Cv(props) {
  let content = {
    English: {
      endpointTitle:(
         <div>
          <strong>Frontend Dev Intern</strong> @ End Point Dev
        </div>
      ),
      
      endpointDescription: (
         <ul>
          <li>Completed company bootcamp training program
          </li>
          <li>Frontend development in React, HTML, CSS, and Javascript for client websites and applcations, as well as internal projects</li>
        </ul>
      ),
      shecodesTitle: (
        <div>
          <strong>Student</strong> @ SheCodes
        </div>
      ),
      shecodesLocation: "Remote",
      shecodesDescription: (
        <ul>
          <li>
            Learned to code using HTML, CSS, Javascript, VS Code, GitHub,
            Bootstrap, APIs, & React
          </li>
          <li>Created web pages & applications</li>
        </ul>
      ),
      onestopTitle: (
        <div>
          <strong>Teacher</strong> @ 1-StopEDU
        </div>
      ),
      onestopLocation: "Remote",
      onestopDescription: (
        <ul>
          <li>Taught one-on-one EAL lessons for children & adults via Skype</li>
          <li>Used CMS to track student progress</li>
        </ul>
      ),
      efTitle: (
        <div>
          <strong>Teacher & Academic Manager</strong> @ EF International
          Language Campus
        </div>
      ),
      efLocation: "Victoria, BC, Canada",
      efDescription: (
        <ul>
          <li>Taught EAL to adult & teenage students</li>
          <li>Assisted in the training & management of the academic team</li>
          <li>
            Used CMS to track student progress & SharePoint for staff resources
          </li>
        </ul>
      ),
      goToLinkedIn: "See more on ",
    },
    Español: {
        endpointTitle:(
         <div>
          <strong>Practicante de Desarrollo Frontend</strong> @ End Point Dev
        </div>
      ),
      
      endpointDescription: (
         <ul>
          <li>Completé el programa de formación bootcamp de la empresa.
          </li>
          <li>Desarrollo frontend en React, HTML, CSS y Javascript para sitios web y aplicaciones de clientes, así como proyectos internos.</li>
        </ul>
      ),
      
      shecodesTitle: (
        <div>
          <strong>Estudiante</strong> @ SheCodes
        </div>
      ),
      shecodesLocation: "Online",
      shecodesDescription: (
        <ul>
          <li>
            Aprendí a codificar usando HTML, CSS, Javascript, VS Code, GitHub,
            Bootstrap, APIs, & React
          </li>
          <li>Creé páginas & aplicaciones web</li>
        </ul>
      ),
      onestopTitle: (
        <div>
          <strong>Maestra</strong> @ 1-StopEDU
        </div>
      ),
      onestopLocation: "Online",
      onestopDescription: (
        <ul>
          <li>
            Enseñé lecciones de inglés particulares para niños y adultos a
            través de Skype
          </li>
          <li>Usé CMS para monitorear el progreso de los estudiantes</li>
        </ul>
      ),
      efTitle: (
        <div>
          <strong>Maestra y Coordinadora Academica</strong> @ EF International
          Language Campus
        </div>
      ),
      efLocation: "Victoria, CB, Canadá",
      efDescription: (
        <ul>
          <li>Enseñé inglés a estudiantes adultos y adolescentes.</li>
          <li>Ayudé en la formación y gestión del equipo académico.</li>
          <li>
            Usé CMS para monitorear el progreso de los estudiantes y SharePoint
            para los recursos del personal
          </li>
        </ul>
      ),
      goToLinkedIn: "Ver más en ",
    },
  };
  props.language === "Español"
    ? (content = content.Español)
    : (content = content.English);

  return (
    <div id="cv">
      <hr />
      <h1 className="text-center">Curriculum Vitae</h1>
      <div className="row m-5">
        {" "}
        <div className="col-lg-4 text-center my-auto">
          <img
            src={endpointLogo}
            alt="End Point Logo"
            className="img-fluid cv-image rounded"
          ></img>
        </div>
        <div className="col-lg-8 my-auto">
          <h3>{content.endpointTitle}</h3>
          <h4>{content.shecodesLocation}</h4>
          <h4>2023-Present</h4>
          <div>{content.endpointDescription}</div>
        </div>
      </div>
      <hr className="small-divider" />
      <div className="row m-5">
        {" "}
        <div className="col-lg-4 text-center my-auto">
          <img
            src={shecodesLogo}
            alt="SheCodes Logo"
            className="img-fluid cv-image rounded"
          ></img>
        </div>
        <div className="col-lg-8 my-auto">
          <h3>{content.shecodesTitle}</h3>
          <h4>{content.shecodesLocation}</h4>
          <h4>2022-2023</h4>
          <div>{content.shecodesDescription}</div>
        </div>
      </div>
      <hr className="small-divider" />
      <div className="row m-5">
        {" "}
        <div className="col-lg-4 text-center my-auto">
          <img
            src={onestopLogo}
            alt="Onestop Logo"
            className="img-fluid cv-image rounded"
          ></img>
        </div>
        <div className="col-lg-8 my-auto">
          <h3>{content.onestopTitle}</h3>
          <h4>{content.onestopLocation}</h4>
          <h4>2020-2021</h4>
          <div>{content.onestopDescription}</div>
        </div>
      </div>
      <hr className="small-divider" />
      <div className="row m-5">
        {" "}
        <div className="col-lg-4 text-center my-auto">
          <img
            src={efLogo}
            alt="EF logo"
            className="img-fluid cv-image rounded"
          ></img>
        </div>
        <div className="col-lg-8 my-auto">
          <h3>{content.efTitle}</h3>
          <h4>{content.efLocation}</h4>
          <h4>2018-2019</h4>
          <div>{content.efDescription}</div>
        </div>
      </div>
      <div>
        <h4 className="text-center m-5">
          {content.goToLinkedIn}{" "}
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
export default Cv;
