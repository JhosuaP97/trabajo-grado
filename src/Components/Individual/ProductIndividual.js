import React, { Fragment } from "react";

//Components
import TextField from "Components/TextField";
import MultiSelectAll from "Components/MultiSelectAll";
import CoursesIndividual from "Components/Individual/CoursesIndividual";

// hooks
import useIndividualForm from "hooks/useIndividualForm";

// Data
import {
  CORTE2,
  CORTE3,
  ATRIBUTO,
  CORTE1,
  optionsProducto,
  VARIABLE,
} from "constants/index";

const SIZE_FIELD = "7rem";

const ProductIndividual = ({ arrayProduct }) => {
  const { Controller, register, control, modulo, tipoMuestreo } =
    useIndividualForm();

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
                name={`individual.contIndividual`}
                control={control}
                render={({ field }) => (
                  <MultiSelectAll
                    isMulti={false}
                    closeMenuOnSelect={true}
                    widthSelect={SIZE_FIELD}
                    placeholder={productSelected.placeholder}
                    options={productSelected.contOptions}
                    {...field}
                  />
                )}
              />

              <TextField
                type="number"
                width={SIZE_FIELD}
                placeholder="Tolerancia"
                {...register(`individual.toleranciaIndividual`)}
              />
            </>
          )}
          {modulo.label === CORTE3 && (
            <CoursesIndividual coursesIndividual={CORTE3} />
          )}

          {(modulo.label === CORTE1 ||
            modulo.label === CORTE2 ||
            modulo.label === CORTE3) &&
            tipoMuestreo !== VARIABLE && (
              <Controller
                name={`individual.atributosIndividual`}
                control={control}
                render={({ field }) => (
                  <MultiSelectAll
                    isMulti={true}
                    widthSelect={"17rem"}
                    closeMenuOnSelect={false}
                    options={productSelected.attributes}
                    getOptionLabel={(option) => option.label}
                    getOptionValue={(option) => option.value}
                    placeholder="Atributos"
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
