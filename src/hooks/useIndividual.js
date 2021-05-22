import React, { Fragment, useState } from "react";
import Select from "Components/Select";
import TextField from "Components/TextField";
import MultiSelectAll from "Components/MultiSelectAll";

const initialStateIndividual = {
  productoIndividual: "",
  unidadesIndividual: 0,
  contIndividual: 0,
  toleranciaIndividual: 0,
  atributos: [],
};

const SIZE_FIELD = "7rem";

const useIndividual = () => {
  const [individual, setIndividual] = useState(initialStateIndividual);

  const handleChangeIndividual = (e) => {
    setIndividual({
      ...individual,
      [e.target.name]: e.target.value,
    });
  };

  function handleChangeMultiSelectIndividual(value, e) {
    console.log(value, e);
  }

  /* Función que recibe 3 parametros, productName hace referencia al valor que es escogido por
  el usuario por medio del select, field se usa para actualizar estado de ese componente
  el último se refiere al arreglo de los productos */

  const handleProductIndividual = (productName, field, arrayProduct) => {
    return arrayProduct
      .filter((product) => product.id === productName) //Se comprueba que el nombre recibido sea igual al del arreglo de productos
      .map((productSelected, i) => {
        return (
          <Fragment key={i}>
            <Select
              name="contIndividual"
              width={SIZE_FIELD}
              placeholder={productSelected.placeholder}
              options={productSelected.contOptions}
              value={field.contIndividual || ""}
              onChange={handleChangeIndividual}
            />

            <TextField
              type="number"
              width={SIZE_FIELD}
              name="toleranciaIndividual"
              placeholder="Tolerancia"
              value={field.toleranciaIndividual || ""}
              onChange={handleChangeIndividual}
            />

            <MultiSelectAll
              name="atributosIndividual"
              options={productSelected.attributes}
              getOptionLabel={(option) => option.label}
              getOptionValue={(option) => option.id}
              value={field.atributos}
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
    individual,
    handleChangeIndividual,
    handleProductIndividual,
  };
};

export default useIndividual;
