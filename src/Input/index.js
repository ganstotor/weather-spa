import "../App.css";
import { useState, useRef } from "react";

export const InputWrap = ({ dispatch }) => {
  const [inputValue, setInputValue] = useState("Kyiv");
  const inputRef = useRef(null);

  const handleOnClick = () => {
    if (inputValue.length) {
      dispatch({ type: "ADD_CITY", payload: inputValue });
      setInputValue("");
      inputRef.current.focus();
    }
    setInputValue("");
    inputRef.current.focus();
  };

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
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
      <button className="Button" onClick={handleOnClick}>
        +
      </button>
      <button className="Button ClearButton" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};
