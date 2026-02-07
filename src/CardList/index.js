import "../App.css";
import { Card } from "../Card";

export const CardList = ({ citiesList, dispatch }) => (
  <div className="CardList">
    {citiesList.map((city) => (
      <Card city={city} key={city} dispatch={dispatch} />
    ))}
  </div>
);
