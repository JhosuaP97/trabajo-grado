import React, { useContext } from "react";

// Styles
import { Row, Title, WrapperRadio } from "Components/Form/styles";

// Components
import MultiSelectAll from "Components/MultiSelectAll";
import RadioButton from "Components/RadioButton";
import SelectedProductGroup from "Components/Groups/SelectedProductGroup";

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

const PracticeGroup = () => {
  const fieldContext = useContext(FieldContext);
  const { field, handleChangeField, handleChangeMultiSelectField } =
    fieldContext;
  const groupContext = useContext(GroupContext);
  const { groups, AddNewGroup } = groupContext;

  const handleAddNewGroup = (value, e) => {
    handleChangeMultiSelectField({ value, e });
    AddNewGroup(value);
  };

  const corte2 = () => (
    <MultiSelectAll
      isMulti={true}
      name="graficos"
      options={optionsGraficos}
      value={field.graficos || ""}
      placeholder="Seleccionar gráficos"
      onChange={(value, e) => handleChangeMultiSelectField({ value, e })}
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
      {field.modulo.label !== "" ? (
        <>
          <Title>Crear grupo</Title>
          <Row>
            <MultiSelectAll
              isMulti={false}
              name="numGrupo"
              widthSelect={"12rem"}
              closeMenuOnSelect={true}
              placeholder="Nº de grupos"
              options={optionsNumGrupos}
              value={field.numGrupo || ""}
              onChange={(value, e) => handleAddNewGroup(value, e)}
            />

            {field.modulo.label === CORTE2 && corte2()}
          </Row>
          {field.modulo.label === CORTE3 && corte3()}

          {groups.length > 0 && (
            <SelectedProductGroup optionsProduct={optionsProducto} />
          )}
        </>
      ) : (
        <p>Debes elegir un modulo</p>
      )}
    </>
  );
};

export default PracticeGroup;
