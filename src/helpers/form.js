import axiosClient from "config/axios";

export const createInspectionProductC3 = async (data) => {
  try {
    await axiosClient.post("api/producto/corte3/inspeccion", data);
  } catch (error) {
    console.log(error);
  }
};

export function formatDate(date) {
  const actualDate = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("en-US").format(actualDate);
  return formattedDate;
}
