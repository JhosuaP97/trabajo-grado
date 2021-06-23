import React from "react";

// Styles
import { Row, Title } from "Components/Form/styles";

// Data
import { CORTE2, CORTE3, CORTE1, optionsNameProduct } from "constants/index";

// hooks
import useIndividualForm from "hooks/useIndividualForm";

// Components
import TextField from "Components/TextField";
import MultiSelectAll from "Components/MultiSelectAll";
import ProductIndividual from "Components/Individual/ProductIndividual";
import Courses from "Components/Courses";

const PracticeIndividual = () => {
  const { Controller, register, control, modulo, tipoProducto } =
    useIndividualForm();

  return (
    <>
      {modulo?.label !== undefined ? (
        <>
          <Title>Práctica individual</Title>
          {modulo?.label === CORTE2 && <Courses course={CORTE2} />}
          {modulo?.label === CORTE3 && <Courses course={CORTE3} />}
          <Row>
            <Controller
              name="individual.productoIndividual"
              control={control}
              render={({ field }) => (
                <MultiSelectAll
                  isMulti={false}
                  widthSelect={"9rem"}
                  closeMenuOnSelect={true}
                  placeholder="Seleccionar producto"
                  options={optionsNameProduct}
                  {...field}
                />
              )}
            />

            {modulo.label === CORTE1 && (
              <TextField
                type="number"
                width={"7.625rem"}
                placeholder="Unidades"
                {...register("individual.unidadesIndividual")}
              />
            )}

            {tipoProducto?.label && (
              <ProductIndividual arrayProduct={tipoProducto.label} />
            )}
          </Row>
        </>
      ) : (
        <p>Debes seleccionar un modulo</p>
      )}
    </>
  );
};

export default PracticeIndividual;
