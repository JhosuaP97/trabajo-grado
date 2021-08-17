import React, { useEffect, useState } from "react";
import {
  StudentTableMainContainer,
  ContainerSelect,
  Table,
  TableContainer,
} from "./styles";
import MultiselectAll from "Components/MultiSelectAll";
import useStudent from "hooks/useStudent";
import { CORTE2 } from "constants/index";
const options = [
  { label: "Atributos n aleatorio", value: "AtributoNAleatorio" },
  { label: "Atributos n constante", value: "AtributoNConstante" },
  { label: "Variables", value: "AtributoNVariable" },
];

const titles = ["Producto", "Contenido", "Gas", "Atributos"];

const StudentTable = () => {
  const { products, modulo, subgroups } = useStudent();
  const [tipoMuestreo, setTipoMuestreo] = useState("");
  const [subGroupTitle, setsubGroupTitle] = useState("");

  const getNamesArray = Object.keys(subgroups);
  const getValuesArray = Object.values(subgroups);

  useEffect(() => {
    if (tipoMuestreo === "") {
      setTipoMuestreo(getNamesArray[0]);
      setsubGroupTitle(getValuesArray[0][0].title);
    }
  }, [tipoMuestreo, getNamesArray, getValuesArray, subgroups]);

  const selectSubgroups =
    tipoMuestreo === "" ? subgroups[getNamesArray[0]] : subgroups[tipoMuestreo];

  const arraySelectedSubgroup = subgroups[tipoMuestreo]?.filter(
    (sub) => sub.title === subGroupTitle
  );

  const handleOnChange = (value, e) => {
    console.log(value, e);
    setTipoMuestreo(value.value);
  };

  const handleOnChange2 = (value, e) => {
    setsubGroupTitle(value.title);
  };

  const listProducts =
    products &&
    products.map(({ nombre, contenido, cantidad_gas, atributos }) => (
      <tr>
        <td>{nombre}</td>
        <td>{contenido}</td>
        <td>{cantidad_gas}</td>
        <td>{atributos.join(" ,")}</td>
      </tr>
    ));

  const listSubgroup = () => {
    return (
      arraySelectedSubgroup &&
      arraySelectedSubgroup.map(({ grupos }) =>
        grupos.map(
          ({
            variablePrincipal,
            variableSecundaria,
            nombre,
            contenido,
            cantidad_gas,
            atributos,
          }) => (
            <tr>
              <td>{nombre}</td>
              {variablePrincipal ? (
                <td>{variablePrincipal}</td>
              ) : (
                <td>{contenido}</td>
              )}
              {variableSecundaria ? (
                <td>{variableSecundaria}</td>
              ) : (
                <td>{cantidad_gas}</td>
              )}
              {atributos && <td>{atributos.join(" ,")}</td>}
            </tr>
          )
        )
      )
    );
  };

  return (
    <StudentTableMainContainer>
      {modulo === CORTE2 && (
        <ContainerSelect>
          <MultiselectAll
            isMulti={false}
            options={options}
            defaultValue={options[0]}
            placeholder="Selecciona tipo de muestreo"
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => option.value}
            onChange={handleOnChange}
          />
          <MultiselectAll
            isMulti={false}
            options={selectSubgroups}
            defaultValue={selectSubgroups && selectSubgroups[0]}
            placeholder="Selecciona un subgrupo"
            getOptionLabel={(option) => option.title}
            getOptionValue={(option) => option.id}
            onChange={handleOnChange2}
            value={
              selectSubgroups &&
              selectSubgroups.filter(
                (element) => element.title === subGroupTitle
              )
            }
          />
        </ContainerSelect>
      )}

      <TableContainer>
        <Table>
          <thead>
            <tr>
              {titles.map((title) => (
                <th>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>{listSubgroup()}</tbody>
        </Table>
      </TableContainer>
    </StudentTableMainContainer>
  );
};

export default StudentTable;
