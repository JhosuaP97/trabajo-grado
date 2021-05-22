import React, { Fragment, useState } from "react";
import TextField from "Components/TextField";
import { Title, Row, FormStyle, WrapperRadio, ButtonActions } from "./styles";

//Components
import SelectStyle from "Components/Select";
import Button from "Components/Button";
import MultiSelectAll from "Components/MultiSelectAll";
import RadioButton from "Components/RadioButton";
import TextArea from "Components/TextArea";
import ProductGroups from "Components/ProductGroups";
import Practice from "Components/Practice";

import { handleChangeMultiSelect } from "helpers";
//Data
import {
  optionsParticipantes,
  optionsModulos,
  optionsProducto,
  optionsNumGrupos,
  optionsGraficos,
} from "constants/index";

import useGroup from "hooks/useGroup";
import useIndividual from "hooks/useIndividual";

const initialStateForm = {
  practica: "",
  modulo: "",
  participantes: [],
  tipoPractica: "",
  descripcion: "",
  numGrupo: 0,
};

const Form = () => {
  const [field, setFields] = useState(initialStateForm);
  const { groups, AddNewGroup, handleChangeGroups, handleProductGroups } =
    useGroup();

  const { individual, handleChangeIndividual, handleProductIndividual } =
    useIndividual();

  /* Función que recibe un evento, este evento evalua si el name que recibe 
  termina en individual, lo añade al estado individual sino lo añade
  al estado fields. */

  const handleChange = (e) => {
    setFields({
      ...field,
      [e.target.name]: e.target.value,
    });
  };
  /* Función que recibe un evento que con el valor que le llega añade un nuevo grupo
  al estado groups  */

  const handleAddNewGroup = (e) => {
    handleChange(e);
    AddNewGroup(e);
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

  const generatePractice = (practice) => {
    if (practice === "grupo") {
      return (
        <>
          {field.modulo !== "" ? (
            <>
              <Title>Crear grupo</Title>
              <Row>
                <SelectStyle
                  name="numGrupo"
                  width={"7rem"}
                  placeholder="Nº de grupos"
                  options={optionsNumGrupos}
                  value={field.numGrupo || ""}
                  onChange={handleAddNewGroup}
                />
                {field.modulo === "Corte 2" && (
                  <MultiSelectAll
                    name="graficos"
                    options={[
                      { label: "Todo los graficos", value: "*" },
                      ...optionsGraficos,
                    ]}
                    value={field.graficos || ""}
                    placeholder="Seleccionar gráficos"
                    onChange={(value, e) =>
                      handleChangeMultiSelect(
                        value,
                        e,
                        optionsGraficos,
                        "graficos",
                        setFields,
                        field
                      )
                    }
                  />
                )}
              </Row>
              {field.modulo === "Corte 3" && (
                <Row>
                  <WrapperRadio>
                    <p>Tipo de muestreo:</p>
                    <RadioButton
                      name="tipoMuestreo"
                      id="variables"
                      value="variable"
                      text="Variables"
                      onChange={handleChange}
                      checked={field.tipoMuestreo === "variable"}
                    />
                    <RadioButton
                      name="tipoMuestreo"
                      id="atributos"
                      value="atributo"
                      text="Atributos"
                      onChange={handleChange}
                      checked={field.tipoMuestreo === "atributo"}
                    />
                  </WrapperRadio>
                </Row>
              )}

              {groups.length > 0 && (
                <ProductGroups
                  groups={groups}
                  optionsProducto={optionsProducto}
                  onChange={handleChangeGroups}
                  products={handleProductGroups}
                  integrantes={field.participantes}
                  modulo={field.modulo}
                  tipoMuestreo={field.tipoMuestreo}
                />
              )}
            </>
          ) : (
            <p>Debes elegir un modulo</p>
          )}
        </>
      );
    }

    if (practice === "individual") {
      return (
        <>
          <Title>Práctica individual</Title>
          <Row>
            <SelectStyle
              width={"9rem"}
              name="productoIndividual"
              placeholder="Seleccionar producto"
              options={optionsProducto}
              value={individual.productoIndividual || ""}
              onChange={handleChangeIndividual}
            />

            <TextField
              type="number"
              name="unidadesIndividual"
              width={"7.625rem"}
              placeholder="Unidades"
              value={individual.unidadesIndividual || ""}
              onChange={handleChangeIndividual}
            />

            {individual.productoIndividual &&
              handleProductIndividual(
                individual.productoIndividual,
                individual,
                optionsProducto
              )}
          </Row>
        </>
      );
    }
  };

  return (
    <FormStyle onSubmit={handleSubmit} noValidate>
      <Title>Configurar nueva práctica</Title>
      <Row>
        <TextField
          type="text"
          name="practica"
          placeholder="Nombre de la práctica"
          value={field.practica || ""}
          onChange={handleChange}
        />
        <SelectStyle
          name="modulo"
          width={"7rem"}
          placeholder="Módulo"
          options={optionsModulos}
          value={field.modulo || ""}
          onChange={handleChange}
        />
        <MultiSelectAll
          name="participantes"
          options={[
            { label: "Todo el grupo", value: "*" },
            ...optionsParticipantes,
          ]}
          value={field.participantes || ""}
          placeholder="Participantes"
          onChange={(value, e) =>
            handleChangeMultiSelect(
              value,
              e,
              optionsParticipantes,
              "participantes",
              setFields,
              field
            )
          }
        />
      </Row>
      {/* Tipo de práctica */}
      <Row>
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
      </Row>
      {/* Descripción de la práctica */}
      <Row>
        <TextArea
          name="descripcion"
          placeholder="Descripción"
          value={field.descripcion || ""}
          onChange={handleChange}
        />
      </Row>
      {/* Crear grupo o práctica individual */}
      {field.tipoPractica && generatePractice(field.tipoPractica)}
      {/* {field.tipoPractica && (
        <Practice
          practice={field.tipoPractica}
          field={field}
          setFields={setFields}
          groups={groups}
          handleChange={handleChange}
        />
      )} */}

      <Row>
        <ButtonActions>
          <Button type="button" textButton="Cancelar" fill="false" />
          <Button type="submit" textButton="Publicar" fill="true" />
        </ButtonActions>
      </Row>
    </FormStyle>
  );
};

export default Form;
