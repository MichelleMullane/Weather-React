import React, { useContext } from "react";
import { UnitContext, UnitDispatchContext } from "./UnitContext";

const WeatherTemperature = (props) => {
  const unit = useContext(UnitContext);
  const dispatch = useContext(UnitDispatchContext);

  function showFahrenheit(event) {
    event.preventDefault();
    dispatch({
      type: "changed",
      unit: "fahrenheit",
    });
  }

  function showCelsius(event) {
    event.preventDefault();
    dispatch({
      type: "changed",
      unit: "celsius",
    });
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="d-flex">
        <span className="temperature me-2">{Math.round(props.celsius)} </span>
        <span className="units mt-2">
          {" "}
          °C |{" "}
          <a href="/" onClick={showFahrenheit} className="units-link">
            °F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="d-flex">
        <span className="temperature me-2">{Math.round(fahrenheit())}</span>
        <span className="units mt-2">
          <a href="/" onClick={showCelsius} className="units-link">
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
};

export default WeatherTemperature;
