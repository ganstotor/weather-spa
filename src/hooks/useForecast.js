import { useEffect, useState } from "react";

export const useForecast = (coords) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (coords !== null) {
      const { lat, lon } = coords;

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=e3d3beb81dfcc69852a7bc59118e44c3`,
      )
        .then((res) => res.json())
        .then(setData);
    }
  }, [coords]);

  return data;
};
