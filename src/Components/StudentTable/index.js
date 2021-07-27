import React, { useState } from "react";
import {
  StudentTableMainContainer,
  ContainerSelect,
  Table,
  TableContainer,
} from "./styles";
import MultiselectAll from "Components/MultiSelectAll";

const data = [
  {
    id: 1,
    producto: "Refresco1",
    contenido: "355 ml",
    gas: "15%",
    atributos: "Tapa floja",
    category: "aleatorio",
  },
  {
    id: 2,
    producto: "Refresco2",
    contenido: "355 ml",
    gas: "15%",
    atributos: "Tapa floja",
    category: "aleatorio",
  },
  {
    id: 3,
    producto: "Refresco3",
    contenido: "355 ml",
    gas: "15%",
    atributos: "Tapa floja",
    category: "aleatorio",
  },
  {
    id: 4,
    producto: "Refresco4",
    contenido: "355 ml",
    gas: "15%",
    atributos: "Tapa floja",
    category: "const",
  },
  {
    id: 5,
    producto: "Refresco5",
    contenido: "355 ml",
    gas: "15%",
    atributos: "Tapa floja",
    category: "const",
  },
  {
    id: 6,
    producto: "Refresco6",
    contenido: "355 ml",
    gas: "15%",
    atributos: "Tapa floja",
    category: "Variables",
  },
];

const options = [
  { label: "Atributos n aleatorio", value: "aleatorio" },
  { label: "Atributos n constante", value: "const" },
  { label: "Variables", value: "Variables" },
];
const StudentTable = () => {
  const [filterLabel, setFilterLabel] = useState({});
  const columns = data[0] && Object.keys(data[0]);

  const currentModule = "Corte 1";

  console.log(columns.slice(4, 5));

  let filterData = data.filter((item) => item.category !== filterLabel.value);

  const filterHeading = (columns) => {
    if (filterLabel.value === "Variables") {
      return columns.slice(1, -2);
    }

    if (filterLabel.value === "const") {
      return columns.slice(4, 5);
    }

    return columns;
  };

  const handleOnChange = (value) => {
    setFilterLabel(value);
  };

  return (
    <StudentTableMainContainer>
      {currentModule === "Corte 2" && (
        <ContainerSelect>
          <MultiselectAll
            name="features"
            isMulti={false}
            options={options}
            placeholder="Selecciona tipo de muestreo"
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => option.value}
            value={filterLabel.features}
            onChange={handleOnChange}
          />
          <MultiselectAll
            name="subgroup"
            isMulti={false}
            options={options}
            placeholder="Selecciona un subgrupo"
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => option.value}
            value={filterLabel.subgroup}
            onChange={handleOnChange}
          />
        </ContainerSelect>
      )}

      <TableContainer>
        <Table>
          <thead>
            <tr>
              {filterHeading(columns).map((heading) => (
                <th key={heading}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filterData.map((row) => (
              <tr>
                {filterHeading(columns).map((column) => (
                  <td>{row[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </StudentTableMainContainer>
  );
};

export default StudentTable;
