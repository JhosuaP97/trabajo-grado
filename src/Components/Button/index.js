import React from "react";
import { ButtonForm } from "./styles";
import PropTypes from "prop-types";

const Button = ({ type, textButton, fill }) => {
  return (
    <ButtonForm type={type} fill={fill}>
      {textButton}
    </ButtonForm>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
};

export default Button;
