import React from "react";

const FormattedDate = (props) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  let hours = props.date.getHours();
  let ampm = `AM`;
  if (hours < 10) hours = `0${hours}`;
  if (hours > 12) {
    hours = hours - 12;
    ampm = `PM`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;

  return (
    <div>
      {day} {hours}:{minutes} {ampm}
    </div>
  );
};

export default FormattedDate;
