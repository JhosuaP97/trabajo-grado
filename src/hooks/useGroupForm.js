import { Controller, useFormContext } from "react-hook-form";

const useGroupForm = () => {
  const {
    watch,
    register,
    control,
    reset,
    formState: { errors },
  } = useFormContext();
  const modulo = watch("groups.modulo");
  const tipoProducto = watch("individual.productoIndividual");
  const tipoMuestreo = watch("field.tipoMuestreo");
  const watchGroups = watch("groups.numGrupo");
  const participantes = watch("field.participantes");
  return {
    Controller,
    register,
    watch,
    errors,
    control,
    modulo,
    tipoProducto,
    tipoMuestreo,
    watchGroups,
    participantes,
    reset,
  };
};

export default useGroupForm;
