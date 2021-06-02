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
import IndividualContext from "Context/Individual/IndividualContext";

// hooks
import useIndividual from "hooks/useIndividual";

// helpers
import { handleChangeMultiSelect } from "helpers";

// Components
import SelectStyle from "Components/Select";
import TextField from "Components/TextField";
import MultiSelectAll from "Components/MultiSelectAll";
import RadioButton from "Components/RadioButton";

const PracticeIndividual = ({ field, setFields, handleChange }) => {
  const individualContext = useContext(IndividualContext);
  const { individual, handleChangeIndividual } = individualContext;
  const { handleProductIndividual } = useIndividual();

  const handleOnChange = (e) => {
    handleChange(e);
    handleChangeIndividual(e);
  };

  const corte2 = () => (
    <Row>
      <MultiSelectAll
        name="graficos"
        options={[
          { label: "Todo los graficos", value: "*" },
          ...optionsGraficos,
        ]}
        value={field.graficos || ""}
        placeholder="Seleccionar gráficos"
        onChange={(value, e) =>
          handleChangeMultiSelect({
            value: value,
            event: e,
            options: optionsGraficos,
            componentName: "graficos",
            setState: setFields,
            state: field,
          })
        }
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
          onChange={handleChange}
          checked={field.tipoMuestreo === "variable"}
        />
        <RadioButton
          name="tipoMuestreo"
          id="atributos"
          value="atributo"
          text="Atributos"
          onChange={handleChange}
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
              value={field.productoIndividual || ""}
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

            {individual &&
              handleProductIndividual(
                field.productoIndividual,
                individual,
                optionsProducto,
                field.modulo,
                field.tipoMuestreo
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
