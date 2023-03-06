import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

import "./Weather.css";

const Weather = (props) => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({ ready: false });

  function updateWeather(response) {
    setWeatherData({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconURL: response.data.condition.icon_url,
      time: new Date(response.data.time * 1000),
      name: response.data.city,
      ready: true,
    });
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "bc0t009fc86043a8280dae34obbeaad7";
    let units = "metric";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(url).then(updateWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={handleChange}
            className="search-input"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <div>
          <h3>
            Current Weather in <em className="city-name">{weatherData.name}</em>{" "}
          </h3>
          <ul className="date-description">
            <li>
              <FormattedDate date={weatherData.time} />
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>

          <div className="weather row">
            <div className="col d-flex icon-temp">
              <div>
                <img
                  src={weatherData.iconURL}
                  alt="weather-icon"
                  className="weather-icon"
                />
              </div>
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">°C</span>
            </div>
            <div className="col">
              <ul>
                <li>
                  <strong>Humidity: </strong>
                  {Math.round(weatherData.humidity)}%
                </li>
                <li>
                  <strong>Wind: </strong>
                  {Math.round(weatherData.wind)}km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "bc0t009fc86043a8280dae34obbeaad7";
    let units = "metric";
    let url = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;
    axios.get(url).then(updateWeather);
    return "Loading...";
  }
};
export default Weather;
