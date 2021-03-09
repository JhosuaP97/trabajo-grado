import React from "react";
import { Dropdown } from "./styles";
import PropTypes from "prop-types";

const Select = ({ options, onChange, name, placeholder, value }) => {
  return (
    <Dropdown>
      <select
        className="formList"
        name={name}
        onChange={onChange}
        value={value}
        required
      >
        <option value=""></option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
      <label>{placeholder}</label>
    </Dropdown>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
