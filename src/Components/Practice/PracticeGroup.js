import React, { useContext } from "react";
import { Row, Title, WrapperRadio } from "Components/Form/styles";
import MultiSelectAll from "Components/MultiSelectAll";
import RadioButton from "Components/RadioButton";
import SelectStyle from "Components/Select";
import ProductGroups from "Components/ProductGroups";
import useGroup from "hooks/useGroup";
import GroupContext from "Context/Group/GroupContext";

import {
  optionsGraficos,
  optionsNumGrupos,
  optionsProducto,
  CORTE2,
  CORTE3,
} from "constants/index";
import { handleChangeMultiSelect } from "helpers";

const PracticeGroup = ({ field, setFields, handleChange }) => {
  const groupContext = useContext(GroupContext);
  const { groups, AddNewGroup, handleChangeGroups } = groupContext;

  const { handleProductGroups } = useGroup();

  const handleAddNewGroup = (e) => {
    handleChange(e);
    AddNewGroup(e);
  };

  const corte2 = () => (
    <MultiSelectAll
      name="graficos"
      options={[{ label: "Todo los graficos", value: "*" }, ...optionsGraficos]}
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
            {field.modulo === CORTE2 && corte2()}
          </Row>
          {field.modulo === CORTE3 && corte3()}

          {groups.length > 0 && (
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
};

export default PracticeGroup;
