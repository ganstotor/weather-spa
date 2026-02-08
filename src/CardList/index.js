import "../App.css";
import { GlobalContext } from "../App";
import { Card } from "../Card";
import { useContext } from "react";

 
export const CardList = () => {
  const { state: {citiesList} } = useContext(GlobalContext);
  return (
  <div className="CardList">
    {citiesList.map((city) => (
      <Card city={city} key={city} />
    ))}
  </div>
  )
};
