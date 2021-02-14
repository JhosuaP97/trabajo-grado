import React, { useState } from "react";
import TextField from "Components/TextField";
import { Title, Row, Field, FormStyle } from "./styles";
import Select from "Components/Select";
import Button from "Components/Button";

const Form = () => {
  const [field, setFields] = useState([]);

  // const classes = useStyle();

  const handleChange = (e) => {
    setFields({
      ...field,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <FormStyle>
      <Title>Configurar nueva práctica</Title>
      <Row>
        <Field>
          <TextField
            type="text"
            name="practica"
            placeholder="Nombre practica"
            value={field.practica || ""}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Select
            placeholder="Módulo"
            options={["Corte 1", "Corte 2", "Corte 3"]}
            name="module"
            onChange={handleChange}
            value={field.module || ""}
          />
        </Field>

        <Field>
          <Button
            type="button"
            textButton="Añadir nuevo producto"
            fill="false"
          />
        </Field>
      </Row>
      <Title>Productos</Title>
      <Row>
        <Field>
          <Select
            placeholder="Seleccionar producto"
            options={[
              "Refrescos",
              "Bolsas de arroz",
              "Pitillos",
              "Barra de chocolate",
              "Barra de jabon",
              "Cepillo de dientes",
            ]}
            name="producto"
            onChange={handleChange}
            value={field.producto || ""}
          />
        </Field>
        <Field>
          <TextField
            type="text"
            name="lote"
            placeholder="Lote"
            value={field.lote || ""}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <TextField
            type="text"
            name="aceptables"
            placeholder="Aceptables"
            value={field.aceptables || ""}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Select
            placeholder="Atributo"
            options={[
              "Tapa floja",
              "Etiqueta suelta",
              "Textos ilegibles",
              "Envase sucio",
            ]}
            name="atributo"
            onChange={handleChange}
            value={field.atributo || ""}
          />
        </Field>
      </Row>
      <Row>
        <Field>
          <Button type="button" textButton="Cancelar" fill="false" />
        </Field>
        <Field>
          <Button type="button" textButton="Publicar" fill="true" />
        </Field>
      </Row>
    </FormStyle>
  );
};

export default Form;
