import React, { Fragment, useContext } from "react";
import SelectStyle from "Components/Select";
import TextField from "Components/TextField";
import MultiSelectAll from "Components/MultiSelectAll";
import IndividualContext from "Context/Individual/IndividualContext";

import {
  optionsSeveridadVariable,
  optionsSeveridadAtributos,
} from "constants/index";

const SIZE_FIELD = "7rem";

const useIndividual = () => {
  const individualContext = useContext(IndividualContext);
  const { handleChangeIndividual, handleChangeMultiSelectIndividual } =
    individualContext;

  /* Función que recibe 3 parametros, productName hace referencia al valor que es escogido por
  el usuario por medio del select, field se usa para actualizar estado de ese componente
  el último se refiere al arreglo de los productos */

  const handleProductIndividual = (
    productName,
    individual,
    arrayProduct,
    modulo,
    tipoMuestreo
  ) => {
    return arrayProduct
      .filter((product) => product.id === productName) //Se comprueba que el nombre recibido sea igual al del arreglo de productos
      .map((productSelected, i) => {
        return (
          <Fragment key={i}>
            {modulo === "Corte 2" && (
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
            )}

            {tipoMuestreo !== "atributo" && (
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

            {modulo === "Corte 3" && (
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
                  options={[
                    { value: "0.10", label: "0.10" },
                    { value: "0.15", label: "0.15" },
                  ]}
                  value={individual.aqlIndividual || ""}
                  onChange={handleChangeIndividual}
                />
                <SelectStyle
                  name="severidadIndividual"
                  width={SIZE_FIELD}
                  placeholder="Severidad"
                  options={[
                    { value: "reducida", label: "Reducida" },
                    { value: "normal", label: "Normal" },
                    { value: "rigurosa", label: "Rigurosa" },
                  ]}
                  value={individual.severidadIndividual || ""}
                  onChange={handleChangeIndividual}
                />
                <SelectStyle
                  name="nivelInspeccionIndividual"
                  width={SIZE_FIELD}
                  placeholder="Nivel de Inspección"
                  options={
                    tipoMuestreo && tipoMuestreo === "atributo"
                      ? optionsSeveridadAtributos
                      : optionsSeveridadVariable
                  }
                  value={individual.nivelInspeccionIndividual || ""}
                  onChange={handleChangeIndividual}
                />
                {tipoMuestreo === "variable" && (
                  <MultiSelectAll
                    name="metodoIndividual"
                    widthSelect={165}
                    options={[
                      { value: "K", label: "K" },
                      { value: "M", label: "M" },
                      { value: "rango", label: "Rango" },
                    ]}
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
            )}
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
          </Fragment>
        );
      });
  };

  return {
    handleProductIndividual,
  };
};

export default useIndividual;
