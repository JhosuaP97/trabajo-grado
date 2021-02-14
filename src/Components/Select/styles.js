import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const Dropdown = styled.div`
  border-radius: 0.5rem;
  border: ${({ open, value }) =>
    open
      ? `1px solid ${Colors.focus}`
      : value
      ? `1px solid ${Colors.focus}`
      : `1px solid ${Colors.default}`};
  color: #aaa;
  cursor: pointer;
  max-width: 9rem;
  position: absolute;
  transition: 0.3s;
  width: 100%;
  font-family: "Raleway";
  background-color: #fff;
`;

export const Control = styled.div`
  position: relative;
`;
export const SelectValue = styled.div`
  padding: 0.6rem 0.3rem;
  position: relative;
  width: 100%;

  label {
    position: absolute;
    font-size: 12px;
    left: 0.3rem;
    top: 1rem;
    background-color: #fff;
    transition: 0.3s;
  }

  input:focus + label,
  input:valid + label {
    color: #222;
    font-size: 12px;
    left: 0.3rem;
    top: -0.5rem;
    z-index: 10;
  }
`;
export const Input = styled.input`
  border: none;
  outline: none;
  padding: 0.35rem;
  width: 100%;
  font-family: "Raleway";
`;

export const Arrow = styled.div`
  border-left: 2px solid;
  border-top: 2px solid;
  color: ${({ open, value }) =>
    open ? `${Colors.focus}` : value ? `${Colors.focus}` : `${Colors.default}`};
  display: block;
  height: 10px;
  position: absolute;
  right: 10px;
  top: 16px;
  transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(225deg)")};
  transition: 0.3s;
  width: 10px;
`;
export const Options = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  overflow-y: auto;
  transition: 0.3s;
  width: 100%;
`;

export const Option = styled.div`
  color: ${Colors.focus};
  padding: 0.2rem;

  :hover {
    background-color: #c2c2c2;
  }
`;

/* export const Dropdown = styled.div`
  width: 100%;
  min-width: 8rem;
  position: relative;

  label {
    position: absolute;
    left: 0.3rem;
    color: #aaa;
    top: 1rem;
    transition: 0.3s;
    background-color: #fff;
  }

  select:focus,
  select:valid {
    border: 1px solid #222;
  }

  select:focus + label,
  select:valid + label {
    top: -0.5rem;
    left: 0.3rem;
    color: #222;
    font-size: 12px;
    z-index: 10;
  }

  select option {
    background-color: transparent;
    border-bottom: 1px solid #aaa;
  }
`;

export const List = styled.select`
  width: 8rem;
  padding: 0.9rem 1rem;
  border-radius: 0.5rem;
  font-size: 14px;
  outline: none;
  line-height: 1rem;
  border: 1px solid #aaa;
  cursor: pointer;
`; */
