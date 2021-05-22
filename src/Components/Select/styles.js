import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const Dropdown = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  min-width: 8rem;
  position: relative;
  height: 45px;
  .formList {
    display: block;
    width: 100%;
    padding: 0.8438rem 1rem;
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
    right: 15px;
    top: 18px;
    width: 8px;
    height: 8px;
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
    max-width: 75%;
  }

  .formList:focus + label {
    color: ${Colors.focus};
    font-size: 12px;
    left: 0.3rem;
    top: -0.5rem;
    z-index: 10;
    max-width: 100%;
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
    max-width: 100%;
  }
`;
