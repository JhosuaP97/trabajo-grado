import React, { useContext, Fragment } from "react";

// Styles
import { Row } from "Components/Form/styles";

// Components
import TextField from "Components/TextField";

// Data
import { CORTE1, CORTE2 } from "constants/index";

// Context
import GroupContext from "Context/Group/GroupContext";
import FieldContext from "Context/Field/FieldContext";
import ProductGroups from "./ProductGroups";
import MultiSelectAll from "Components/MultiSelectAll";

const SelectedProductGroup = ({ optionsProduct }) => {
  const fieldContext = useContext(FieldContext);
  const { field } = fieldContext;
  const groupContext = useContext(GroupContext);
  const { groups, handleChangeGroups } = groupContext;

  return groups.map((group, index) => {
    const corte1 = () => (
      <TextField
        type="number"
        name="unidades"
        width={"7.625rem"}
        placeholder="Unidades"
        value={group.unidades || ""}
        onChange={(e) => handleChangeGroups({ index, e })}
      />
    );

    const corte2 = () => (
      <>
        <TextField
          type="number"
          name="subgrupo"
          width={"7rem"}
          placeholder="Subgrupos"
          value={group.subgrupo || ""}
          onChange={(e) => handleChangeGroups({ index, e })}
        />

        <TextField
          type="number"
          name="tamanioSubgrupo"
          width={"7rem"}
          placeholder="Tamaño Subg"
          value={group.tamanioSubgrupo || ""}
          onChange={(e) => handleChangeGroups({ index, e })}
        />
      </>
    );

    return (
      <Fragment key={group.id}>
        <Row group>
          <MultiSelectAll
            isMulti={false}
            widthSelect={"10rem"}
            name="producto"
            options={optionsProduct}
            value={group.producto || ""}
            placeholder="Seleccionar producto"
            onChange={(value, e) => handleChangeGroups({ index, value, e })}
          />
          {field.modulo.label === CORTE1 && corte1()}
          {field.modulo.label === CORTE2 && corte2()}
          {/* Genera los diferentes campos dependiendo del producto */}

          {group?.producto?.label && (
            <ProductGroups
              group={group}
              index={index}
              arrayProduct={optionsProduct}
            />
          )}
        </Row>
      </Fragment>
    );
  });
};

export default SelectedProductGroup;
