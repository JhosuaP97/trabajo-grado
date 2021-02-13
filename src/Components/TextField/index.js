import React from "react";
import { ContainerField } from "./styles";
/* import "./styles.css"; */
const TextField = ({ type, name, placeholder }) => {
  return (
    <ContainerField>
      <input className="formInput" type={type} name={name} placeholder=" " />
      <label>{placeholder}</label>
    </ContainerField>
  );
};

export default TextField;
