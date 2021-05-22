import React from "react";
import Select from "react-select";
const MultiSelectAll = ({
  defaultValue,
  filterOption,
  getOptionLabel,
  getOptionValue,
  name,
  onChange,
  options,
  placeholder,
  value,
  widthSelect,
}) => {
  const customStyles = {
    control: (provided, state) => ({
      width: widthSelect ? widthSelect : 242,
      ...provided,
      border: state.isFocused
        ? "1px solid #222"
        : state.hasValue
        ? "1px solid #222"
        : "1px solid #c2c2c2",
      boxShadow: "#222",
      borderRadius: 8,
      padding: "0.275rem",
      fontFamily: "Raleway",
      cursor: "pointer",
      outline: "none",
      fontSize: 14,
      "&:hover": {
        border: "1px solid #c2c2c2",
      },
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,

      color: "#222",
      "&:hover": {
        color: "#222",
      },
    }),
    menu: (provided, state) => ({
      ...provided,
      zIndex: 100,
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      "&:hover": {
        background: "#222",
        color: "#fff",
      },
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      maxHeight: "5rem",
      overflowY: "auto",
    }),

    option: (provided, state) => ({
      ...provided,
      background: "transparent",
      cursor: "pointer",
      "&:hover": {
        background: "#c2c2c2",
      },
    }),
  };

  return (
    <Select
      components={{
        IndicatorSeparator: () => null,
      }}
      closeMenuOnSelect={false}
      filterOption={filterOption}
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
      defaultValue={defaultValue}
      isMulti
      name={name}
      noOptionsMessage={() => "Sin resultados"}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      styles={customStyles}
      value={value}
      classNamePrefix="multiselect"
    />
  );
};

export default MultiSelectAll;
