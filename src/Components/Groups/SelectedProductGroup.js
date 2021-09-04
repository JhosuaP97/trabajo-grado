import React, { Fragment, useEffect } from "react";
import useFieldForm from "hooks/useFieldForm";
// Components
import TextField from "Components/TextField";
import MultiSelectAll from "Components/MultiSelectAll";
import CoursesGroup from "./CoursesGroup";
// Validations
import { Validations } from "Validations/Validation";

// Data
import {
  ATRIBUTO,
  CORTE1,
  CORTE2,
  CORTE3,
  optionsProducto,
  SIZE_FIELD,
  VARIABLE,
} from "constants/index";
import useTeacher from "hooks/useTeacher";

const SelectedProductGroup = ({ selectedProduct, id }) => {
  const {
    Controller,
    register,
    control,
    tipoMuestreo,
    modulo,
    errors,
    setValue,
  } = useFieldForm();

  useEffect(() => {
    getStudents();
  }, []);

  const { getStudents, students } = useTeacher();
  const { validationField } = Validations();

  const getAllMembers = (option) => {
    if (
      option.action === "select-option" &&
      option.option.idEstudiante === "*"
    ) {
      setValue(option.name, students);
    }
  };

  return optionsProducto
    .filter((product) => product.label === selectedProduct)
    .map((productSelected) => {
      return (
        <Fragment key={id}>
          {(modulo?.label === CORTE1 ||
            modulo?.label === CORTE2 ||
            (modulo?.label === CORTE3 && tipoMuestreo !== ATRIBUTO)) && (
            <>
              <Controller
                name={`groups.${id}.cont`}
                control={control}
                rules={validationField.cont}
                shouldUnregister={tipoMuestreo === VARIABLE}
                render={({ field }) => (
                  <MultiSelectAll
                    widthSelect={SIZE_FIELD}
                    placeholder={productSelected.placeholder}
                    options={productSelected.contOptions}
                    {...field}
                    error={errors?.groups?.[id]?.cont}
                  />
                )}
              />

              <TextField
                type="number"
                width={SIZE_FIELD}
                placeholder="Tolerancia"
                error={errors?.groups?.[id]?.tolerancia}
                {...register(`groups.${id}.tolerancia`, {
                  ...validationField.tolerancia,
                  valueAsNumber: true,
                  shouldUnregister: tipoMuestreo === VARIABLE,
                })}
              />
            </>
          )}

          {modulo?.label === CORTE3 && (
            <CoursesGroup coursesGroup={CORTE3} id={id} />
          )}

          {(modulo?.label === CORTE1 ||
            modulo?.label === CORTE2 ||
            (modulo?.label === CORTE3 && tipoMuestreo === ATRIBUTO)) && (
            <Controller
              name={`groups.${id}.atributos`}
              control={control}
              rules={validationField.atributos}
              shouldUnregister={tipoMuestreo === ATRIBUTO}
              render={({ field }) => (
                <MultiSelectAll
                  widthSelect={"17rem"}
                  isMulti={true}
                  closeMenuOnSelect={false}
                  options={productSelected.attributes}
                  getOptionLabel={(option) => option.label}
                  getOptionValue={(option) => option.value}
                  placeholder="Atributos"
                  error={errors?.groups?.[id]?.atributos}
                  {...field}
                />
              )}
            />
          )}
          <Controller
            name={`groups.${id}.integrantes`}
            control={control}
            rules={validationField.integrantes}
            render={({ field: { onChange, name, value } }) => (
              <MultiSelectAll
                asyncSelect
                cacheOptions
                loadOptions={students}
                isMulti={true}
                defaultOptions={[
                  {
                    estudiante: "Todo el grupo",
                    idEstudiante: "*",
                  },
                  ...students,
                ]}
                widthSelect={"20rem"}
                closeMenuOnSelect={false}
                getOptionLabel={(option) => option.estudiante}
                getOptionValue={(option) => option.idEstudiante}
                placeholder="Integrantes"
                error={errors?.groups?.[id]?.integrantes}
                onChange={(e, option) => {
                  onChange(e);
                  getAllMembers(option);
                }}
                name={name}
                value={value}
              />
            )}
          />
        </Fragment>
      );
    });
};

export default SelectedProductGroup;
