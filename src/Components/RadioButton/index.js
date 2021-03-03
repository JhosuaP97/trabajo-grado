import React from "react";
import { ContainerRadio, Radio } from "./styles";
const RadioButton = ({ id, text, name, value, onChange, checked }) => {
  return (
    <ContainerRadio>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <Radio />

      <label htmlFor={id}>{text}</label>
    </ContainerRadio>
  );
};

export default RadioButton;
