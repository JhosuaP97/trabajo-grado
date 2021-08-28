import axiosClient from "config/axios";

export const register = async (data) => {
  try {
    await axiosClient.post("/api/usuario/register", data);
  } catch (error) {
    console.log(error);
  }
};
