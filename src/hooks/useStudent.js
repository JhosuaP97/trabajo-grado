import { useContext, useEffect } from "react";
import StudentContext from "context/Student/StudentContext";

const useStudent = () => {
  const studentContext = useContext(StudentContext);

  const {
    products,
    features,
    modulo,
    typeOfGraphic,
    subgroups,
    conditions,
    getSubgroup,
    getAllSubgroup,
    selectedSubgroup,
    checkSubgroup,
    changeGraphic,
    resetSelectedSubgroup,
    getConditions,
  } = studentContext;

  const getArrayDependOnGraphic = {
    random: subgroups.AtributoNAleatorio,
    constant: subgroups.AtributoNConstante,
    variable: subgroups.AtributoNVariable,
  };

  const arraySubgroupSelectedByGraphic = getArrayDependOnGraphic[typeOfGraphic];

  useEffect(() => {
    if (selectedSubgroup === null) {
      getSubgroup(arraySubgroupSelectedByGraphic[0]);
    }
  }, [selectedSubgroup, getSubgroup, arraySubgroupSelectedByGraphic]);

  const SELECTED_GRAPHIC = {
    RANDOM: "random",
    CONSTANT: "constant",
    VARIABLE: "variable",
  };

  const selectedArrayByModule = {
    "Corte 1": products,
    "Corte 2": selectedSubgroup && selectedSubgroup.grupos,
    "Corte 3": products,
  };

  const CURRENT_ARRAY = selectedArrayByModule[modulo];

  const STEPS_BY_MODULE = {
    "Corte 1": ["Revisa los productos", "Finalizar práctica"],
    "Corte 2": [
      "Productos para gráfico: atributos con n aleatorio.",
      "Productos para gráfico: atributos con n constante",
      "Productos para gráfico: variables",
      "Finalizar práctica",
    ],
    "Corte 3": [
      "Definir tamaño de la muestra",
      "Inspección de los productos",
      "Finalizar práctica",
    ],
  };

  const selectedSteps = STEPS_BY_MODULE[modulo];

  return {
    products,
    features,
    modulo,
    typeOfGraphic,
    subgroups,
    conditions,
    getConditions,
    getSubgroup,
    getAllSubgroup,
    selectedSubgroup,
    checkSubgroup,
    changeGraphic,
    getArrayDependOnGraphic,
    SELECTED_GRAPHIC,
    arraySubgroupSelectedByGraphic,
    CURRENT_ARRAY,
    selectedSteps,
    resetSelectedSubgroup,
  };
};

export default useStudent;
