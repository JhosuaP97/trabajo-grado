import React from "react";
import useIndividualForm from "hooks/useIndividualForm";

import TextField from "Components/TextField";
import MultiSelectAll from "Components/MultiSelectAll";
import {
  optionsSeveridadVariable,
  optionsSeveridadAtributos,
  optionsSeveridad,
  optionsAQL,
  optionsMetodo,
  CORTE2,
  CORTE3,
  ATRIBUTO,
  VARIABLE,
} from "constants/index";

const SIZE_FIELD = "7rem";

const CoursesIndividual = ({ coursesIndividual }) => {
  const { Controller, register, control, tipoMuestreo } = useIndividualForm();

  const Corte2 = () => (
    <>
      <TextField
        type="number"
        width={"7rem"}
        placeholder="Subgrupos"
        {...register(`individual.subgrupoIndividual`)}
      />
      <TextField
        type="number"
        width={"7rem"}
        placeholder="Tamaño Subg"
        {...register(`individual.tamanioSubgrupoIndividual`)}
      />
    </>
  );

  const Corte3 = () => (
    <>
      <TextField
        type="number"
        width={SIZE_FIELD}
        placeholder="Tamaño lote"
        {...register(`individual.loteIndividual`)}
      />

      <Controller
        name={`individual.aqlIndividual`}
        control={control}
        render={({ field }) => (
          <MultiSelectAll
            isMulti={false}
            closeMenuOnSelect={true}
            widthSelect={SIZE_FIELD}
            placeholder="AQL"
            options={optionsAQL}
            {...field}
          />
        )}
      />

      <Controller
        name={`individual.severidadIndividual`}
        control={control}
        render={({ field }) => (
          <MultiSelectAll
            isMulti={false}
            closeMenuOnSelect={true}
            widthSelect={SIZE_FIELD}
            placeholder="Severidad"
            options={optionsSeveridad}
            {...field}
          />
        )}
      />

      <Controller
        name={`individual.nivelInspeccionIndividual`}
        control={control}
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
            {...field}
          />
        )}
      />

      {tipoMuestreo === VARIABLE && (
        <Controller
          name={`individual.metodo`}
          control={control}
          render={({ field }) => (
            <MultiSelectAll
              isMulti={true}
              closeMenuOnSelect={false}
              name="metodoIndividual"
              widthSelect={165}
              options={optionsMetodo}
              placeholder="Método"
              getOptionLabel={(option) => option.label}
              getOptionValue={(option) => option.value}
              {...field}
            />
          )}
        />
      )}
    </>
  );
  return (
    <>
      {coursesIndividual === CORTE2 && Corte2()}
      {coursesIndividual === CORTE3 && Corte3()}
    </>
  );
};

export default CoursesIndividual;
