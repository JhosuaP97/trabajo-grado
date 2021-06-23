import React, { Fragment, useContext } from "react";

//Components
import MultiSelectAll from "Components/MultiSelectAll";
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
  optionsMetodo,
  VARIABLE,
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
    .filter((product) => product.label === group.producto.label) //Se comprueba que el nombre recibido sea igual al del arreglo de productos
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
          <MultiSelectAll
            name="aql"
            isMulti={false}
            widthSelect={SIZE_FIELD}
            placeholder="AQL"
            options={optionsAQL}
            value={group.aql || ""}
            onChange={(value, e) => handleChangeGroups({ index, value, e })}
          />
          <MultiSelectAll
            name="severidad"
            isMulti={false}
            widthSelect={"8rem"}
            placeholder="Severidad"
            options={optionsSeveridad}
            value={group.severidad || ""}
            onChange={(value, e) => handleChangeGroups({ index, value, e })}
          />
          <MultiSelectAll
            name="nivelInspeccion"
            isMulti={false}
            widthSelect={SIZE_FIELD}
            placeholder="Nivel de Inspección"
            options={
              field.tipoMuestreo && field.tipoMuestreo === ATRIBUTO
                ? optionsSeveridadAtributos
                : optionsSeveridadVariable
            }
            value={group.nivelInspeccion || ""}
            onChange={(value, e) => handleChangeGroups({ index, value, e })}
          />
          {field.tipoMuestreo === VARIABLE && (
            <MultiSelectAll
              isMulti={true}
              name="metodo"
              widthSelect={"12rem"}
              placeholder="Método"
              options={optionsMetodo}
              value={group.metodo || ""}
              onChange={(value, e) => handleChangeGroups({ index, value, e })}
            />
          )}
        </>
      );

      return (
        <Fragment key={index}>
          {field.tipoMuestreo !== ATRIBUTO && (
            <>
              <MultiSelectAll
                name="cont"
                widthSelect={SIZE_FIELD}
                placeholder={productSelected.placeholder}
                options={productSelected.contOptions}
                value={group.cont || ""}
                onChange={(value, e) => handleChangeGroups({ index, value, e })}
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

          {groups.modulo.label === CORTE3 && corte3()}

          {(groups.modulo.label === CORTE1 ||
            groups.modulo.label === CORTE2 ||
            groups.modulo.label === CORTE3) &&
            field.tipoMuestreo !== ATRIBUTO && (
              <MultiSelectAll
                name="atributos"
                widthSelect={"17rem"}
                isMulti={true}
                closeMenuOnSelect={false}
                options={productSelected.attributes}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
                value={group.atributos}
                placeholder="Atributos"
                onChange={(value, e) => handleChangeGroups({ index, value, e })}
              />
            )}

          <MultiSelectAll
            isMulti={true}
            closeMenuOnSelect={false}
            widthSelect="20rem"
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
