import React, { useReducer } from "react";
import GroupContext from "./GroupContext";
import GroupReducer from "./GroupReducer";
import { corte1Groups, corte2Groups, corte3Groups } from "constants/index";

import { ADD_NEW_GROUP, CHANGE_GROUP, FILTER_NAMES_GROUP } from "types";

const GroupState = ({ children }) => {
  const initialState = {
    groups: [],
    filterNames: [],
  };

  const [state, dispatch] = useReducer(GroupReducer, initialState);

  /* Función que recibe un evento que con el valor que le llega añade un nuevo grupo
  al estado groups  */

  const MODULO = {
    "Corte 1": corte1Groups,
    "Corte 2": corte2Groups,
    "Corte 3": corte3Groups,
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

  const handleChangeGroups = ({ index, value = null, e }) => {
    if (e?.target) {
      const { name, value } = e.target;
      dispatch({
        type: CHANGE_GROUP,
        payload: { index, name, value },
      });
    } else {
      const { name } = e;
      dispatch({
        type: CHANGE_GROUP,
        payload: { index, value, name },
      });

      if (name === "integrantes") {
        const updatedGroup = { ...state.groups[index], [name]: value };
        const updatedGroups = [
          ...state.groups.slice(0, index),
          updatedGroup,
          ...state.groups.slice(index + 1),
        ];
        const newFilterNames = updatedGroups
          .map((group) => group.integrantes)
          .flat(1);
        dispatch({
          type: FILTER_NAMES_GROUP,
          payload: newFilterNames,
        });
      }
    }
  };

  return (
    <GroupContext.Provider
      value={{
        groups: state.groups,
        filterNames: state.filterNames,
        AddNewGroup,
        handleChangeGroups,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export default GroupState;
