import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const Dropdown = styled.div`
  width: 100%;
  min-width: 8rem;
  position: relative;

  .formList {
    display: block;
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
  }

  &:after {
    content: "";
    position: absolute;
    right: 8px;
    top: 1rem;
    width: 9px;
    height: 9px;
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
    background-color: #fff;
    color: ${Colors.default};
    font-family: "Raleway";
    font-size: 0.875rem;
    left: 0.6rem;
    position: absolute;
    top: 0.95rem;
    transition: 0.3s;
    user-select: none;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 80%;
  }

  .formList:focus + label {
    color: ${Colors.focus};
    font-size: 12px;
    left: 0.3rem;
    top: -0.5rem;
    z-index: 10;
  }

  .formList:focus,
  .formList:valid {
    border: 1px solid ${Colors.focus};
  }

  .formList:focus + label,
  .formList:valid + label {
    top: -0.5rem;
    left: 0.3rem;
    color: ${Colors.focus};
    font-size: 12px;
    z-index: 10;
  }
`;
