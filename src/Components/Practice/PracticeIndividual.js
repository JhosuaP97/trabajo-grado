import React, { useContext } from "react";

// Styles
import { Row, Title, WrapperRadio } from "Components/Form/styles";

// Data
import {
  optionsProducto,
  optionsGraficos,
  CORTE2,
  CORTE3,
  CORTE1,
} from "constants/index";

// Context
import FieldContext from "Context/Field/FieldContext";
import IndividualContext from "Context/Individual/IndividualContext";
// Components
import TextField from "Components/TextField";
import MultiSelectAll from "Components/MultiSelectAll";
import RadioButton from "Components/RadioButton";
import ProductIndividual from "Components/Individual/ProductIndividual";

const PracticeIndividual = () => {
  const fieldContext = useContext(FieldContext);
  const individualContext = useContext(IndividualContext);
  const { field, handleChangeField, handleChangeMultiSelectField } =
    fieldContext;
  const {
    individual,
    handleChangeIndividual,
    handleChangeMultiSelectIndividual,
  } = individualContext;

  const handleOnChange = (value, e) => {
    handleChangeMultiSelectField({ value, e });
    handleChangeMultiSelectIndividual(value, e);
  };

  const corte2 = () => (
    <Row>
      <MultiSelectAll
        isMulti={true}
        closeMenuOnSelect={false}
        name="graficos"
        options={optionsGraficos}
        value={field.graficos || ""}
        placeholder="Seleccionar gráficos"
        onChange={(value, e) => handleChangeMultiSelectField({ value, e })}
      />
    </Row>
  );

  const corte3 = () => (
    <Row>
      <WrapperRadio>
        <p>Tipo de muestreo:</p>
        <RadioButton
          name="tipoMuestreo"
          id="variables"
          value="variable"
          text="Variables"
          onChange={handleChangeField}
          checked={field.tipoMuestreo === "variable"}
        />
        <RadioButton
          name="tipoMuestreo"
          id="atributos"
          value="atributo"
          text="Atributos"
          onChange={handleChangeField}
          checked={field.tipoMuestreo === "atributo"}
        />
      </WrapperRadio>
    </Row>
  );

  return (
    <>
      {field.modulo !== "" ? (
        <>
          <Title>Práctica individual</Title>
          {field?.modulo?.label === CORTE2 && corte2()}
          {field?.modulo?.label === CORTE3 && corte3()}
          <Row>
            <MultiSelectAll
              isMulti={false}
              name="productoIndividual"
              widthSelect={"9rem"}
              closeMenuOnSelect={true}
              placeholder="Seleccionar producto"
              options={optionsProducto}
              value={individual?.productoIndividual || ""}
              onChange={(value, e) => handleOnChange(value, e)}
            />
            {field.modulo.label === CORTE1 && (
              <TextField
                type="number"
                name="unidadesIndividual"
                width={"7.625rem"}
                placeholder="Unidades"
                value={individual?.unidadesIndividual || ""}
                onChange={handleChangeIndividual}
              />
            )}

            {individual?.productoIndividual?.label && (
              <ProductIndividual arrayProduct={optionsProducto} />
            )}
          </Row>
        </>
      ) : (
        <p>Debes elegir un modulo</p>
      )}
    </>
  );
};

export default PracticeIndividual;
