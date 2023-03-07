import React from "react";

const WeatherForecastDay = (props) => {
  function formatTemperature(temperature) {
    let roundedTemperature = Math.round(temperature);
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
      <img src={props.data.condition.icon_url} alt="weather-icon" />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {formatTemperature(props.data.temperature.maximum)}°C
        </span>
        <span className="WeatherForecast-temperature-min">
          {formatTemperature(props.data.temperature.minimum)}°C
        </span>
      </div>
    </div>
  );
};

export default WeatherForecastDay;
