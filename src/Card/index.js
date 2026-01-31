import "../App.css";
import React from "react";

export const Card = ({city}) => {
  return (
    <div className="Card">
      <div className="MainInfo">
        <img
          className="Icon"
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="icon"
        ></img>
        <div className="Title">{city}</div>
        <div className="Description">Cloudy</div>
        <div className="Temperature">20</div>
      </div>
      <div className="Information">
        <div className="InfoItem">Humidity: 60%</div>
        <div className="InfoItem">Wind: 5 m/s</div>
        <div className="InfoItem">Pressure: 1012 hPa</div>
      </div>
    </div>
  );
};
