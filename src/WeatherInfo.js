import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

const WeatherInfo = (props) => {
  return (
    <div>
      <h3>
        Current Weather in <em className="city-name">{props.data.name}</em>{" "}
      </h3>
      <ul className="date-description">
        <li>
          <FormattedDate date={props.data.time} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="weather row">
        <div className="col d-flex icon-temp">
          <div>
            <img
              src={props.data.iconURL}
              alt="weather-icon"
              className="weather-icon"
            />
          </div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col">
          <ul>
            <li>
              <strong>Humidity: </strong>
              {Math.round(props.data.humidity)}%
            </li>
            <li>
              <strong>Wind: </strong>
              {Math.round(props.data.wind)}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
