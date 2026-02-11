import React from "react";

import "./App.css";
import { CardList } from "./CardList";
import { InputWrap } from "./Input";
import { ErrorBoundary } from "./ErrorBoundary";
import { useCitiesList } from "./hooks/useCitiesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SingleCity } from "./SingleCity";

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();
  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route
            path="/"
            element={
              <div className="Main">
                <InputWrap />
                <ErrorBoundary>
                  <CardList />
                </ErrorBoundary>
              </div>
            }
          />
          <Route path="/city/:city" element={<SingleCity />} />
          <Route
            path="*"
            element={
              <div className="Main">
                <h1>404 Not Found</h1>
              </div>
            }
          />
        </Routes>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
