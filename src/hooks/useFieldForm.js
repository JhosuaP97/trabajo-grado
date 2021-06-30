import { Controller, useFormContext } from "react-hook-form";

const useFieldForm = () => {
  const {
    watch,
    register,
    getValues,
    control,
    reset,
    formState: { errors },
    setValue,
  } = useFormContext();
  const modulo = watch("field.modulo");
  const tipoProductoIndividual = watch("individual.producto");
  const tipoPractica = watch("field.tipoPractica");
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
    tipoProductoIndividual,
    tipoMuestreo,
    watchGroups,
    participantes,
    tipoPractica,
    reset,
    getValues,
    setValue,
  };
};

export default useFieldForm;
