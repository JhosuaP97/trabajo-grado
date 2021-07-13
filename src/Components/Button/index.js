import React from "react";
import { ButtonForm } from "./styles";
import PropTypes from "prop-types";

const Button = ({ type, children, styleButton, onClick, disabled }) => {
  return (
    <ButtonForm
      type={type}
      styleButton={styleButton}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonForm>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  styleButton: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
