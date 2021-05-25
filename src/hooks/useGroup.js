import React, { Fragment, useContext } from "react";
import MultiSelectAll from "Components/MultiSelectAll";
import SelectStyle from "Components/Select";
import TextField from "Components/TextField";

import GroupContext from "Context/Group/GroupContext";

import {
  optionsSeveridadVariable,
  optionsSeveridadAtributos,
} from "constants/index";

const useGroup = () => {
  const groupContext = useContext(GroupContext);
  const { filterNames, handleChangeGroups, handleChangeMultiSelectGroup } =
    groupContext;

  const SIZE_FIELD = "7rem";

  function selectedMembers(members) {
    return members !== undefined && members.map((member) => member.label);
  }

  /* Función que recibe 5 parametros, productName hace referencia al valor que es escogido por
  el usuario por medio del select, group se usa para actualizar estado de ese componente y el index 
  se refiere a la fila que se encuentra el grupo, el que le sigue se refiere al arreglo de los productos 
  y el último parametro muestra los integrantes seleccionados en el campo de participantes
  */
  const handleProductGroups = ({
    group,
    index = null,
    arrayProduct,
    integrantes = [],
    modulo,
    tipoMuestreo,
  }) => {
    return arrayProduct
      .filter((product) => product.id === group.producto) //Se comprueba que el nombre recibido sea igual al del arreglo de productos
      .map((productSelected) => {
        return (
          <Fragment key={index}>
            {tipoMuestreo !== "atributo" && (
              <>
                <SelectStyle
                  name="cont"
                  width={SIZE_FIELD}
                  placeholder={productSelected.placeholder}
                  options={productSelected.contOptions}
                  value={group.cont || ""}
                  onChange={(e) => handleChangeGroups(index, e)}
                />

                <TextField
                  type="number"
                  name="tolerancia"
                  width={SIZE_FIELD}
                  placeholder="Tolerancia"
                  value={group.tolerancia || ""}
                  onChange={(e) => handleChangeGroups(index, e)}
                />
              </>
            )}

            {modulo === "Corte 3" && (
              <>
                <TextField
                  type="number"
                  name="lote"
                  width={SIZE_FIELD}
                  placeholder="Tamaño lote"
                  value={group.lote || ""}
                  onChange={(e) => handleChangeGroups(index, e)}
                />
                <SelectStyle
                  name="aql"
                  width={SIZE_FIELD}
                  placeholder="AQL"
                  options={[
                    { value: "0.10", label: "0.10" },
                    { value: "0.15", label: "0.15" },
                  ]}
                  value={group.aql || ""}
                  onChange={(e) => handleChangeGroups(index, e)}
                />
                <SelectStyle
                  name="severidad"
                  width={SIZE_FIELD}
                  placeholder="Severidad"
                  options={[
                    { value: "reducida", label: "Reducida" },
                    { value: "normal", label: "Normal" },
                    { value: "rigurosa", label: "Rigurosa" },
                  ]}
                  value={group.severidad || ""}
                  onChange={(e) => handleChangeGroups(index, e)}
                />
                <SelectStyle
                  name="nivelInspeccion"
                  width={SIZE_FIELD}
                  placeholder="Nivel de Inspección"
                  options={
                    tipoMuestreo && tipoMuestreo === "atributo"
                      ? optionsSeveridadAtributos
                      : optionsSeveridadVariable
                  }
                  value={group.nivelInspeccion || ""}
                  onChange={(e) => handleChangeGroups(index, e)}
                />
                {tipoMuestreo === "variable" && (
                  <MultiSelectAll
                    name="metodo"
                    widthSelect={165}
                    options={[
                      { value: "K", label: "K" },
                      { value: "M", label: "M" },
                      { value: "rango", label: "Rango" },
                    ]}
                    getOptionLabel={(option) => option.label}
                    getOptionValue={(option) => option.value}
                    value={group.metodo}
                    placeholder="Método"
                    onChange={(value, e) =>
                      handleChangeMultiSelectGroup(index, value, e)
                    }
                  />
                )}
              </>
            )}

            <MultiSelectAll
              name="atributos"
              options={productSelected.attributes}
              getOptionLabel={(option) => option.label}
              getOptionValue={(option) => option.id}
              value={group.atributos}
              placeholder="Atributos"
              onChange={(value, e) =>
                handleChangeMultiSelectGroup(index, value, e)
              }
            />

            <MultiSelectAll
              name="integrantes"
              options={
                filterNames !== undefined
                  ? integrantes.filter(
                      (integrante) =>
                        !selectedMembers(filterNames).includes(integrante.label)
                    )
                  : integrantes
              }
              getOptionLabel={(option) => option.label}
              getOptionValue={(option) => option.value}
              value={group.integrantes}
              placeholder="Integrantes"
              onChange={(value, e) =>
                handleChangeMultiSelectGroup(index, value, e)
              }
            />
          </Fragment>
        );
      });
  };

  return {
    handleProductGroups,
  };
};

export default useGroup;
