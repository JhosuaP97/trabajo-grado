import React, { Fragment } from "react";
import { Row } from "Components/Form/styles";
// import MultiSelectAll from "Components/MultiSelectAll";
import SelectStyle from "Components/Select";
import TextField from "Components/TextField";

const ProductGroups = ({
  groups,
  optionsProducto,
  onChange,
  products,
  integrantes,
  modulo,
  tipoMuestreo,
}) => {
  return groups.map((group, index) => {
    return (
      <Fragment key={group.id}>
        <Row>
          <SelectStyle
            name="producto"
            width={"9rem"}
            placeholder="Seleccionar producto"
            options={optionsProducto}
            value={group.producto || ""}
            onChange={(e) => onChange(index, e)}
          />

          {modulo === "Corte 1" && (
            <TextField
              type="number"
              name="unidades"
              width={"7.625rem"}
              placeholder="Unidades"
              value={group.unidades || ""}
              onChange={(e) => onChange(index, e)}
            />
          )}
          {modulo === "Corte 2" && (
            <>
              <TextField
                type="number"
                name="subgrupo"
                width={"7rem"}
                placeholder="Subgrupos"
                value={group.subgrupo || ""}
                onChange={(e) => onChange(index, e)}
              />

              <TextField
                type="number"
                name="tamanioSubgrupo"
                width={"7rem"}
                placeholder="Tamaño Subg"
                value={group.tamanioSubgrupo || ""}
                onChange={(e) => onChange(index, e)}
              />
            </>
          )}
          {/* Genera los diferentes campos dependiendo del producto */}
          {group.producto &&
            products({
              group: group,
              index: index,
              arrayProduct: optionsProducto,
              integrantes: integrantes,
              modulo: modulo,
              tipoMuestreo: tipoMuestreo,
            })}
        </Row>
      </Fragment>
    );
  });
};

export default ProductGroups;
