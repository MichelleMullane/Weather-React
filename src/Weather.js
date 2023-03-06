import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

const Weather = (props) => {
  const [city, setCity] = useState(props.defaultCity);
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

  function search() {
    const apiKey = "bc0t009fc86043a8280dae34obbeaad7";
    let units = "metric";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(url).then(updateWeather);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
};
export default Weather;
