import React from "react";
import headshot from "./images/headshot.jpg";
import "./styles/AboutMe.css";

function AboutMe(props) {
  let content = {
    English: {
      title: "About Me",
      subtitle: "Hi, I'm Rachel",
      bio: "I'm originally from Atlantic Canada and currently based in Spain. I studied at Dalhousie University in Halifax; and since graduating I've lived in Seoul, Victoria (Canada), and Valencia. I've worked in private education since 2014, and started learning to code in 2022. I have a particular interest in educational technology. My interests outside of work include reading, crocheting, learning languages, and swing dancing.",
    },
    Español: {
      title: "Sobre Mí",
      subtitle: "Hola, soy Rachel",
      bio: "Soy del este de Canadá y actualmente resido en España. Estudié en la Universidad de Dalhousie en Halifax; y desde que me gradué he vivido en Seúl, Victoria (Canadá) y Valencia. He trabajado en educación privada desde 2014 y comencé a aprender a programar en 2022. Tengo un interés particular en la tecnología educativa. Mis intereses fuera del trabajo incluyen leer, hacer ganchillo, aprender idiomas y bailar swing.",
    },
  };
  props.language === "Español"
    ? (content = content.Español)
    : (content = content.English);
  return (
    <div id="about-me">
      <hr />
      <div className="row m-5">
        <div className="col-lg-3 my-auto">
          <img
            src={headshot}
            alt="Rachel Blackie"
            className="img-fluid rounded about-me-photo"
          ></img>
        </div>
        <div class="col-lg-9">
          <h2>{content.title}</h2>
          <h4>{content.subtitle}</h4>
          <p>{content.bio}</p>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
