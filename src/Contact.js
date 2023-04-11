import React from "react";
import "./styles/Contact.css";

function Contact(props) {
  let content = {
    English: {
      title: "Contact",
    },
    Español: {
      title: "Contacto",
    },
  };
  props.language === "Español"
    ? (content = content.Español)
    : (content = content.English);
  return (
    <div id="contact">
      <hr />
      <div className="m-5">
        <h2>{content.title}</h2>
        <h4 className="mt-3 email">
          <i class="fa-regular fa-envelope"></i>{" "}
          <a href="mailto:rachelannblackie@gmail.com">
            rachelannblackie@gmail.com
          </a>
        </h4>
      </div>
    </div>
  );
}
export default Contact;
