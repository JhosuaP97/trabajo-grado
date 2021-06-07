import React, { Fragment, useContext } from "react";

//Components
import MultiSelectAll from "Components/MultiSelectAll";
import SelectStyle from "Components/Select";
import TextField from "Components/TextField";

// Context
import FieldContext from "Context/Field/FieldContext";
import GroupContext from "Context/Group/GroupContext";

// Data
import {
  optionsSeveridadVariable,
  optionsSeveridadAtributos,
  optionsSeveridad,
  optionsAQL,
  CORTE3,
  ATRIBUTO,
  CORTE1,
  CORTE2,
} from "constants/index";

const ProductGroups = ({ group, index, arrayProduct }) => {
  const fieldContext = useContext(FieldContext);
  const { field } = fieldContext;
  const groupContext = useContext(GroupContext);
  const { filterNames, handleChangeGroups } = groupContext;

  const SIZE_FIELD = "7rem";

  function selectedMembers(members) {
    return members !== undefined && members.map((member) => member?.label);
  }

  return arrayProduct
    .filter((product) => product.id === group.producto) //Se comprueba que el nombre recibido sea igual al del arreglo de productos
    .map((productSelected) => {
      const corte3 = () => (
        <>
          <TextField
            type="number"
            name="lote"
            width={SIZE_FIELD}
            placeholder="Tamaño lote"
            value={group.lote || ""}
            onChange={(e) => handleChangeGroups({ index, e })}
          />
          <SelectStyle
            name="aql"
            width={SIZE_FIELD}
            placeholder="AQL"
            options={optionsAQL}
            value={group.aql || ""}
            onChange={(e) => handleChangeGroups({ index, e })}
          />
          <SelectStyle
            name="severidad"
            width={SIZE_FIELD}
            placeholder="Severidad"
            options={optionsSeveridad}
            value={group.severidad || ""}
            onChange={(e) => handleChangeGroups({ index, e })}
          />
          <SelectStyle
            name="nivelInspeccion"
            width={SIZE_FIELD}
            placeholder="Nivel de Inspección"
            options={
              field.tipoMuestreo && field.tipoMuestreo === ATRIBUTO
                ? optionsSeveridadAtributos
                : optionsSeveridadVariable
            }
            value={group.nivelInspeccion || ""}
            onChange={(e) => handleChangeGroups({ index, e })}
          />
        </>
      );

      return (
        <Fragment key={index}>
          {field.tipoMuestreo !== ATRIBUTO && (
            <>
              <SelectStyle
                name="cont"
                width={SIZE_FIELD}
                placeholder={productSelected.placeholder}
                options={productSelected.contOptions}
                value={group.cont || ""}
                onChange={(e) => handleChangeGroups({ index, e })}
              />

              <TextField
                type="number"
                name="tolerancia"
                width={SIZE_FIELD}
                placeholder="Tolerancia"
                value={group.tolerancia || ""}
                onChange={(e) => handleChangeGroups({ index, e })}
              />
            </>
          )}

          {field.modulo === CORTE3 && corte3()}

          {(field.modulo === CORTE1 ||
            field.modulo === CORTE2 ||
            field.modulo === CORTE3) &&
            field.tipoMuestreo !== ATRIBUTO && (
              <MultiSelectAll
                name="atributos"
                options={productSelected.attributes}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.id}
                value={group.atributos}
                placeholder="Atributos"
                onChange={(value, e) => handleChangeGroups({ index, value, e })}
              />
            )}

          <MultiSelectAll
            name="integrantes"
            options={
              filterNames !== undefined
                ? field.participantes.filter(
                    (integrante) =>
                      !selectedMembers(filterNames).includes(integrante.label)
                  )
                : field.participantes
            }
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => option.value}
            value={group.integrantes}
            placeholder="Integrantes"
            onChange={(value, e) => handleChangeGroups({ index, value, e })}
          />
        </Fragment>
      );
    });
};

export default ProductGroups;
