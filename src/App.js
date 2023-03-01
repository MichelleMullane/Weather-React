import React from "react";
import Weather from "./Weather";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header"></header>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://chimerical-kleicha-dda4cf.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Michelle Mullane
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/MichelleMullane/Weather-React"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
};

export default App;
