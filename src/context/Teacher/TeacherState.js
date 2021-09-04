import React, { useReducer } from "react";
import TeacherContext from "./TeacherContext";
import TeacherReducer from "./TeacherReducer";
import axiosClient from "config/axios";
import toast from "react-hot-toast";
import {
  COURSE_SUCCESS,
  GET_COURSES,
  GET_ACTUAL_COURSE,
  GET_STUDENTS,
  GET_ALL_PRACTICES_SUCCESS,
  GET_ALL_PRACTICES_ERROR,
  GET_GROUPS_PRACTICE_1,
  GET_GROUPS_PRACTICE_2,
  GET_GROUPS_PRACTICE_3,
} from "types/index";

const TeacherState = ({ children }) => {
  const initialState = {
    courses: [],
    course: null,
    students: [],
    practices: [],
    groupspractices: [],
    isloading: false,
  };

  const [state, dispatch] = useReducer(TeacherReducer, initialState);

  const createNewCourse = async (data) => {
    try {
      const response = axiosClient.post("/api/cursos", data);

      // Alerta que muestra el estado de creación del curso
      toast.promise(response, {
        loading: "Creando curso...",
        success: (res) => {
          dispatch({
            type: COURSE_SUCCESS,
            payload: res.data.curso,
          });
          return `${res.data.curso.nombreCurso} creado satisfactoriamente`;
        },
        error: "Error al crear el curso",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getCourses = async () => {
    try {
      const response = await axiosClient.get("/api/cursos");
      dispatch({
        type: GET_COURSES,
        payload: response.data.cursos,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getActualCourse = (courseId) => {
    dispatch({
      type: GET_ACTUAL_COURSE,
      payload: courseId,
    });
  };

  const getStudents = async () => {
    try {
      const response = await axiosClient.get("/api/estudiante");

      dispatch({
        type: GET_STUDENTS,
        payload: response.data.estudiantes,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getAllPractices = async (idCurso) => {
    try {
      const response = await axiosClient.get(`/api/practicas/${idCurso}`);
      dispatch({
        type: GET_ALL_PRACTICES_SUCCESS,
        payload: response.data.practices,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_PRACTICES_ERROR,
      });
      console.log(error);
    }
  };

  const getGroupsPractice1 = async (idPractica) => {
    try {
      const response = await axiosClient.get(
        `/api/practicas/practica1/${idPractica}`
      );

      dispatch({
        type: GET_GROUPS_PRACTICE_1,
        payload: response.data.grupos,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getGroupsPractice2 = async (idPractica) => {
    try {
      const response = await axiosClient.get(
        `/api/practicas/practica2/${idPractica}`
      );

      dispatch({
        type: GET_GROUPS_PRACTICE_2,
        payload: response.data.grupos,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getGroupsPractice3 = async (idPractica) => {
    try {
      const response = await axiosClient.get(
        `/api/practicas/practica3/${idPractica}`
      );

      dispatch({
        type: GET_GROUPS_PRACTICE_3,
        payload: response.data.grupos,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TeacherContext.Provider
      value={{
        courses: state.courses,
        course: state.course,
        students: state.students,
        practices: state.practices,
        groupspractices: state.groupspractices,
        isloading: state.isloading,
        createNewCourse,
        getCourses,
        getActualCourse,
        getStudents,
        getAllPractices,
        getGroupsPractice1,
        getGroupsPractice2,
        getGroupsPractice3,
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
};
export default TeacherState;
