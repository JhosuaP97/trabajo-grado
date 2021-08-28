import axiosClient from "config/axios";

export const registerPracticeModule1 = async (data) => {
  try {
    await axiosClient.post("/api/practica/corte1", data);
  } catch (error) {
    console.log(error);
  }
};

export const registerPracticeModule2 = async (data) => {
  try {
    await axiosClient.post("/api/practica/corte2", data);
  } catch (error) {
    console.log(error);
  }
};

export const registerPracticeModule3 = async (data) => {
  try {
    await axiosClient.post("/api/practica/corte3", data);
  } catch (error) {
    console.log(error);
  }
};

export const createInspectionProductC3 = async (data) => {
  try {
    await axiosClient.post("api/producto/corte3/inspeccion", data);
  } catch (error) {
    console.log(error);
  }
};

export const getCourseStudents = async (idCurso) => {
  try {
    const response = await axiosClient.get(`/api/cursos/curso/${idCurso}`);
    console.log(response.data);
    // return response;
  } catch (error) {
    console.log(error);
  }
};
