import React, { useState } from "react";

const WeatherTemperature = (props) => {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
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
          <a href="/" onClick={showFahrenheit}>
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
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
};

export default WeatherTemperature;
