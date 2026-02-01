import { useState } from "react";

import "./App.css";
import { Card } from "./Card";

import { InputWrap } from "./Input";

function App() {
  const [citiesList, setCitiesList] = useState([]);
  return (
    <div className="Main">
      <InputWrap setCitiesList={setCitiesList} />
      <div className="CardList">
        {
          citiesList.map(city => <Card city={city} key={city} />)
        }
      </div>
    </div>
  );
}

export default App;
