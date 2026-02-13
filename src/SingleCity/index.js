import { Link, useParams } from "react-router-dom";
import { Card } from "../Card";
import "../App.css";
import { useState } from "react";
import { useForecast } from "../hooks/useForecast";
import { DailyCard } from "../DailyCard";

export const SingleCity = () => {
  const [cityCoord, setCityCoord] = useState(null);
  const data = useForecast(cityCoord);
  const dailyList = data?.list?.filter(item =>
  item.dt_txt.includes("12:00:00")
);

  const { city } = useParams();

  return (
    <div className="SingleCityWrap">
      <Link to="/" className="BackLink">Back</Link>
      <Card city={city} setCityCoord={setCityCoord} />
      {dailyList && (
        <div className="DailyCards">
          {dailyList.map((dailyCard) => <DailyCard dailyCard={dailyCard} key={dailyCard.dt} />)}
        </div>
      )}
    </div>
  );
};
