import "../App.css";
import { useState, useRef } from "react";

export const InputWrap = ({ setCitiesList }) => {
  const [inputValue, setInputValue] = useState("Kyiv");
  const inputRef = useRef(null);

  const handleOnClick = () => {
    setCitiesList((prev) => [...prev, inputValue]);
    setInputValue("");
    inputRef.current.focus();
  };

    const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="InputWrap">
      <input className="Input" onChange={handleOnChange} value={inputValue} ref={inputRef}/>
      <button className="Button" onClick={handleOnClick}>
        +
      </button>
    </div>
  );
};
