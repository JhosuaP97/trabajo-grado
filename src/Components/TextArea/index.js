import React from "react";
import { ContainerTextArea } from "./styles";
import PropTypes from "prop-types";

const TextArea = ({ name, cols, rows, value, onChange, placeholder }) => {
  return (
    <ContainerTextArea>
      <textarea
        className="formTextArea"
        name={name}
        placeholder=" "
        cols={cols}
        rows={rows}
        value={value}
        onChange={onChange}
      />
      <label>{placeholder}</label>
    </ContainerTextArea>
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  cols: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  rows: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
