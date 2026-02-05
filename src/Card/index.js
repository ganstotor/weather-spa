import "../App.css";
import { useState, useEffect } from "react";

export const Card = ({ city }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e3d3beb81dfcc69852a7bc59118e44c3&units=metric`,
    )
      .then((response) => response.json())
      .then(setData)
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [city]);

  if (!data) return null;
  const { name, main, weather } = data;
  const { description, icon } = weather[0];
  const { temp, humidity, feels_like } = main;

  return (
    <div className="Card">
      <div className="MainInfo">
        <img
          className="Icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        ></img>
        <div className="Title">{name}</div>
        <div className="Description">{description}</div>
        <div className="Temperature">{temp.toFixed(1)}</div>
      </div>
      <div className="Information">
        <div className="InfoItem">Humidity: {humidity}%</div>
        <div className="InfoItem">Feels like: {feels_like.toFixed(1)}°C</div>
      </div>
    </div>
  );
};
