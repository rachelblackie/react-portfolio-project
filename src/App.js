import React from "react";
import MenuBar from "./MenuBar";
import Hero from "./Hero";
import RecentProjects from "./RecentProjects";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Hero />
      <RecentProjects />
      <footer className="text-center">
        <div>
          <a
            href="mailto:rachelannblackie@gmail.com"
            title="email Rachel Blackie"
          >
            rachelannblackie@gmail.com
          </a>
        </div>
        <div>
          <a
            href="https://github.com/rachelblackie"
            title="See Rachel Blackie's work on GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rachel-blackie-273b18127/"
            title="See Rachel Blackie's LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/crochetcaracol/"
            title="See Rachel Blackie's Instagram profile"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
