import React from "react";
import { Dropdown, List } from "./styles";
const Select = ({ options, onChange, name, placeholder, value }) => {
  return (
    <Dropdown>
      <List name={name} onChange={onChange} value={value} required>
        <option value=""></option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </List>
      <label>{placeholder}</label>
    </Dropdown>
  );
};

export default Select;
