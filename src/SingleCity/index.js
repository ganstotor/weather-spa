import { useParams, useLocation } from "react-router-dom";
import { Card } from "../Card";
import "../App.css";

export const SingleCity = () => {
  const { city } = useParams();    
  const location = useLocation();  

  console.log("city param:", city);
  console.log("state:", location.state);

  return (<Card city={city} />)
};
