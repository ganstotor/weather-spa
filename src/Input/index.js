import "../App.css";
import { GlobalContext } from "../App";
import { useRef, useContext } from "react";

export const InputWrap = () => {
  const inputRef = useRef(null);
  const { dispatch, state: {inputValue, editingCity} } = useContext(GlobalContext);

  const handleOnAdd = () => {
    if (inputValue.length) {
      dispatch({ type: "ADD_CITY", payload: inputValue });
    }
    dispatch({ type: "RESET_INPUT_VALUE" });

    inputRef.current.focus();
  };

  const handleOnDone = () => {
    if (inputValue.length) {
      dispatch({ type: "EDIT_CITY_DONE", payload: inputValue });
    }
    dispatch({ type: "RESET_INPUT_VALUE" });

    inputRef.current.focus();
  };

  const handleOnChange = (event) => {
    dispatch({ type: "CHANGE_INPUT_VALUE", payload: event.target.value });
  };

  const handleClear = () => {
    localStorage.clear();
    dispatch({ type: "CLEAR_LIST" });
  };

  return (
    <div className="InputWrap">
      <input
        className="Input"
        onChange={handleOnChange}
        value={inputValue}
        ref={inputRef}
      />

      {editingCity ? (
        <button className="Button" onClick={handleOnDone}>
          Done
        </button>
      ) : (
        <button className="Button" onClick={handleOnAdd}>
          +
        </button>
      )}
      <button className="Button ClearButton" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};
