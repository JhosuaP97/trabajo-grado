import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const Dropdown = styled.div`
  width: 100%;
  min-width: 8rem;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    right: 8px;
    top: 1rem;
    width: 10px;
    height: 10px;
    color: ${Colors.default};
    border-top: 2px solid;
    border-right: 2px solid;
    transform: rotate(136deg);
  }

  &:after,
  &:focus {
    color: ${Colors.focus};
  }

  label {
    position: absolute;
    left: 0.6rem;
    color: ${Colors.default};
    top: 0.95rem;
    font-size: 14px;
    transition: 0.3s;
    background-color: #fff;
    font-family: "Raleway";
  }

  select:focus,
  select:valid {
    border: 1px solid ${Colors.focus};
  }

  select:focus + label,
  select:valid + label {
    top: -0.5rem;
    left: 0.3rem;
    color: ${Colors.focus};
    font-size: 12px;
    z-index: 10;
  }

  select option {
    background-color: transparent;
    border-bottom: 1px solid ${Colors.default};
    /* font-family: "Raleway";
    font-style: normal; */
  }
`;

export const OptionStyled = styled.option`
  background-color: red;
`;

export const List = styled.select`
  width: 10rem;
  padding: 0.9rem 1rem;
  border-radius: 0.5rem;
  font-size: 14px;
  outline: none;
  line-height: 1rem;
  border: 1px solid ${Colors.default};
  cursor: pointer;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;

  font-family: "Raleway";
  font-style: normal;
  font-weight: normal;
  font-feature-settings: "pnum" on, "lnum" on;
  option p {
    padding: 1rem;
  }
`;
