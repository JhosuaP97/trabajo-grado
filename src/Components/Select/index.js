import React, { useState, useRef, useEffect } from "react";
import {
  Dropdown,
  Control,
  SelectValue,
  Arrow,
  Options,
  Option,
  Input,
} from "./styles";
const Select = ({ options, placeholder, onChange, value, name }) => {
  const [open, setOpen] = useState(false);
  const refSelect = useRef(null);

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  function close(e) {
    setOpen(e && e.target === refSelect.current);
  }

  const handleOpenOptions = () => {
    setOpen(!open);
  };

  return (
    <Dropdown open={open} value={value}>
      <Control>
        <SelectValue>
          <Input
            ref={refSelect}
            type="text"
            name={name}
            value={value}
            onClick={handleOpenOptions}
            required
          />
          <label>{placeholder}</label>
        </SelectValue>
        <Arrow open={open} value={value} />
      </Control>
      <Options open={open}>
        {options.map((option, i) => (
          <Option
            key={i}
            onClick={() => {
              onChange({ target: { name, value: option } });
              setOpen(false);
            }}
          >
            {option}
          </Option>
        ))}
      </Options>
    </Dropdown>
    // <Dropdown>
    //   <List name="" id="" required>
    //     <option value="" />
    //     <option value="1">Módulo 1</option>
    //     <option value="2">Módulo 2</option>
    //     <option value="3">Módulo 3</option>
    //   </List>
    //   <label htmlFor="">Módulo</label>
    // </Dropdown>
  );
};

export default Select;
