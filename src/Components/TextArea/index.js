import React from "react";
import { ContainerTextArea } from "./styles";
const TextArea = ({
  name,
  cols,
  rows,
  value,
  onChange,
  placeholder,
  required,
}) => {
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

export default TextArea;
