import { useContext, useMemo } from "react";
import StudentContext from "context/Student/StudentContext";
import {
  CORTE1,
  CORTE2,
  CORTE3,
  RANDOM,
  CONSTANT,
  VARIABLE,
} from "constants/index";

const useStudent = () => {
  const studentContext = useContext(StudentContext);

  const {
    practicesStudent,
    products,
    features,
    modulo,
    idPractica,
    typeOfGraphic,
    subgroups,
    conditions,
    getSubgroup,
    getAllSubgroup,
    selectedSubgroup,
    isloading,
    checkSubgroup,
    changeGraphic,
    resetSelectedSubgroup,
    getConditions,

    graphics,
    getGraphics,
    getFeaturesProductC1,
    getAllPracticesStudent,
    getActualModule,
    createInspectionProductC1,
    createInspectionProductC2,
    getProductsPracticeOne,
    getProductsPracticeTwo,
    getPracticeId,
  } = studentContext;

  const getArrayDependOnGraphic = useMemo(
    () => ({
      [RANDOM]: subgroups.AtributoNAleatorio,
      [CONSTANT]: subgroups.AtributoNConstante,
      [VARIABLE]: subgroups.AtributoNVariable,
    }),
    [
      subgroups.AtributoNAleatorio,
      subgroups.AtributoNConstante,
      subgroups.AtributoNVariable,
    ]
  );

  const arraySubgroupSelectedByGraphic =
    typeOfGraphic && getArrayDependOnGraphic[typeOfGraphic];

  // useEffect(() => {
  //   console.log("render selectedSubgroup");
  //   if (selectedSubgroup === null) {
  //     arraySubgroupSelectedByGraphic &&
  //       getSubgroup(arraySubgroupSelectedByGraphic[0]);
  //   }
  // }, [selectedSubgroup, getSubgroup, arraySubgroupSelectedByGraphic]);

  const selectedArrayByModule = {
    [CORTE1]: products.products,
    [CORTE2]: selectedSubgroup && selectedSubgroup.grupos,
    [CORTE3]: products.products,
  };

  const CURRENT_ARRAY = selectedArrayByModule[modulo];

  return {
    practicesStudent,
    products,
    features,
    modulo,
    idPractica,
    typeOfGraphic,
    subgroups,
    conditions,
    getConditions,
    getSubgroup,
    getAllSubgroup,
    selectedSubgroup,
    isloading,
    checkSubgroup,
    changeGraphic,
    getArrayDependOnGraphic,
    arraySubgroupSelectedByGraphic,
    CURRENT_ARRAY,
    resetSelectedSubgroup,

    graphics,
    getGraphics,
    getFeaturesProductC1,
    getAllPracticesStudent,
    getActualModule,
    createInspectionProductC1,
    createInspectionProductC2,
    getProductsPracticeOne,
    getProductsPracticeTwo,
    getPracticeId,
  };
};

export default useStudent;
