import React, { Fragment, useState } from "react";
import { Field } from "Components/Form/styles";
import Select from "Components/Select";
import TextField from "Components/TextField";

const initialStateIndividual = {
  productoIndividual: "",
  unidadesIndividual: 0,
  contIndividual: 0,
  toleranciaIndividual: 0,
};

const useIndividual = () => {
  const [individual, setIndividual] = useState(initialStateIndividual);

  const handleChangeIndividual = (e) => {
    setIndividual({
      ...individual,
      [e.target.name]: e.target.value,
    });
  };

  /* Función que recibe 3 parametros, productName hace referencia al valor que es escogido por
  el usuario por medio del select, field se usa para actualizar estado de ese componente
  el último se refiere al arreglo de los productos */

  const handleProductIndividual = (productName, field, arrayProduct) => {
    return arrayProduct
      .filter((product) => product.id === productName) //Se comprueba que el nombre recibido sea igual al del arreglo de productos
      .map((productSelected, i) => {
        return (
          <Fragment key={i}>
            <Field>
              <Select
                name="contIndividual"
                placeholder={productSelected.placeholder}
                options={productSelected.contOptions}
                value={field.contIndividual || ""}
                onChange={handleChangeIndividual}
              />
            </Field>
            <Field>
              <TextField
                type="number"
                name="toleranciaIndividual"
                placeholder="Tolerancia"
                value={field.toleranciaIndividual || ""}
                onChange={handleChangeIndividual}
              />
            </Field>
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
