import React, { forwardRef } from "react";
import { ContainerTextArea } from "./styles";
// import PropTypes from "prop-types";

const TextArea = ({ name, value, onChange, placeholder }, ref) => {
  return (
    <ContainerTextArea>
      <textarea
        className="formTextArea"
        name={name}
        placeholder=" "
        value={value}
        onChange={onChange}
        ref={ref}
      />
      <label>{placeholder}</label>
    </ContainerTextArea>
  );
};

const refTextArea = forwardRef(TextArea);

// TextArea.propTypes = {
//   name: PropTypes.string.isRequired,
//   placeholder: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default refTextArea;
