import React from "react";
import { ContainerField } from "./styles";
import PropTypes from "prop-types";
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

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextField;
