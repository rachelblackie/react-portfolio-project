import React from "react";

export default function RecentProjects() {
  return (
    <div>
      <h1 className="text-center my-auto" id="recent-projects">
        Recent Projects
      </h1>
      <div className="row">
        <div className="col">
          <img
            src="/images/weather-app.png"
            alt="weather app with 5-day forecast"
          ></img>
        </div>
      </div>
    </div>
  );
}
