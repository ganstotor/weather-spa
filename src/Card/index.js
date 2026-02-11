import { memo, useContext } from "react";
import "../App.css";
import { useWeather } from "../hooks/useWeather";
import { GlobalContext } from "../App";
import { useNavigate } from "react-router-dom";

const CardNoMemo = ({ city }) => {
  const { dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();
  const data = useWeather(city);

  if (!data) return null;

  const { name, main, weather } = data;
  const { description, icon } = weather[0];
  const { temp, humidity, feels_like } = main;

  const openCity = () => {
    navigate(`/city/${city.toLowerCase()}`);
  };

  const handleOnDelete = (e) => {
    e.stopPropagation();
    dispatch({ type: "DELETE_CITY", payload: city });
    navigate("/");
  };

  const handleOnEdit = (e) => {
    e.stopPropagation();
    dispatch({ type: "EDIT_CITY", payload: city });
    navigate("/");
  };

  return (
    <div className="Card" onClick={openCity}>
      <div className="ActionButtonWrap">
        <button className="ActionButton" onClick={handleOnEdit}>
          ✏
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
        />
        <div className="Title">{name}</div>
        <div className="Description">{description}</div>
        <div className="Temperature">{temp.toFixed(1)}</div>
      </div>

      <div className="Information">
        <div className="InfoItem">Humidity: {humidity}%</div>
        <div className="InfoItem">
          Feels like: {feels_like.toFixed(1)}°C
        </div>
      </div>
    </div>
  );
};

export const Card = memo(CardNoMemo);
