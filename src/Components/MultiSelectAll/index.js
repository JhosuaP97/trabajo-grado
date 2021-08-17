import React, { forwardRef } from "react";
import { components } from "react-select";
import { Colors } from "styles/GlobalStyles";
import { ErrorMessage, Wrapper, StyleSelect } from "./styles";

const MultiSelectAll = (
  {
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
    error,
    isFocused,
    ...props
  },
  ref
) => {
  const customStyles = {
    control: (provided, state) => ({
      width: widthSelect ? widthSelect : 242,
      ...provided,
      border: error
        ? `1px solid ${Colors.error}`
        : state.isFocused
        ? `1px solid ${Colors.focus}`
        : state.hasValue
        ? `1px solid ${Colors.focus}`
        : `1px solid ${Colors.default}`,
      boxShadow: Colors.focus,
      borderRadius: 8,
      padding: "0.275rem",
      fontFamily: "Raleway",
      cursor: "pointer",
      outline: "none",
      fontSize: 14,
      "&:hover": {
        border: `1px solid ${Colors.default}`,
      },

      "&:focus +.label": {
        border: "1px solid blue",
      },
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: error
        ? Colors.error
        : state.isFocused
        ? Colors.focus
        : state.hasValue
        ? Colors.focus
        : `${Colors.default}`,
    }),
    menu: (provided, state) => ({
      ...provided,
      zIndex: 100,
    }),
    menuList: (provided, state) => ({
      maxHeight: 336,
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      "&:hover": {
        background: Colors.focus,
        color: Colors.white,
      },
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      maxHeight: "2rem",
      maxWidth: "90%",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }),
    placeholder: () => ({
      color: error ? Colors.error : Colors.default,
    }),

    option: (provided, state) => ({
      ...provided,
      overflow: "auto",
      background: "transparent",
      color: "#000",
      cursor: "pointer",
      "&:hover": {
        background: Colors.default,
      },
    }),
  };

  return (
    <Wrapper>
      <StyleSelect
        className="select"
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
                  const otherCount = length - 3;
                  values = `${val(0)}, ${val(1)}, ${val(
                    2
                  )} y ${otherCount} más`;
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
        placeholder={" "}
        styles={customStyles}
        value={value}
        classNamePrefix="multiselect"
        ref={ref}
        isFocused={true}
        error={error}
        {...props}
      />
      <label className="label">{placeholder}</label>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Wrapper>
  );
};

const refMultiSelect = forwardRef(MultiSelectAll);

export default refMultiSelect;
