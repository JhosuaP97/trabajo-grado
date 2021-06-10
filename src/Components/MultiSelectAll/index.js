import React from "react";
import Select, { components } from "react-select";
const MultiSelectAll = ({
  closeMenuOnSelect,
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
  isMulti,
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
    menuList: (provided, state) => ({
      maxHeight: 336,
      // overflowY: "hidden",
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
      maxHeight: "2rem",
      maxWidth: "90%",
      // whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }),

    option: (provided, state) => ({
      ...provided,
      overflow: "auto",
      background: "transparent",
      color: "#000",
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
        ValueContainer: ({ children, ...props }) => {
          let [values, input] = children;
          if (Array.isArray(values)) {
            const val = (i) => values[i].props.children;
            const { length } = values;
            switch (length) {
              case 1:
                values = `${val(0)}`;
                break;
              case 2:
                values = `${val(0)} y ${val(1)}`;
                break;
              case 3:
                values = `${val(0)}, ${val(1)} y ${val(2)}`;
                break;
              default:
                const plural = values.length === 3 + 1;
                const otherCount = length - 3;
                values = `${val(0)}, ${val(1)}, ${val(
                  2
                )} y ${otherCount} más ${plural}`;
                break;
            }
          }

          return (
            <components.ValueContainer {...props}>
              {values}
              {input}
            </components.ValueContainer>
          );
        },
      }}
      closeMenuOnSelect={closeMenuOnSelect}
      filterOption={filterOption}
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
      defaultValue={defaultValue}
      isMulti={isMulti}
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
