import { useContext } from "react";
import StudentContext from "context/Student/StudentContext";

const useStudent = () => {
  const studentContext = useContext(StudentContext);

  const {
    products,
    features,
    modulo,
    typeOfGraphic,
    subgroups,
    getSubgroup,
    getAllSubgroup,
    selectedSubgroup,
    checkSubgroup,
  } = studentContext;

  return {
    products,
    features,
    modulo,
    typeOfGraphic,
    subgroups,
    getSubgroup,
    getAllSubgroup,
    selectedSubgroup,
    checkSubgroup,
  };
};

export default useStudent;
