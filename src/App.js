import { useState } from "react";

import "./App.css";
import { CardList } from "./CardList";
import { InputWrap } from "./Input";

function App() {
  const [citiesList, setCitiesList] = useState([]);
  return (
    <div className="Main">
      <InputWrap setCitiesList={setCitiesList} />
      {citiesList.length > 0 && <CardList citiesList={citiesList} />}
    </div>
  );
}

export default App;
