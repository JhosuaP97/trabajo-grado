import React, { Fragment } from "react";
import useFieldForm from "hooks/useFieldForm";
// Components
import TextField from "Components/TextField";
import MultiSelectAll from "Components/MultiSelectAll";
import CoursesGroup from "./CoursesGroup";

// Validations
import { Validations } from "helpers/Validation";

// Data
import {
  ATRIBUTO,
  CORTE1,
  CORTE2,
  CORTE3,
  optionsProducto,
  SIZE_FIELD,
} from "constants/index";

const SelectedProductGroup = ({ selectedProduct, id }) => {
  const {
    Controller,
    register,
    control,
    participantes,
    tipoMuestreo,
    modulo,
    errors,
    tipoPractica,
  } = useFieldForm();

  const { validationField } = Validations();

  return optionsProducto
    .filter((product) => product.label === selectedProduct)
    .map((productSelected) => {
      // TODO: Filtrar el nombre de integrantes para que no se repitan.
      // function selectedMembers(members) {
      //   return members !== undefined && members.map((member) => member?.label);
      // }

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
                shouldUnregister={tipoPractica === "grupo"}
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
              shouldUnregister={tipoPractica === "grupo"}
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
            render={({ field }) => (
              <MultiSelectAll
                widthSelect={"20rem"}
                isMulti={true}
                closeMenuOnSelect={false}
                options={participantes}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
                placeholder="Integrantes"
                error={errors.groups?.group[id]?.integrantes}
                {...field}
              />
            )}
          />
        </Fragment>
      );
    });
};

export default SelectedProductGroup;
