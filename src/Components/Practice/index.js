import React, { useEffect } from "react";

import { Row, Title, WrapperRadio } from "Components/Form/styles";
import MultiSelectAll from "Components/MultiSelectAll";
import RadioButton from "Components/RadioButton";
import SelectStyle from "Components/Select";
import ProductGroups from "Components/ProductGroups";
import useGroup from "hooks/useGroup";
import {
  optionsGraficos,
  optionsNumGrupos,
  optionsProducto,
} from "constants/index";
import { handleChangeMultiSelect } from "helpers";

const Practice = ({ practice, field, setFields, groups, handleChange }) => {
  const { AddNewGroup, handleChangeGroups, handleProductGroups } = useGroup();

  console.log(groups);

  const handleAddNewGroup = (e) => {
    console.log(e);
    handleChange(e);
    AddNewGroup(e);
  };

  if (practice === "grupo") {
    return (
      <>
        {field.modulo !== "" ? (
          <>
            <Title>Crear grupo</Title>
            <Row>
              <SelectStyle
                name="numGrupo"
                width={"7rem"}
                placeholder="Nº de grupos"
                options={optionsNumGrupos}
                value={field.numGrupo || ""}
                onChange={handleAddNewGroup}
              />
              {/* {field.modulo === "Corte 2" && (
                <MultiSelectAll
                  name="graficos"
                  options={[
                    { label: "Todo los graficos", value: "*" },
                    ...optionsGraficos,
                  ]}
                  value={field.graficos || ""}
                  placeholder="Seleccionar gráficos"
                  onChange={(value, e) =>
                    handleChangeMultiSelect(
                      value,
                      e,
                      optionsGraficos,
                      "graficos",
                      setFields,
                      field
                    )
                  }
                />
              )} */}
            </Row>
            {/* {field.modulo === "Corte 3" && (
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
            )} */}

            {groups && (
              <ProductGroups
                groups={groups}
                optionsProducto={optionsProducto}
                onChange={handleChangeGroups}
                products={handleProductGroups}
                integrantes={field.participantes}
                modulo={field.modulo}
                tipoMuestreo={field.tipoMuestreo}
              />
            )}
          </>
        ) : (
          <p>Debes elegir un modulo</p>
        )}
      </>
    );
  }

  if (practice === "individual") {
    return <div>Individual</div>;
  }
};

export default Practice;
