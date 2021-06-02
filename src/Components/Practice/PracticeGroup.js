import React, { useContext } from "react";

// Styles
import { Row, Title, WrapperRadio } from "Components/Form/styles";

// Components
import MultiSelectAll from "Components/MultiSelectAll";
import RadioButton from "Components/RadioButton";
import SelectStyle from "Components/Select";
import SelectedProductGroup from "Components/SelectedProductGroup";

// Hooks
import useGroup from "hooks/useGroup";

// Context
import FieldContext from "Context/Field/FieldContext";
import GroupContext from "Context/Group/GroupContext";

import {
  optionsGraficos,
  optionsNumGrupos,
  optionsProducto,
  CORTE2,
  CORTE3,
} from "constants/index";
// import { handleChangeMultiSelect } from "helpers";

const PracticeGroup = () => {
  const fieldContext = useContext(FieldContext);
  const { field, handleChangeField, handleChangeMultiSelectField } =
    fieldContext;
  const groupContext = useContext(GroupContext);
  const { groups, AddNewGroup } = groupContext;

  const { handleProductGroups } = useGroup();

  const handleAddNewGroup = (e) => {
    handleChangeField(e);
    AddNewGroup(e);
  };

  const corte2 = () => (
    <MultiSelectAll
      name="graficos"
      options={optionsGraficos}
      value={field.graficos || ""}
      placeholder="Seleccionar gráficos"
      onChange={(value, e) => handleChangeMultiSelectField(value, e)}
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
            <SelectedProductGroup
              optionsProduct={optionsProducto}
              products={handleProductGroups}
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
