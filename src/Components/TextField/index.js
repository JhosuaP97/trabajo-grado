import React from "react";
import { ContainerField } from "./styles";
/* import "./styles.css"; */
const TextField = ({ type, name, placeholder, value, onChange }) => {
  return (
    <ContainerField>
      <input
        className="formInput"
        type={type}
        name={name}
        placeholder=" "
        value={value}
        onChange={onChange}
      />
      <label>{placeholder}</label>
    </ContainerField>
  );
};

export default TextField;
