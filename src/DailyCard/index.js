import "../App.css";

export const DailyCard = ({ dailyCard }) => {

  const { dt, main, weather } = dailyCard;
  const { description, icon } = weather[0];
  const { temp } = main;
  const weekDay = new Date(dt * 1000).toString().split(" ")[0];
  const date = `${weekDay} ${new Date(dt * 1000).getDate()}`;

  return (
    <div className="DailyCard">
      <img
        className="Icon"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="icon"
      />
      <div className="Date">{date}</div>
      <div className="Temperature">{temp.toFixed(0)}</div>
      <div className="Description">{description}</div>
    </div>
  );
};
