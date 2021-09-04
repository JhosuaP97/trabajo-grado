import axiosClient from "config/axios";

export const createInspectionProductC3 = async (data) => {
  try {
    await axiosClient.post("api/producto/corte3/inspeccion", data);
  } catch (error) {
    console.log(error);
  }
};
