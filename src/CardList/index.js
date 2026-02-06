import "../App.css";
import { Card } from "../Card";

export const CardList = ({ citiesList }) => (
  <div className="CardList">
    {citiesList.map((city) => (
      <Card city={city} key={city} />
    ))}
  </div>
);
