import React, { Fragment } from "react";
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
    tipoPractica,
    setValue,
  } = useFieldForm();

  const { participants } = useTeacher();
  const { validationField } = Validations();

  const getAllMembers = (option) => {
    if (option.action === "select-option" && option.option.id === "*") {
      setValue(option.name, participants);
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
                name={`groups.group[${id}].cont`}
                control={control}
                rules={validationField.cont}
                shouldUnregister={tipoMuestreo === VARIABLE}
                render={({ field }) => (
                  <MultiSelectAll
                    widthSelect={SIZE_FIELD}
                    placeholder={productSelected.placeholder}
                    options={productSelected.contOptions}
                    {...field}
                    error={errors.groups?.group[id]?.cont}
                  />
                )}
              />

              <TextField
                type="number"
                width={SIZE_FIELD}
                placeholder="Tolerancia"
                error={errors.groups?.group[id]?.tolerancia}
                {...register(
                  `groups.group[${id}].tolerancia`,
                  {
                    valueAsNumber: true,
                    shouldUnregister: tipoMuestreo === VARIABLE,
                  },

                  validationField.tolerancia
                )}
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
              name={`groups.group[${id}].atributos`}
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
                  error={errors.groups?.group[id]?.atributos}
                  {...field}
                />
              )}
            />
          )}
          <Controller
            name={`groups.group[${id}].integrantes`}
            control={control}
            rules={validationField.integrantes}
            shouldUnregister={tipoPractica === "grupo"}
            render={({ field: { onChange, value, name } }) => (
              <MultiSelectAll
                widthSelect={"20rem"}
                isMulti={true}
                closeMenuOnSelect={false}
                options={[
                  { estudiante: "Todo el grupo", id: "*" },
                  ...participants,
                ]}
                // options={
                //   filterNames !== undefined
                //     ? participantes.filter(
                //         (integrante) =>
                //           !filterNames?.flat().includes(integrante.label)
                //       )
                //     : participantes
                // }
                getOptionLabel={(option) => option.estudiante}
                getOptionValue={(option) => option.id}
                name={name}
                placeholder="Integrantes"
                error={errors.groups?.group[id]?.integrantes}
                onChange={(e, option) => {
                  onChange(e);
                  getAllMembers(option);
                }}
                value={value}
              />
            )}
          />
        </Fragment>
      );
    });
};

export default SelectedProductGroup;
