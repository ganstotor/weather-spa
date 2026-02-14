import { useEffect, useState } from "react";

export const useWeather = (city) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!city || city.trim() === "") {
      setData(null); // Очищаем данные, если город пуст
      return; // Выходим из функции, не делая fetch
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e3d3beb81dfcc69852a7bc59118e44c3&units=metric`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          setData(data);
        } 
      })
      .catch((error) => {
        setData(null);
      });
  }, [city]);
  return data;
};
