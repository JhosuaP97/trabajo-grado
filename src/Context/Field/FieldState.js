import React, { useReducer } from "react";
import {
  CHANGE_FIELD,
  CHANGE_FIELD_MULTI_SELECT,
  CHANGE_FIELD_MULTI_SELECT_ALL,
} from "types/index";
import FieldContext from "./FieldContext";
import FieldReducer from "./FieldReducer";

const FieldState = ({ children }) => {
  const initialState = {
    field: {
      nombrePractica: "",
      modulo: "",
      participantes: [],
      tipoPractica: "",
      descripcion: "",
      numGrupo: "",
    },
  };

  const [state, dispatch] = useReducer(FieldReducer, initialState);

  const handleChangeField = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: CHANGE_FIELD,
      payload: { name, value },
    });
  };

  const handleChangeMultiSelectField = ({ value, e, options }) => {
    const { name, action, option } = e;
    if (action === "select-option" && option.value === "*") {
      dispatch({
        type: CHANGE_FIELD_MULTI_SELECT_ALL,
        payload: { name, options },
      });
    } else {
      dispatch({
        type: CHANGE_FIELD_MULTI_SELECT,
        payload: { value, name },
      });
    }
  };

  return (
    <FieldContext.Provider
      value={{
        field: state.field,
        handleChangeField,
        handleChangeMultiSelectField,
      }}
    >
      {children}
    </FieldContext.Provider>
  );
};

export default FieldState;
