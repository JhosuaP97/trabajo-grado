import React from "react";
import { ContainerRadio, Radio } from "./styles";
import PropTypes from "prop-types";

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

RadioButton.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default RadioButton;
