import React, { Fragment, useState } from "react";
import { Field } from "Components/Form/styles";
import MultiSelectAll from "Components/MultiSelectAll";
import Select from "Components/Select";
import TextField from "Components/TextField";
const useGroup = () => {
  const [groups, setGroups] = useState([]);
  const [filterNames, setFilterNames] = useState([]);

  const AddNewGroup = (e) => {
    const newGroup = [...Array(Number(e.target.value)).keys()].map((index) => {
      index++;
      return {
        id: new Date().getUTCMilliseconds() + index,
        producto: "",
        unidades: 0,
        cont: 0,
        tolerancia: 0,
        atributos: [],
        integrantes: [],
      };
    });

    setFilterNames([]);

    setGroups(newGroup);
  };

  /* Función que recibe un indice y un evento, donde el indice es traido del mapeado del estado groups,
  con este se sabe cual es la fila que se desea actualizar y con el evento se obtiene el nombre del campo
  y el valor del mismo */
  const handleChangeGroups = (index, e) => {
    const values = [...groups];
    values[index][e.target.name] = e.target.value;
    setGroups(values);
  };

  function handleChangeMultiSelectGroup(index, value, e) {
    const updatedGroup = { ...groups[index], [e.name]: value };
    const updatedGroups = [
      ...groups.slice(0, index),
      updatedGroup,
      ...groups.slice(index + 1),
    ];
    setGroups(updatedGroups);

    if (e.name === "integrantes") {
      const newFilterNames = updatedGroups
        .map((group) => group.integrantes)
        .flat(1);

      setFilterNames(newFilterNames);
    }
  }
  function selectedMembers(members) {
    return members !== undefined && members.map((member) => member.label);
  }

  /* Función que recibe 5 parametros, productName hace referencia al valor que es escogido por
  el usuario por medio del select, group se usa para actualizar estado de ese componente y el index 
  se refiere a la fila que se encuentra el grupo, el que le sigue se refiere al arreglo de los productos 
  y el último parametro muestra los integrantes seleccionados en el campo de participantes
  */
  const handleProductGroups = (
    productName,
    group,
    index,
    arrayProduct,
    integrantes
  ) => {
    return arrayProduct
      .filter((product) => product.id === productName) //Se comprueba que el nombre recibido sea igual al del arreglo de productos
      .map((productSelected) => {
        return (
          <Fragment key={index}>
            <Field>
              <Select
                name="cont"
                placeholder={productSelected.placeholder}
                options={productSelected.contOptions}
                value={group.cont || ""}
                onChange={(e) => handleChangeGroups(index, e)}
              />
            </Field>
            <Field>
              <TextField
                type="number"
                name="tolerancia"
                placeholder="Tolerancia"
                value={group.tolerancia || ""}
                onChange={(e) => handleChangeGroups(index, e)}
              />
            </Field>
            <Field select>
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
            </Field>
            <Field select>
              <MultiSelectAll
                name="integrantes"
                options={
                  filterNames !== undefined
                    ? integrantes.filter(
                        (integrante) =>
                          !selectedMembers(filterNames).includes(
                            integrante.label
                          )
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
            </Field>
          </Fragment>
        );
      });
  };

  return {
    groups,
    AddNewGroup,
    handleChangeGroups,
    handleProductGroups,
  };
};

export default useGroup;
