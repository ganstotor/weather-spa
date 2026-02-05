import "../App.css";
import { Card } from "../Card";
import { use, useEffect } from "react";

export const CardList = ({ citiesList }) => (
  <div className="CardList">
    {citiesList.map((city) => (
      <Card city={city} key={city} />
    ))}
  </div>
);
