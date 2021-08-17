import React, { useReducer } from "react";
import StudentReducer from "./StudentReducer";
import StudentContext from "./StudentContext";

import {
  CHECK_SUBGROUP,
  GET_ACTUAL_SUBGROUP,
  GET_ALL_SUBGROUP,
  CHANGE_GRAPHIC,
  RESET_SELECTED_SUBGROUP,
} from "types";

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
// Corte 1
const arrProductos = [
  {
    id: 0,
    src: Refresco,
    nombre: "Refresco",
    contenido: "355 ml",
    cantidad_gas: "15%",
    atributos: ["tapa floja", "texto ilegible"],
  },
  {
    id: 1,
    src: RefrescoTapaFloja,
    nombre: "Refresco",
    contenido: "350 ml",
    cantidad_gas: "10%",
    atributos: ["tapa floja", "texto ilegible"],
  },
  {
    id: 2,
    src: RefrescoTapaFlojaEnvaseSucio,
    nombre: "Refresco",
    contenido: "360 ml",
    cantidad_gas: "20%",
    atributos: ["tapa floja", "texto ilegible"],
  },
  {
    id: 3,
    src: RefrescoEtiquetaSueltaEnvaseSucioTapaFloja,
    nombre: "Refresco",
    contenido: "355 ml",
    cantidad_gas: "15%",
    atributos: ["tapa floja", "texto ilegible"],
  },
  {
    id: 4,
    src: RefrescoEnvaseSucio,
    nombre: "Refresco",
    contenido: "356 ml",
    cantidad_gas: "15%",
    atributos: ["tapa floja", "texto ilegible"],
  },
  {
    id: 5,
    src: RefrescoDefectuoso,
    nombre: "Refresco",
    contenido: "355 ml",
    cantidad_gas: "18%",
    atributos: ["tapa floja", "texto ilegible"],
  },
];
// Corte2
const AtributoNAleatorio = [
  {
    id: 32324343,
    title: "Subgrupo 1",
    grupos: [
      {
        id: 64565,
        src: Refresco,
        nombre: "Refresco",
        contenido: "356 ml",
        cantidad_gas: "17%",
        isChecked: false,
        atributos: ["tapa floja", "texto ilegible"],
      },
      {
        id: 265,
        src: Refresco,
        nombre: "Refresco",
        contenido: "356 ml",
        cantidad_gas: "17%",
        isChecked: false,
        atributos: ["tapa floja", "texto ilegible"],
      },
      {
        id: 1233232,
        src: Refresco,
        nombre: "Refresco",
        contenido: "356 ml",
        cantidad_gas: "17%",
        isChecked: false,
        atributos: ["tapa floja", "texto ilegible"],
      },
      {
        id: 65456565,
        src: Refresco,
        nombre: "Refresco",
        contenido: "356 ml",
        cantidad_gas: "17%",
        isChecked: false,
        atributos: ["tapa floja", "envase sucio"],
      },
    ],
  },
  {
    id: 32324432435,
    title: "Subgrupo 2",
    grupos: [
      {
        id: 2130,
        src: RefrescoTapaFloja,
        nombre: "Refresco",
        contenido: "352 ml",
        cantidad_gas: "12%",
        isChecked: false,
        atributos: ["tapa floja", "envase sucio"],
      },
      {
        id: 4545,
        src: RefrescoTapaFlojaEnvaseSucio,
        nombre: "Refresco",
        contenido: "351 ml",
        cantidad_gas: "1%",
        isChecked: false,
        atributos: ["tapa floja", "envase sucio"],
      },
      {
        id: 2132330,
        src: RefrescoTapaFloja,
        nombre: "Refresco",
        contenido: "352 ml",
        cantidad_gas: "12%",
        isChecked: false,
        atributos: ["tapa floja", "envase sucio"],
      },
      {
        id: 45323245,
        src: RefrescoTapaFlojaEnvaseSucio,
        nombre: "Refresco",
        contenido: "351 ml",
        cantidad_gas: "1%",
        isChecked: false,
        atributos: ["tapa floja", "envase sucio"],
      },
      {
        id: 453245,
        src: RefrescoTapaFloja,
        nombre: "Refresco",
        contenido: "352 ml",
        cantidad_gas: "12%",
        isChecked: false,
        atributos: ["tapa floja", "envase sucio"],
      },
      {
        id: 4454343545,
        src: RefrescoTapaFlojaEnvaseSucio,
        nombre: "Refresco",
        contenido: "351 ml",
        cantidad_gas: "1%",
        isChecked: false,
        atributos: ["tapa floja", "envase sucio"],
      },
    ],
  },
  {
    id: 3283298328,
    title: "Subgrupo 3",
    grupos: [
      {
        id: 324443,
        src: RefrescoEtiquetaSueltaEnvaseSucioTapaFloja,
        nombre: "Refresco",
        contenido: "302 ml",
        cantidad_gas: "8%",
        isChecked: false,
        atributos: ["tapa floja", "envase sucio"],
      },
      {
        id: 7645,
        src: RefrescoEnvaseSucio,
        nombre: "Refresco",
        contenido: "334 ml",
        cantidad_gas: "17%",
        isChecked: false,
        atributos: ["tapa floja", "envase sucio"],
      },
      {
        id: 665556,
        src: RefrescoDefectuoso,
        nombre: "Refresco",
        contenido: "367 ml",
        cantidad_gas: "48%",
        isChecked: false,
        atributos: ["tapa floja", "envase sucio"],
      },
      {
        id: 88657,
        src: RefrescoEnvaseSucio,
        nombre: "Refresco",
        contenido: "334 ml",
        cantidad_gas: "17%",
        isChecked: false,
        atributos: ["tapa floja", "envase sucio"],
      },
      {
        id: 233232,
        src: RefrescoDefectuoso,
        nombre: "Refresco",
        contenido: "367 ml",
        cantidad_gas: "48%",
        isChecked: false,
        atributos: ["tapa floja", "envase sucio"],
      },
    ],
  },
];

