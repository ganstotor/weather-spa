import { useParams } from "react-router-dom";
import { Card } from "../Card";
import "../App.css";
import { useState } from "react";
import { useForecast } from "../hooks/useForecast";
import { DailyCard } from "../DailyCard";

export const SingleCity = () => {
  const [cityCoord, setCityCoord] = useState(null);
  const data = useForecast(cityCoord);
  console.log("Forecast data:", data);

  const { city } = useParams();

  return (
    <div className="SingleCityWrap">
      <Card city={city} setCityCoord={setCityCoord} />
      {data && (
        <div className="DailyCards">
          {data.list.map((dailyCard) => <DailyCard dailyCard={dailyCard} key={dailyCard.dt} />)}
        </div>
      )}
    </div>
  );
};
