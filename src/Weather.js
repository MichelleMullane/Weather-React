import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [iconURL, setIconURL] = useState("");
  const [name, setName] = useState("");

  function updateWeather(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIconURL(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setName(response.data.name);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "08010f9a1b70b38b765f2b921b8d7364";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(updateWeather);
  }

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

      {temperature ? (
        <div>
          <h3>
            Current Weather in <em className="city-name">{name}</em>{" "}
          </h3>
          <ul className="date-description">
            <li>Saturday 17:40</li>
            <li className="text-capitalize">{description}</li>
          </ul>

          <div className="weather row">
            <div className="col d-flex icon-temp">
              <div>
                <img
                  src={iconURL}
                  alt="weather-icon"
                  className="weather-icon"
                />
              </div>
              <span className="temperature">{Math.round(temperature)}</span>
              <span className="units">°C</span>
            </div>
            <div className="col">
              <ul>
                <li>
                  <strong>Humidity: </strong>
                  {Math.round(humidity)}%
                </li>
                <li>
                  <strong>Wind: </strong>
                  {Math.round(wind)}km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Weather;
