import React, { useState } from "react";
import MenuBar from "./MenuBar";
import Hero from "./Hero";
import RecentProjects from "./RecentProjects";
import Cv from "./Cv";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import "./App.css";

function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "Castellano"
  );
  return (
    <div className="App">
      <MenuBar
        language={language}
        handleSetLanguage={(language) => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
      />
      <Hero
        language={language}
        handleSetLanguage={(language) => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
      />
      <RecentProjects
        language={language}
        handleSetLanguage={(language) => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
      />
      <Cv
        language={language}
        handleSetLanguage={(language) => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
      />
      <AboutMe
        language={language}
        handleSetLanguage={(language) => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
      />
      <Contact
        language={language}
        handleSetLanguage={(language) => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
      />
    </div>
  );
}
function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
