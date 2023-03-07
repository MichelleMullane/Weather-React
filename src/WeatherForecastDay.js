import React, { useContext } from "react";
import { UnitContext } from "./UnitContext";

const WeatherForecastDay = (props) => {
  const unit = useContext(UnitContext);

  function formatTemperature(temperature) {
    let roundedTemperature = 0;
    if (unit === "celsius") {
      roundedTemperature = Math.round(temperature);
    } else {
      roundedTemperature = Math.round((temperature * 9) / 5 + 32);
    }
    return `${roundedTemperature}`;
  }

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[date.getDay()];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{formatDay(props.data.time)}</div>
      <img
        src={props.data.condition.icon_url}
        alt="weather-icon"
        width={"50px"}
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {formatTemperature(props.data.temperature.maximum)}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {formatTemperature(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
};

export default WeatherForecastDay;
