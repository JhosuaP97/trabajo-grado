import React, { forwardRef } from "react";
import { ContainerField, ErrorMessage } from "./styles";
// import PropTypes from "prop-types";
const TextField = (
  { type, name, placeholder, value, onChange, width, error },
  ref
) => {
  return (
    <>
      <ContainerField width={width} error={error}>
        <input
          className="formInput"
          type={type}
          name={name}
          placeholder=" "
          value={value}
          onChange={onChange}
          ref={ref}
        />
        <label className="label">{placeholder}</label>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </ContainerField>
    </>
  );
};

const refTextField = forwardRef(TextField);

// TextField.propTypes = {
//   type: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   placeholder: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default refTextField;
