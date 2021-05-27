import React, { Fragment } from "react";
import { Row } from "Components/Form/styles";
import SelectStyle from "Components/Select";
import TextField from "Components/TextField";
import { CORTE1, CORTE2 } from "constants/index";

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
    const corte1 = () => (
      <TextField
        type="number"
        name="unidades"
        width={"7.625rem"}
        placeholder="Unidades"
        value={group.unidades || ""}
        onChange={(e) => onChange(index, e)}
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
    );

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

          {modulo === CORTE1 && corte1()}
          {modulo === CORTE2 && corte2()}
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
