import styled from "styled-components";

export const ContainerField = styled.div`
  position: relative;
  height: 48px;
  margin-bottom: 1.5rem;

  .formInput {
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    font-size: 14px;
    border: 1px solid #aaa;
    border-radius: 0.5rem;
    outline: none;
    padding-left: 0.6rem;
    background: none;
    z-index: 1;
  }
  label {
    position: absolute;
    left: 0.3rem;
    top: 1rem;
    padding: 0 0.25rem;
    background-color: #fff;
    color: #aaa;
    font-size: 14px;
    transition: 0.3s;
  }

  /*Input focus move up label*/
  .formInput:focus + label {
    top: -0.5rem;
    left: 0.3rem;
    color: #222;
    font-size: 12px;
    z-index: 10;
  }

  /*Input focus sticky top label*/
  .formInput:not(:placeholder-shown).formInput:not(:focus) + label {
    top: -0.5rem;
    left: 0.3rem;
    font-size: 12px;
    z-index: 10;
    color: #222;
  }

  .formInput:not(:placeholder-shown).formInput:not(:focus) {
    border: 1.5px solid #222;
  }

  /*Input focus*/
  .formInput:focus {
    border: 1.5px solid #222;
  }
`;
