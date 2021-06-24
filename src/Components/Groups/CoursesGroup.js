import React from "react";
import useGroupForm from "hooks/useGroupForm";
import MultiSelectAll from "Components/MultiSelectAll";

import TextField from "Components/TextField";

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
} from "constants/index";

const SIZE_FIELD = "8rem";

const CoursesGroup = ({ coursesGroup, id }) => {
  const { Controller, register, control, tipoMuestreo, errors, getValues } =
    useGroupForm();

  const Corte1 = () => (
    <TextField
      type="number"
      width={SIZE_FIELD}
      placeholder="Unidades"
      error={errors.groups?.group[id]?.unidades}
      {...register(`groups.group[${id}].unidades`, {
        validate: {
          required: (value) => {
            if (!value && getValues("field.modulo.label") === CORTE1) {
              return "Digite las unidades";
            }
            return true;
          },
        },
      })}
    />
  );

  const Corte2 = () => (
    <>
      <TextField
        type="number"
        width={SIZE_FIELD}
        placeholder="Subgrupos"
        error={errors.groups?.group[id]?.subgrupo}
        {...register(`groups.group[${id}].subgrupo`, {
          validate: {
            required: (value) => {
              if (!value && getValues("field.modulo.label") === CORTE2) {
                return "Digite los subgrupos";
              }
              return true;
            },
          },
        })}
      />

      <TextField
        type="number"
        width={SIZE_FIELD}
        placeholder="Tamaño Subg"
        error={errors.groups?.group[id]?.tamanioSubgrupo}
        {...register(`groups.group[${id}].tamanioSubgrupo`, {
          validate: {
            required: (value) => {
              if (!value && getValues("field.modulo.label") === CORTE2) {
                return "Digite tamaño subgrupo";
              }
              return true;
            },
          },
        })}
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
        {...register(`groups.group[${id}].lote`, {
          validate: {
            required: (value) => {
              if (!value && getValues("field.modulo.label") === CORTE3) {
                return "Digite tamaño lote";
              }
              return true;
            },
          },
        })}
      />
      <Controller
        name={`groups.group[${id}].aql`}
        control={control}
        rules={{
          validate: {
            required: (value) => {
              if (!value && getValues("field.modulo.label") === CORTE3) {
                return "Seleccione un valor";
              }
              return true;
            },
          },
        }}
        render={({ field }) => (
          <MultiSelectAll
            widthSelect={"7rem"}
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
        rules={{
          validate: {
            required: (value) => {
              if (!value && getValues("field.modulo.label") === CORTE3) {
                return "Seleccione la severidad";
              }
              return true;
            },
          },
        }}
        render={({ field }) => (
          <MultiSelectAll
            widthSelect={"7.8rem"}
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
        rules={{
          validate: {
            required: (value) => {
              if (!value && getValues("field.modulo.label") === CORTE3) {
                return "Seleccione un nivel";
              }
              return true;
            },
          },
        }}
        render={({ field }) => (
          <MultiSelectAll
            widthSelect={"7rem"}
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
          rules={{
            validate: {
              required: (value) => {
                if (
                  !value &&
                  getValues("field.modulo.label") === CORTE3 &&
                  getValues("fiel.tipoMuestreo") === VARIABLE
                ) {
                  return "Seleccione un método";
                }
                return true;
              },
            },
          }}
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
