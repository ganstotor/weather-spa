import { useEffect, useReducer } from "react";

const initialState = {
  inputValue: "",
  editingCity: "",
  citiesList: JSON.parse(localStorage.getItem("citiesList")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CITY": {
      const newState = {
        ...state,
        citiesList: [...state.citiesList, action.payload],
      };
      return newState;
    }
    case "CLEAR_LIST": {
      const newState = { ...state, citiesList: [] };
      return newState;
    }
    case "DELETE_CITY": {
      const newState = {
        ...state,
        citiesList: state.citiesList.filter((city) => city !== action.payload),
      };
      return newState;
    }
    case "EDIT_CITY": {
      return {
        ...state,
        inputValue: action.payload,
        editingCity: action.payload,
      };
    }
    case "EDIT_CITY_DONE": {
      const { editingCity } = state;
      const filteredArray = state.citiesList.filter(
        (city) => city !== editingCity,
      );
      const newArray = [...filteredArray, action.payload];
      return {
        ...state,
        citiesList: newArray,
        editingCity: initialState.editingCity,
        inputValue: initialState.inputValue,
      };
    }
    case "CHANGE_INPUT_VALUE": {
      return { ...state, inputValue: action.payload };
    }
    case "RESET_INPUT_VALUE": {
      const newState = { ...state, inputValue: initialState.inputValue };
      return newState;
    }
    default:
      return initialState;
  }
};
export const useCitiesList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { citiesList } = state;

  useEffect(() => {
    localStorage.setItem("citiesList", JSON.stringify(citiesList));
  }, [citiesList]);
  return [state, dispatch];
};
