import React from "react";
import useFieldForm from "hooks/useFieldForm";

import TextField from "Components/TextField";
import MultiSelectAll from "Components/MultiSelectAll";
import {
  optionsSeveridadVariable,
  optionsSeveridadAtributos,
  optionsSeveridad,
  optionsAQL,
  optionsMetodo,
  CORTE1,
  CORTE2,
  CORTE3,
  ATRIBUTO,
  VARIABLE,
  SIZE_FIELD,
} from "constants/index";

import { Validations } from "helpers/Validation";

const CoursesIndividual = ({ coursesIndividual }) => {
  const { Controller, register, control, tipoMuestreo, tipoPractica, errors } =
    useFieldForm();

  const { validationField } = Validations();

  const Corte1 = () => (
    <TextField
      type="number"
      width={SIZE_FIELD}
      placeholder="Unidades"
      error={errors.individual?.unidades}
      shouldUnregister={tipoPractica === "individual"}
      {...register("individual.unidades", validationField.unidades)}
    />
  );

  const Corte2 = () => (
    <>
      <TextField
        type="number"
        width={SIZE_FIELD}
        placeholder="Subgrupos"
        error={errors.individual?.subgrupo}
        {...register(`individual.subgrupo`, validationField.subgrupo)}
      />
      <TextField
        type="number"
        width={SIZE_FIELD}
        placeholder="Tamaño Subg"
        error={errors.individual?.tamanioSubgrupo}
        {...register(
          `individual.tamanioSubgrupo`,
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
        error={errors.individual?.lote}
        {...register(`individual.lote`, validationField.lote)}
      />

      <Controller
        name={`individual.aql`}
        control={control}
        shouldUnregister={tipoPractica === "individual"}
        rules={validationField.aql}
        render={({ field }) => (
          <MultiSelectAll
            isMulti={false}
            closeMenuOnSelect={true}
            widthSelect={SIZE_FIELD}
            placeholder="AQL"
            options={optionsAQL}
            {...field}
            error={errors.individual?.aql}
          />
        )}
      />

      <Controller
        name={`individual.severidad`}
        control={control}
        shouldUnregister={tipoPractica === "individual"}
        rules={validationField.severidad}
        render={({ field }) => (
          <MultiSelectAll
            isMulti={false}
            closeMenuOnSelect={true}
            widthSelect={SIZE_FIELD}
            placeholder="Severidad"
            options={optionsSeveridad}
            error={errors.individual?.severidad}
            {...field}
          />
        )}
      />

      <Controller
        name={`individual.nivelInspeccion`}
        control={control}
        shouldUnregister={tipoPractica === "individual"}
        rules={validationField.nivelInspeccion}
        render={({ field }) => (
          <MultiSelectAll
            isMulti={false}
            closeMenuOnSelect={true}
            widthSelect={SIZE_FIELD}
            placeholder="Nivel de Inspección"
            options={
              tipoMuestreo && tipoMuestreo === ATRIBUTO
                ? optionsSeveridadAtributos
                : optionsSeveridadVariable
            }
            error={errors.individual?.nivelInspeccion}
            {...field}
          />
        )}
      />

      {tipoMuestreo === VARIABLE && (
        <Controller
          name={`individual.metodo`}
          control={control}
          shouldUnregister={tipoPractica === "individual"}
          rules={validationField.metodo}
          render={({ field }) => (
            <MultiSelectAll
              isMulti={true}
              closeMenuOnSelect={false}
              widthSelect={"12rem"}
              options={optionsMetodo}
              placeholder="Método"
              getOptionLabel={(option) => option.label}
              getOptionValue={(option) => option.value}
              {...field}
              error={errors.individual?.metodo}
            />
          )}
        />
      )}
    </>
  );
  return (
    <>
      {coursesIndividual === CORTE1 && Corte1()}
      {coursesIndividual === CORTE2 && Corte2()}
      {coursesIndividual === CORTE3 && Corte3()}
    </>
  );
};

export default CoursesIndividual;
