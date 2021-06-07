import React, { useReducer } from "react";
import {
  CHANGE_INDIVIDUAL,
  CHANGE_INDIVIDUAL_MULTI_SELECT,
  CHANGE_INDIVIDUAL_OBJ,
} from "types";
import IndividualContext from "./IndividualContext";
import IndividualReducer from "./IndividualReducer";
import {
  corte1Individual,
  corte2Individual,
  corte3Individual,
} from "constants/index";

const IndividualState = ({ children }) => {
  let SELECTED_MODULE = "";
  const initialState = {
    individual: SELECTED_MODULE,
  };

  const [state, dispatch] = useReducer(IndividualReducer, initialState);

  const MODULO = {
    "Corte 1": corte1Individual,
    "Corte 2": corte2Individual,
    "Corte 3": corte3Individual,
  };

  const handleChangeIndividual = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: CHANGE_INDIVIDUAL,
      payload: { name, value },
    });
  };

  const handleChangeMultiSelectIndividual = (value, e) => {
    const { name } = e;
    dispatch({
      type: CHANGE_INDIVIDUAL_MULTI_SELECT,
      payload: { value, name },
    });
  };

  //Función que cambia el objeto dependiendo del tipo de practica y el corte
  //seleccionado

  const changeModuleIndividual = (module) => {
    SELECTED_MODULE = MODULO[module];
    dispatch({
      type: CHANGE_INDIVIDUAL_OBJ,
      payload: SELECTED_MODULE,
    });
  };

  return (
    <IndividualContext.Provider
      value={{
        individual: state.individual,
        handleChangeIndividual,
        handleChangeMultiSelectIndividual,
        changeModuleIndividual,
      }}
    >
      {children}
    </IndividualContext.Provider>
  );
};

export default IndividualState;