const AtributoNConstante = [
  {
    id: 432121,
    title: "Subgrupo 1",
    grupos: [
      {
        id: 9875365,
        src: Refresco,
        nombre: "Refresco",
        contenido: "356 ml",
        cantidad_gas: "17%",
        isChecked: false,
        atributos: ["tapa floja", "envase sucio"],
      },
      {
        id: 32443,
        src: Refresco,
        nombre: "Refresco",
        contenido: "353 ml",
        cantidad_gas: "14%",
        isChecked: false,
        atributos: ["tapa floja", "envase sucio"],
      },
    ],
  },
  {
    id: 998787,
    title: "Subgrupo 2",
    grupos: [
      {
        id: 213213223,
        src: Refresco,
        nombre: "Refresco",
        contenido: "356 ml",
        cantidad_gas: "17%",
        isChecked: false,
        atributos: ["tapa floja", "envase sucio"],
      },
      {
        id: 3243122432,
        src: Refresco,
        nombre: "Refresco",
        contenido: "356 ml",
        cantidad_gas: "17%",
        isChecked: false,
        atributos: ["tapa floja", "texto ilegible"],
      },
    ],
  },
];

const AtributoNVariable = [
  {
    id: 7655665,
    title: "Subgrupo 1",
    grupos: [
      {
        id: 7664764,
        src: Refresco,
        nombre: "Refresco",
        variablePrincipal: "355 ML",
        variableSecundaria: "15%",
        isChecked: false,
      },
      {
        id: 53563,
        src: Refresco,
        nombre: "Refresco",
        variablePrincipal: "355 ML",
        variableSecundaria: "15%",
        isChecked: false,
      },
    ],
  },
  {
    id: 355343,
    title: "Subgrupo 2",
    grupos: [
      {
        id: 655645,
        src: Refresco,
        nombre: "Refresco",
        variablePrincipal: "355 ML",
        variableSecundaria: "15%",
        isChecked: false,
      },
      {
        id: 23324234,
        src: Refresco,
        nombre: "Refresco",
        variablePrincipal: "355 ML",
        variableSecundaria: "15%",
        isChecked: false,
      },
    ],
  },
];

const productsSubgroup = {
  AtributoNAleatorio,
  AtributoNConstante,
  AtributoNVariable,
};

const StudentState = ({ children }) => {
  const initialState = {
    modulo: "Corte 1",
    typeOfGraphic: "random",
    products: arrProductos,
    subgroups: productsSubgroup,
    features: feauturesInfo,
    selectedSubgroup: null,
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

  const checkSubgroup = (groupSelected, idSubgroupSelected, nameArray) => {
    dispatch({
      type: CHECK_SUBGROUP,
      payload: { groupSelected, idSubgroupSelected, nameArray },
    });
  };

  const changeGraphic = (graphic) => {
    dispatch({
      type: CHANGE_GRAPHIC,
      payload: graphic,
    });
  };

  const resetSelectedSubgroup = () => {
    dispatch({
      type: RESET_SELECTED_SUBGROUP,
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
        changeGraphic,
        resetSelectedSubgroup,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentState;
