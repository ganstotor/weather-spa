import "./App.css";
import { CardList } from "./CardList";
import { InputWrap } from "./Input";
import { useCitiesList } from "./hooks/useCitiesList";

function App() {
  const [citiesList, dispatch] = useCitiesList();

  return (
    <div className="Main">
      <InputWrap dispatch={dispatch} />
       <CardList citiesList={citiesList} />
    </div>
  );
}

export default App;
