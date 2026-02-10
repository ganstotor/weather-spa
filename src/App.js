import React from "react";

import "./App.css";
import { CardList } from "./CardList";
import { InputWrap } from "./Input";
import { ErrorBoundary } from "./ErrorBoundary";
import { useCitiesList } from "./hooks/useCitiesList";

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className="Main">
        <InputWrap />
        <ErrorBoundary>
          <CardList />
        </ErrorBoundary>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
