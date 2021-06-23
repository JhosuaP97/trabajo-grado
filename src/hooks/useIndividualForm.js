import { Controller, useFormContext } from "react-hook-form";
const useIndividualForm = () => {
  const { watch, register, control } = useFormContext();
  const modulo = watch("groups.modulo");
  const tipoProducto = watch("individual.productoIndividual");
  const tipoMuestreo = watch("field.tipoMuestreo");
  return {
    Controller,
    register,
    control,
    modulo,
    tipoProducto,
    tipoMuestreo,
  };
};

export default useIndividualForm;
