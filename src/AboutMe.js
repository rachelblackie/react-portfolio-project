import React from "react";
import headshot from "./headshot.jpg";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div>
      <hr />
      <div className="row m-5">
        <div className="col-3-lg my-auto">
          <img
            src={headshot}
            alt="Rachel Blackie"
            className="img-fluid rounded about-me-photo"
          ></img>
        </div>
        <div class="col-9-lg">
          <h2>About Me</h2>
          <h4>Hi, I'm Rachel</h4>
          <p>
            I'm originally from Atlantic Canada and currently based in Spain. I
            studied at Dalhousie University in Halifax; and since graduating
            I've lived in Seoul, Victoria (Canada), and Valencia. I've worked in
            private education since 2014, and started learning to code in 2022.
            I have a particular interest in educational technology. My interests
            outside of work include reading, crocheting, learning languages, and
            swing dancing.
          </p>
        </div>
      </div>
    </div>
  );
}
