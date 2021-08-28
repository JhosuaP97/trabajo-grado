import React, { useReducer } from "react";
import TeacherContext from "./TeacherContext";
import TeacherReducer from "./TeacherReducer";
import axiosClient from "config/axios";
import { GET_PARTICIPANTS } from "types/index";

const TeacherState = ({ children }) => {
  const initialState = {
    participants: [],
  };

  const [state, dispatch] = useReducer(TeacherReducer, initialState);

  const getCourseStudents = async (idCurso) => {
    try {
      const response = await axiosClient.get(`/api/cursos/curso/${idCurso}`);
      dispatch({
        type: GET_PARTICIPANTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TeacherContext.Provider
      value={{ participants: state.participants, getCourseStudents }}
    >
      {children}
    </TeacherContext.Provider>
  );
};
export default TeacherState;
