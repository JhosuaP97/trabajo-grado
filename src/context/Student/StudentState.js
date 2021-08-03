import React, { useReducer } from "react";
import StudentReducer from "./StudentReducer";
import StudentContext from "./StudentContext";

import { CHECK_SUBGROUP, GET_ACTUAL_SUBGROUP, GET_ALL_SUBGROUP } from "types";

import Refresco from "models/Refresco.glb";
import RefrescoTapaFloja from "models/Refresco_tapa_floja.glb";
import RefrescoTapaFlojaEnvaseSucio from "models/Refresco_tapa_floja_envase_sucio.glb";
import RefrescoEtiquetaSueltaEnvaseSucioTapaFloja from "models/Refresco_etiqueta_suelta_envase_sucio_tapa_floja.glb";
import RefrescoEnvaseSucio from "models/Refresco_envase_sucio.glb";
import RefrescoDefectuoso from "models/Refresco_defectuoso.glb";

const feauturesInfo = [
  { name: "contenido", value: "355 ml+-5" },
  { name: "cantidad gas", value: "255 ml+-5" },
  { name: "tapa", value: "fija" },
  { name: "etiqueta", value: "fija" },
  { name: "Envase", value: "limpio" },
  { name: "Textos", value: "Ilegibles" },
];

const arrProductos = [
  {
    id: 0,
    src: Refresco,
    contenido: "355 ml",
    cantidad_gas: "15%",
  },
  {
    id: 1,
    src: RefrescoTapaFloja,
    contenido: "350 ml",
    cantidad_gas: "10%",
  },
  {
    id: 2,
    src: RefrescoTapaFlojaEnvaseSucio,
    contenido: "360 ml",
    cantidad_gas: "20%",
  },
  {
    id: 3,
    src: RefrescoEtiquetaSueltaEnvaseSucioTapaFloja,
    contenido: "355 ml",
    cantidad_gas: "15%",
  },
  {
    id: 4,
    src: RefrescoEnvaseSucio,
    contenido: "356 ml",
    cantidad_gas: "15%",
  },
  {
    id: 5,
    src: RefrescoDefectuoso,
    contenido: "355 ml",
    cantidad_gas: "18%",
  },
];

const StudentState = ({ children }) => {
  const initialState = {
    modulo: "Corte 3",
    typeOfGraphic: "random",
    products: arrProductos,
    subgroups: [],
    features: feauturesInfo,
    selectedSubgroup: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(StudentReducer, initialState);

  const getAllSubgroup = () => {
    dispatch({
      type: GET_ALL_SUBGROUP,
    });
  };

  const getSubgroup = (subgroup) => {
    dispatch({
      type: GET_ACTUAL_SUBGROUP,
      payload: subgroup,
    });
  };

  const checkSubgroup = (groupSelected, idSubgroupSelected) => {
    dispatch({
      type: CHECK_SUBGROUP,
      payload: { groupSelected, idSubgroupSelected },
    });
  };

  return (
    <StudentContext.Provider
      value={{
        modulo: state.modulo,
        typeOfGraphic: state.typeOfGraphic,
        products: state.products,
        subgroups: state.subgroups,
        features: state.features,
        selectedSubgroup: state.selectedSubgroup,
        getAllSubgroup,
        getSubgroup,
        checkSubgroup,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentState;
