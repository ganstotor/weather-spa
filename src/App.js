import "./App.css";
import { CardList } from "./CardList";
import { InputWrap } from "./Input";
import { useCitiesList } from "./hooks/useCitiesList";

function App() {
  const [state, dispatch] = useCitiesList();
  const { inputValue, citiesList, editingCity } = state;
  return (
    <div className="Main">
      <InputWrap dispatch={dispatch} inputValue={inputValue} editingCity={editingCity} />
       <CardList citiesList={citiesList} dispatch={dispatch} />
    </div>
  );
}

export default App;
