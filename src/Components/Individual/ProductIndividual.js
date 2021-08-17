import React, { Fragment } from "react";

//Components
import TextField from "Components/TextField";
import MultiSelectAll from "Components/MultiSelectAll";
import CoursesIndividual from "Components/Individual/CoursesIndividual";

// hooks
import useFieldForm from "hooks/useFieldForm";

// Data
import {
  CORTE2,
  CORTE3,
  ATRIBUTO,
  CORTE1,
  optionsProducto,
  SIZE_FIELD,
} from "constants/index";

import { Validations } from "Validations/Validation";

const ProductIndividual = ({ arrayProduct }) => {
  const {
    Controller,
    register,
    control,
    modulo,
    tipoMuestreo,
    tipoPractica,
    errors,
  } = useFieldForm();

  const { validationField } = Validations();

  return optionsProducto
    .filter((product) => product.label === arrayProduct)
    .map((productSelected, id) => {
      return (
        <Fragment key={id}>
          {modulo.label === CORTE2 && (
            <CoursesIndividual coursesIndividual={CORTE2} />
          )}
          {tipoMuestreo !== ATRIBUTO && (
            <>
              <Controller
                name={`individual.cont`}
                control={control}
                shouldUnregister={tipoPractica === "individual"}
                rules={validationField.cont}
                render={({ field }) => (
                  <MultiSelectAll
                    isMulti={false}
                    closeMenuOnSelect={true}
                    widthSelect={SIZE_FIELD}
                    placeholder={productSelected.placeholder}
                    options={productSelected.contOptions}
                    error={errors.individual?.cont}
                    {...field}
                  />
                )}
              />

              <TextField
                type="number"
                width={SIZE_FIELD}
                placeholder="Tolerancia"
                error={errors.individual?.tolerancia}
                {...register(
                  `individual.tolerancia`,
                  validationField.tolerancia
                )}
              />
            </>
          )}
          {modulo.label === CORTE3 && (
            <CoursesIndividual coursesIndividual={CORTE3} />
          )}

          {(modulo?.label === CORTE1 ||
            modulo?.label === CORTE2 ||
            (modulo?.label === CORTE3 && tipoMuestreo === ATRIBUTO)) && (
            <Controller
              name={`individual.atributos`}
              control={control}
              rules={validationField.atributos}
              shouldUnregister={tipoPractica === "individual"}
              render={({ field }) => (
                <MultiSelectAll
                  isMulti={true}
                  widthSelect={"17rem"}
                  closeMenuOnSelect={false}
                  options={productSelected.attributes}
                  getOptionLabel={(option) => option.label}
                  getOptionValue={(option) => option.value}
                  placeholder="Atributos"
                  error={errors.individual?.atributos}
                  {...field}
                />
              )}
            />
          )}
        </Fragment>
      );
    });
};

export default ProductIndividual;
