import React, { Fragment } from "react";
import { Field, Row } from "Components/Form/styles";
// import MultiSelectAll from "Components/MultiSelectAll";
import Select from "Components/Select";
import TextField from "Components/TextField";

const ProductGroups = ({
  groups,
  optionsProducto,
  onChange,
  products,
  integrantes,
}) => {
  return groups.map((group, index) => {
    return (
      <Fragment key={group.id}>
        <Row>
          <Field>
            <Select
              name="producto"
              placeholder="Seleccionar producto"
              options={optionsProducto}
              value={group.producto || ""}
              onChange={(e) => onChange(index, e)}
            />
          </Field>
          <Field>
            <TextField
              type="number"
              name="unidades"
              placeholder="Unidades"
              value={group.unidades || ""}
              onChange={(e) => onChange(index, e)}
            />
          </Field>
          {/* Genera los diferentes campos dependiendo del producto */}
          {group.producto &&
            products(
              group.producto,
              group,
              index,
              optionsProducto,
              integrantes
            )}
        </Row>
      </Fragment>
    );
  });
};

export default ProductGroups;
