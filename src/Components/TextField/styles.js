import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const ContainerField = styled.div`
  position: relative;
  height: 48px;
  /* margin-bottom: 1.5rem; */

  .formInput {
    display: block;
    background: none;
    border-radius: 0.5rem;
    border: 1px solid ${Colors.default};
    font-family: "Raleway";

    font-size: 14px;
    height: 100%;
    left: 0;
    outline: none;
    padding-left: 0.6rem;
    position: absolute;
    top: 0;
    min-width: 4rem;
    max-width: 10rem;
    width: 10rem;
    z-index: 1;
  }
  label {
    background-color: #fff;
    color: #aaa;
    font-size: 14px;
    left: 0.3rem;
    padding: 0 0.25rem;
    position: absolute;
    top: 1rem;
    transition: 0.3s;
    font-family: "Raleway";
  }

  /*Input focus move up label*/
  .formInput:focus + label {
    color: ${Colors.focus};
    font-size: 12px;
    left: 0.3rem;
    top: -0.5rem;
    z-index: 10;
  }

  /*Input focus sticky top label*/
  .formInput:not(:placeholder-shown).formInput:not(:focus) + label {
    color: ${Colors.focus};
    font-size: 12px;
    left: 0.3rem;
    top: -0.5rem;
    z-index: 10;
  }

  .formInput:not(:placeholder-shown).formInput:not(:focus) {
    border: 1.5px solid ${Colors.focus};
  }

  /*Input focus*/
  .formInput:focus {
    border: 1.5px solid ${Colors.focus};
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
