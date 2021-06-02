import React, { useReducer } from "react";
import { CHANGE_INDIVIDUAL, CHANGE_INDIVIDUAL_MULTI_SELECT } from "types";
import IndividualContext from "./IndividualContext";
import IndividualReducer from "./IndividualReducer";

const IndividualState = ({ children }) => {
  const initialState = {
    individual: {
      productoIndividual: "",
      unidadesIndividual: 0,
      contIndividual: 0,
      toleranciaIndividual: 0,
      atributosIndividual: [],
    },
  };

  const [state, dispatch] = useReducer(IndividualReducer, initialState);

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

  return (
    <IndividualContext.Provider
      value={{
        individual: state.individual,
        handleChangeIndividual,
        handleChangeMultiSelectIndividual,
      }}
    >
      {children}
    </IndividualContext.Provider>
  );
};

export default IndividualState;
