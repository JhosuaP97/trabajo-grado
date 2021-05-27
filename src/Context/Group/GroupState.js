import React, { useReducer } from "react";
import GroupContext from "./GroupContext";
import GroupReducer from "./GroupReducer";

import {
  ADD_NEW_GROUP,
  CHANGE_GROUP,
  CHANGE_GROUP_MULTI_SELECT,
  FILTER_NAMES_GROUP,
} from "types";

const GroupState = ({ children }) => {
  const initialState = {
    groups: [],
    filterNames: [],
  };

  const [state, dispatch] = useReducer(GroupReducer, initialState);

  /* Función que recibe un evento que con el valor que le llega añade un nuevo grupo
  al estado groups  */

  const corte1 = {
    producto: "",
    unidades: 0,
    cont: 0,
    tolerancia: 0,
    atributos: [],
    integrantes: [],
  };

  const { cont, ...newModule } = corte1;

  const corte2 = {
    ...newModule,
    graficos: [],
    subgrupo: 0,
    tamanioSubgrupo: 0,
  };

  const { unidades, ...newModule2 } = corte1;

  const corte3 = {
    ...newModule2,
    tipoMuestreo: "",
    lote: 0,
    aql: 0,
    severidad: "",
    nivelInspeccion: "",
    metodo: "",
  };

  const MODULO = {
    "Corte 1": corte1,
    "Corte 2": corte2,
    "Corte 3": corte3,
  };

  let SELECTED_MODULE = "";

  const AddNewGroup = (e) => {
    const { name, value } = e.target;
    if (name === "modulo") {
      SELECTED_MODULE = MODULO[value];
    } else {
      const newGroup = [...Array(Number(value)).keys()].map((index) => {
        index++;
        return {
          id: new Date().getUTCMilliseconds() + index,
          ...SELECTED_MODULE,
        };
      });

      dispatch({
        type: ADD_NEW_GROUP,
        payload: newGroup,
      });
    }
  };

  /* Función que recibe un indice y un evento, donde el indice es traido del mapeado del estado groups,
  con este se sabe cual es la fila que se desea actualizar y con el evento se obtiene el nombre del campo
  y el valor del mismo */

  const handleChangeGroups = (index, event) => {
    const { name, value } = event.target;
    dispatch({
      type: CHANGE_GROUP,
      payload: { index, name, value },
    });
  };

  const handleChangeMultiSelectGroup = (index, value, e) => {
    const { name } = e;
    dispatch({
      type: CHANGE_GROUP_MULTI_SELECT,
      payload: { index, value, name },
    });

    if (name === "integrantes") {
      dispatch({
        type: FILTER_NAMES_GROUP,
      });
    }
  };

  return (
    <GroupContext.Provider
      value={{
        groups: state.groups,
        filterNames: state.filterNames,
        AddNewGroup,
        handleChangeGroups,
        handleChangeMultiSelectGroup,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export default GroupState;
