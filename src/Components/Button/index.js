import React from "react";
import { ButtonForm } from "./styles";
const Button = ({ type, textButton, fill }) => {
  return (
    <ButtonForm type={type} fill={fill}>
      {textButton}
    </ButtonForm>
  );
};

export default Button;
