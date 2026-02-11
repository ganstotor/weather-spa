import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Card } from "../Card";
import "../App.css";

export const SingleCity = () => {
  
  const { city } = useParams();    
  const location = useLocation();  

  return (<Card city={city} />)
};
