import React from "react";

// Styles
import { Row, Title } from "Components/Form/styles";

// Data
import { CORTE2, CORTE3, CORTE1, optionsNameProduct } from "constants/index";

// hooks
import useFieldForm from "hooks/useFieldForm";

// Components
import MultiSelectAll from "Components/MultiSelectAll";
import ProductIndividual from "Components/Individual/ProductIndividual";
import Courses from "Components/Courses";
import CoursesIndividual from "Components/Individual/CoursesIndividual";

import { Validations } from "helpers/Validation";

const PracticeIndividual = () => {
  const {
    Controller,
    control,
    modulo,
    tipoProductoIndividual,
    tipoPractica,
    errors,
  } = useFieldForm();

  const { validationField } = Validations();

  return (
    <>
      {modulo?.label !== undefined ? (
        <>
          <Title>Práctica individual</Title>
          {modulo?.label === CORTE2 && <Courses course={CORTE2} />}
          {modulo?.label === CORTE3 && <Courses course={CORTE3} />}
          <Row>
            <Controller
              name="individual.producto"
              control={control}
              rules={validationField.producto}
              shouldUnregister={tipoPractica === "individual"}
              render={({ field }) => (
                <MultiSelectAll
                  isMulti={false}
                  widthSelect={"10rem"}
                  closeMenuOnSelect={true}
                  placeholder="Seleccionar producto"
                  options={optionsNameProduct}
                  error={errors.individual?.producto}
                  {...field}
                />
              )}
            />

            {modulo.label === CORTE1 && (
              <CoursesIndividual coursesIndividual={CORTE1} />
            )}

            {tipoProductoIndividual?.label && (
              <ProductIndividual arrayProduct={tipoProductoIndividual.label} />
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
