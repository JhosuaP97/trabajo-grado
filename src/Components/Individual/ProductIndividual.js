import React, { Fragment, useContext } from "react";

//Components
import SelectStyle from "Components/Select";
import TextField from "Components/TextField";
import MultiSelectAll from "Components/MultiSelectAll";

// Context
import FieldContext from "Context/Field/FieldContext";
import IndividualContext from "Context/Individual/IndividualContext";

// Data
import {
  optionsSeveridadVariable,
  optionsSeveridadAtributos,
  optionsSeveridad,
  optionsAQL,
  optionsMetodo,
  CORTE2,
  CORTE3,
  ATRIBUTO,
  CORTE1,
} from "constants/index";

const SIZE_FIELD = "7rem";

const ProductIndividual = ({ arrayProduct }) => {
  const fieldContext = useContext(FieldContext);
  const { field } = fieldContext;
  const individualContext = useContext(IndividualContext);
  const {
    individual,
    handleChangeIndividual,
    handleChangeMultiSelectIndividual,
  } = individualContext;

  return arrayProduct
    .filter((product) => product.id === individual.productoIndividual) //Se comprueba que el nombre recibido sea igual al del arreglo de productos
    .map((productSelected, i) => {
      const corte2 = () => (
        <>
          <TextField
            type="number"
            name="subgrupoIndividual"
            width={"7rem"}
            placeholder="Subgrupos"
            value={individual.subgrupoIndividual || ""}
            onChange={handleChangeIndividual}
          />

          <TextField
            type="number"
            name="tamanioSubgrupoIndividual"
            width={"7rem"}
            placeholder="Tamaño Subg"
            value={individual.tamanioSubgrupoIndividual || ""}
            onChange={handleChangeIndividual}
          />
        </>
      );

      const corte3 = () => (
        <>
          <TextField
            type="number"
            name="loteIndividual"
            width={SIZE_FIELD}
            placeholder="Tamaño lote"
            value={individual.loteIndividual || ""}
            onChange={handleChangeIndividual}
          />
          <SelectStyle
            name="aqlIndividual"
            width={SIZE_FIELD}
            placeholder="AQL"
            options={optionsAQL}
            value={individual.aqlIndividual || ""}
            onChange={handleChangeIndividual}
          />
          <SelectStyle
            name="severidadIndividual"
            width={SIZE_FIELD}
            placeholder="Severidad"
            options={optionsSeveridad}
            value={individual.severidadIndividual || ""}
            onChange={handleChangeIndividual}
          />
          <SelectStyle
            name="nivelInspeccionIndividual"
            width={SIZE_FIELD}
            placeholder="Nivel de Inspección"
            options={
              field.tipoMuestreo && field.tipoMuestreo === "atributo"
                ? optionsSeveridadAtributos
                : optionsSeveridadVariable
            }
            value={individual.nivelInspeccionIndividual || ""}
            onChange={handleChangeIndividual}
          />
          {field.tipoMuestreo === "variable" && (
            <MultiSelectAll
              name="metodoIndividual"
              widthSelect={165}
              options={optionsMetodo}
              getOptionLabel={(option) => option.label}
              getOptionValue={(option) => option.value}
              value={individual.metodoIndividual}
              placeholder="Método"
              onChange={(value, e) =>
                handleChangeMultiSelectIndividual(value, e)
              }
            />
          )}
        </>
      );

      return (
        <Fragment key={i}>
          {field.modulo === CORTE2 && corte2()}

          {field.tipoMuestreo !== ATRIBUTO && (
            <>
              <SelectStyle
                name="contIndividual"
                width={SIZE_FIELD}
                placeholder={productSelected.placeholder}
                options={productSelected.contOptions}
                value={individual.contIndividual || ""}
                onChange={handleChangeIndividual}
              />
              <TextField
                type="number"
                width={SIZE_FIELD}
                name="toleranciaIndividual"
                placeholder="Tolerancia"
                value={individual.toleranciaIndividual || ""}
                onChange={handleChangeIndividual}
              />
            </>
          )}

          {field.modulo === CORTE3 && corte3()}

          {(field.modulo === CORTE1 ||
            field.modulo === CORTE2 ||
            field.modulo === CORTE3) &&
            field.tipoMuestreo !== ATRIBUTO && (
              <MultiSelectAll
                name="atributosIndividual"
                options={productSelected.attributes}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.id}
                value={individual.atributosIndividual}
                placeholder="Atributos"
                onChange={(value, e) =>
                  handleChangeMultiSelectIndividual(value, e)
                }
              />
            )}
        </Fragment>
      );
    });
};

export default ProductIndividual;
