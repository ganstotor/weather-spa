  import { useEffect, useState } from "react";

export const useWeather = (city) => {
   const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e3d3beb81dfcc69852a7bc59118e44c3&units=metric`,
    )
      .then((response) => response.json())
      .then(setData)
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [city]);
  return data;
}

