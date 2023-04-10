import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <hr />
      <div className="m-5">
        <h2>Contact</h2>
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
