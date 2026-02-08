import { memo, useContext } from "react";
import "../App.css";
import { useWeather } from "../hooks/useWeather";
import { GlobalContext } from "../App";

export const Card = memo(({ city }) => {
  const {dispatch} = useContext(GlobalContext);
  const data = useWeather(city);

  if (!data) return null;
  console.log("Card data:", data);
  
  const { name, main, weather } = data;
  const { description, icon } = weather[0];
  const { temp, humidity, feels_like } = main;

  const handleOnDelete= () => {
    dispatch({ type: "DELETE_CITY", payload: city });
  };

    const handleOnEdit = () => {
    dispatch({ type: "EDIT_CITY", payload: city });
  };

  return (
    <div className="Card">
      <div className="ActionButtonWrap">
        <button className="ActionButton" onClick={handleOnEdit}>
          &#9998;
        </button>
        <button className="ActionButton" onClick={handleOnDelete}>
          X
        </button>
      </div>

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
});
