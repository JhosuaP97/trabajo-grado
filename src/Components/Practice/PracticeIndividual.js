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
import SelectStyle from "Components/Select";
import TextField from "Components/TextField";
import MultiSelectAll from "Components/MultiSelectAll";
import RadioButton from "Components/RadioButton";
import ProductIndividual from "Components/Individual/ProductIndividual";

const PracticeIndividual = () => {
  const fieldContext = useContext(FieldContext);
  const individualContext = useContext(IndividualContext);
  const { field, handleChangeField, handleChangeMultiSelectField } =
    fieldContext;
  const { individual, handleChangeIndividual } = individualContext;

  const handleOnChange = (e) => {
    handleChangeField(e);
    handleChangeIndividual(e);
  };

  const corte2 = () => (
    <Row>
      <MultiSelectAll
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
          {field.modulo === CORTE2 && corte2()}
          {field.modulo === CORTE3 && corte3()}
          <Row>
            <SelectStyle
              width={"9rem"}
              name="productoIndividual"
              placeholder="Seleccionar producto"
              options={optionsProducto}
              value={individual.productoIndividual || ""}
              onChange={handleOnChange}
            />
            {field.modulo === CORTE1 && (
              <TextField
                type="number"
                name="unidadesIndividual"
                width={"7.625rem"}
                placeholder="Unidades"
                value={individual.unidadesIndividual || ""}
                onChange={handleOnChange}
              />
            )}

            {individual && <ProductIndividual arrayProduct={optionsProducto} />}
          </Row>
        </>
      ) : (
        <p>Debes elegir un modulo</p>
      )}
    </>
  );
};

export default PracticeIndividual;
