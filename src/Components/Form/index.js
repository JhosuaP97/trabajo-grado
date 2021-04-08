import React, { Fragment, useState } from "react";
import TextField from "Components/TextField";
import {
  Title,
  Row,
  Field,
  FormStyle,
  WrapperRadio,
  ButtonActions,
} from "./styles";
import Select from "Components/Select";
import Button from "Components/Button";
import MultiSelectAll from "Components/MultiSelectAll";
import RadioButton from "Components/RadioButton";
import TextArea from "Components/TextArea";
import {
  optionsParticipantes,
  optionsModulos,
  optionsProducto,
  optionsNumGrupos,
} from "constants/index";

const initialStateForm = {
  practica: "",
  modulo: "",
  participantes: [],
  tipoPractica: "",
  descripcion: "",
  numGrupo: 0,
};

const initialStateIndividual = {
  productoIndividual: "",
  unidadesIndividual: 0,
  contIndividual: 0,
  toleranciaIndividual: 0,
};

const Form = () => {
  const [field, setFields] = useState(initialStateForm);
  const [groups, setGroups] = useState([]);
  const [individual, setIndividual] = useState(initialStateIndividual);

  /* Función que recibe un evento, este evento evalua si el name que recibe 
  termina en individual, lo añade al estado individual sino lo añade
  al estado fields. */

  const handleChange = (e) => {
    let valueString = e.target.name;

    valueString.endsWith("Individual")
      ? setIndividual({
          ...individual,
          [e.target.name]: e.target.value,
        })
      : setFields({
          ...field,
          [e.target.name]: e.target.value,
        });
  };

  function handleChangeMultiSelect(value, e) {
    console.log(value, e);
    if (e.name === "participantes") {
      if (e.action === "select-option" && e.option.value === "*") {
        setFields({
          ...field,
          [e.name]: optionsParticipantes,
        });
      } else if (e.action === "clear") {
        setFields({
          ...field,
          [e.name]: [],
        });
      } else if (e.action === "remove-value") {
        setFields({
          ...field,
          [e.name]: value.filter((option) => option.value !== "*"),
        });
      } else {
        setFields({
          ...field,
          [e.name]: value,
        });
      }
    }
  }

  /* Función que recibe un evento que con el valor que le llega añade un nuevo grupo
  al estado groups  */

  const handleAddNewGroup = (e) => {
    handleChange(e);
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

  /* Función que recibe 3 parametros, productName hace referencia al valor que es escogido por
  el usuario por medio del select, group se usa para actualizar estado de ese componente y el index 
  se refiere a la fila que se encuentra el grupo. */
  const handleProductGroups = (productName, group, index) => {
    return optionsProducto
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
                name={productSelected.attributesName}
                options={productSelected.attributes}
                value={field[productSelected.attributesName] || ""}
                placeholder="Atributos"
                onChange={(e) => handleChangeGroups(index, e)}
              />
            </Field>
          </Fragment>
        );
      });
  };

  /* Función que recibe 2 parametros, productName hace referencia al valor que es escogido por
  el usuario por medio del select, field se usa para actualizar estado de ese componente */
  const handleProductIndividual = (productName, field) => {
    return optionsProducto
      .filter((product) => product.id === productName) //Se comprueba que el nombre recibido sea igual al del arreglo de productos
      .map((productSelected, i) => {
        console.log(field);
        return (
          <Fragment key={i}>
            <Field>
              <Select
                name="contIndividual"
                placeholder={productSelected.placeholder}
                options={productSelected.contOptions}
                value={field.contIndividual || ""}
                onChange={handleChange}
              />
            </Field>
            <Field>
              <TextField
                type="number"
                name="toleranciaIndividual"
                placeholder="Tolerancia"
                value={field.toleranciaIndividual || ""}
                onChange={handleChange}
              />
            </Field>
          </Fragment>
        );
      });
  };

  /* Función que envía todos los datos del formulario */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Formulario",
      field,
      "Grupos",
      groups,
      "Individual",
      individual
    );
  };

  return (
    <FormStyle onSubmit={handleSubmit} noValidate>
      <Title>Configurar nueva práctica</Title>
      <Row>
        <Field>
          <TextField
            type="text"
            name="practica"
            placeholder="Nombre de la práctica"
            value={field.practica || ""}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Select
            name="modulo"
            placeholder="Módulo"
            options={optionsModulos}
            value={field.modulo || ""}
            onChange={handleChange}
          />
        </Field>
        <Field select>
          <MultiSelectAll
            name="participantes"
            options={[
              { label: "Todo el grupo", value: "*" },
              ...optionsParticipantes,
            ]}
            value={field.participantes || ""}
            placeholder="Participantes"
            onChange={handleChangeMultiSelect}
          />
        </Field>
      </Row>
      {/* Tipo de práctica */}
      <Row>
        <Field>
          <WrapperRadio>
            <p>Tipo de práctica:</p>
            <RadioButton
              name="tipoPractica"
              id="grupos"
              value="grupo"
              text="Por grupos"
              onChange={handleChange}
              checked={field.tipoPractica === "grupo"}
            />
            <RadioButton
              name="tipoPractica"
              id="individual"
              value="individual"
              text="Individual"
              onChange={handleChange}
              checked={field.tipoPractica === "individual"}
            />
          </WrapperRadio>
        </Field>
      </Row>
      {/* Descripción de la práctica */}
      <Row>
        <Field>
          <TextArea
            name="descripcion"
            placeholder="Descripción"
            cols="88"
            rows="7"
            value={field.descripcion || ""}
            onChange={handleChange}
          />
        </Field>
      </Row>
      {/* Crear grupo o práctica individual */}
      {field.tipoPractica === "grupo" && (
        <>
          <Title>Crear grupo</Title>
          <Row>
            <Field>
              <Select
                name="numGrupo"
                placeholder="Nº de grupos"
                options={optionsNumGrupos}
                value={field.numGrupo || ""}
                onChange={handleAddNewGroup}
              />
            </Field>
          </Row>
          {groups &&
            groups.map((group, i) => {
              return (
                <Fragment key={group.id}>
                  <Row>
                    <Field>
                      <Select
                        name="producto"
                        placeholder="Seleccionar producto"
                        options={optionsProducto}
                        value={group.producto || ""}
                        onChange={(e) => handleChangeGroups(i, e)}
                      />
                    </Field>
                    <Field>
                      <TextField
                        type="number"
                        name="unidades"
                        placeholder="Unidades"
                        value={group.unidades || ""}
                        onChange={(e) => handleChangeGroups(i, e)}
                      />
                    </Field>
                    {group.producto &&
                      handleProductGroups(group.producto, group, i)}
                  </Row>
                </Fragment>
              );
            })}
        </>
      )}
      {field.tipoPractica === "individual" && (
        <>
          <Title>Práctica individual</Title>
          <Row>
            <Field>
              <Select
                name="productoIndividual"
                placeholder="Seleccionar producto"
                options={optionsProducto}
                value={individual.productoIndividual || ""}
                onChange={handleChange}
              />
            </Field>
            <Field>
              <TextField
                type="number"
                name="unidadesIndividual"
                placeholder="Unidades"
                value={individual.unidadesIndividual || ""}
                onChange={handleChange}
              />
            </Field>
            {individual.productoIndividual &&
              handleProductIndividual(
                individual.productoIndividual,
                individual
              )}
          </Row>
        </>
      )}
      <Row>
        <ButtonActions>
          <Field>
            <Button type="button" textButton="Cancelar" fill="false" />
          </Field>
          <Field>
            <Button type="submit" textButton="Publicar" fill="true" />
          </Field>
        </ButtonActions>
      </Row>
    </FormStyle>
  );
};

export default Form;
