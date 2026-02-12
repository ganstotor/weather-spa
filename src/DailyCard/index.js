import "../App.css";

export const DailyCard = ({ dailyCard }) => {
  console.log('dailyCard', dailyCard);
  
  const { dt, main, weather } = dailyCard;
  const { description, icon } = weather[0];
  const { temp } = main;

  return <div className="DailyCard">
            <img
          className="Icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        />
  </div>;
};
