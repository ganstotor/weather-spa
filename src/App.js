import "./App.css";
import { Card } from "./Card";

import { Input } from "./Input";

function App() {
  const citiesList = ['New York', 'London', 'Tokyo'];
  return (
    <div className="Main">
      <Input />
      <div className="CardList">
        {
          citiesList.map(city => <Card city={city} key={city} />)
        }
      </div>
    </div>
  );
}

export default App;
