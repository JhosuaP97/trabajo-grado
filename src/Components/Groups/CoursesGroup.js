import React from "react";
// hooks
import useFieldForm from "hooks/useFieldForm";
// Components
import MultiSelectAll from "Components/MultiSelectAll";
import TextField from "Components/TextField";
// Validations
import { Validations } from "helpers/Validation";

// Data
import {
  ATRIBUTO,
  CORTE1,
  CORTE2,
  CORTE3,
  optionsAQL,
  optionsMetodo,
  optionsSeveridad,
  optionsSeveridadAtributos,
  optionsSeveridadVariable,
  VARIABLE,
  SIZE_FIELD,
} from "constants/index";

const CoursesGroup = ({ coursesGroup, id }) => {
  const { Controller, register, control, tipoMuestreo, errors, tipoPractica } =
    useFieldForm();

  const { validationField } = Validations();

  const Corte1 = () => (
    <TextField
      type="number"
      width={SIZE_FIELD}
      placeholder="Unidades"
      error={errors.groups?.group[id]?.unidades}
      {...register(`groups.group[${id}].unidades`, validationField.unidades)}
    />
  );

  const Corte2 = () => (
    <>
      <TextField
        type="number"
        width={SIZE_FIELD}
        placeholder="Subgrupos"
        error={errors.groups?.group[id]?.subgrupo}
        {...register(`groups.group[${id}].subgrupo`, validationField.subgrupo)}
      />

      <TextField
        type="number"
        width={SIZE_FIELD}
        placeholder="Tamaño Subg"
        error={errors.groups?.group[id]?.tamanioSubgrupo}
        {...register(
          `groups.group[${id}].tamanioSubgrupo`,
          validationField.tamanioSubgrupo
        )}
      />
    </>
  );

  const Corte3 = () => (
    <>
      <TextField
        type="number"
        width={SIZE_FIELD}
        placeholder="Tamaño lote"
        error={errors.groups?.group[id]?.lote}
        {...register(`groups.group[${id}].lote`, validationField.lote)}
      />
      <Controller
        name={`groups.group[${id}].aql`}
        control={control}
        rules={validationField.aql}
        shouldUnregister={tipoPractica === "grupo"}
        render={({ field }) => (
          <MultiSelectAll
            isMulti={false}
            widthSelect={SIZE_FIELD}
            placeholder="AQL"
            options={optionsAQL}
            error={errors.groups?.group[id]?.aql}
            {...field}
          />
        )}
      />

      <Controller
        name={`groups.group[${id}].severidad`}
        control={control}
        rules={validationField.severidad}
        shouldUnregister={tipoPractica === "grupo"}
        render={({ field }) => (
          <MultiSelectAll
            isMulti={false}
            widthSelect={SIZE_FIELD}
            placeholder="Severidad"
            options={optionsSeveridad}
            error={errors.groups?.group[id]?.severidad}
            {...field}
          />
        )}
      />

      <Controller
        name={`groups.group[${id}].nivelInspeccion`}
        control={control}
        rules={validationField.nivelInspeccion}
        shouldUnregister={tipoPractica === "grupo"}
        render={({ field }) => (
          <MultiSelectAll
            isMulti={false}
            widthSelect={SIZE_FIELD}
            placeholder="Nivel Inspeccion"
            options={
              tipoMuestreo && tipoMuestreo === ATRIBUTO
                ? optionsSeveridadAtributos
                : optionsSeveridadVariable
            }
            error={errors.groups?.group[id]?.nivelInspeccion}
            {...field}
          />
        )}
      />

      {tipoMuestreo === VARIABLE && (
        <Controller
          name={`groups.group[${id}].metodo`}
          control={control}
          rules={validationField.metodo}
          shouldUnregister={tipoPractica === "grupo"}
          render={({ field }) => (
            <MultiSelectAll
              isMulti={true}
              widthSelect={"12rem"}
              placeholder="Método"
              options={optionsMetodo}
              error={errors.groups?.group[id]?.metodo}
              {...field}
            />
          )}
        />
      )}
    </>
  );

  return (
    <>
      {coursesGroup === CORTE1 && Corte1()}
      {coursesGroup === CORTE2 && Corte2()}
      {coursesGroup === CORTE3 && Corte3()}
    </>
  );
};

export default CoursesGroup;
