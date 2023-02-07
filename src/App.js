import React from "react";
import Weather from "./Weather";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        <Weather />
      </header>
    </div>
  );
};

export default App;
