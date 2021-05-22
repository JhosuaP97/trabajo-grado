import React from "react";
import { Dropdown } from "./styles";
import PropTypes from "prop-types";
// import Select from "react-select";
const SelectStyle = ({
  options,
  onChange,
  name,
  placeholder,
  value,
  width,
}) => {
  return (
    <Dropdown width={width}>
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
  //     <Select
  //       closeMenuOnSelect={false}
  //       name={name}
  //       // defaultValue={defaultValue}
  //       // noOptionsMessage={() => "Sin resultados"}
  //       onChange={onChange}
  //       options={options}
  //       placeholder={placeholder}
  //       // styles={customStyles}
  //       value={value}
  //     />
  //   );
  // };
};

SelectStyle.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectStyle;
