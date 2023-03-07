import React, { useReducer } from "react";
import Weather from "./Weather";

import "./App.css";
import { UnitContext, UnitDispatchContext } from "./UnitContext";

const App = () => {
  const [unit, dispatch] = useReducer(unitReducer, initialUnit);
  return (
    <UnitContext.Provider value={unit}>
      <UnitDispatchContext.Provider value={dispatch}>
        <div className="App">
          <div className="App-container">
            <header className="App-header"></header>
            <Weather defaultCity="London" />
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
      </UnitDispatchContext.Provider>
    </UnitContext.Provider>
  );
};

function unitReducer(unit, action) {
  switch (action.type) {
    case "changed": {
      return action.unit;
    }
    default: {
      return unit;
    }
  }
}

const initialUnit = "celsius";

export default App;
