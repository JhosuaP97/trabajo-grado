import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const ContainerTextArea = styled.div`
  position: relative;
  font-family: "Raleway";

  textarea {
    resize: none;
    border-radius: 0.5rem;
    border: 1px solid ${Colors.default};
    margin: 1.25rem 0;
    padding: 0.6rem 0.5rem;
    outline: none;
    font-family: "Raleway";
  }

  textarea:focus + label {
    color: ${Colors.focus};
    font-size: 12px;
    left: 0.3rem;
    top: 0.85rem;
    z-index: 10;
  }

  label {
    position: absolute;
    background-color: #fff;
    top: 1.5rem;
    left: 0.3rem;
    font-size: 14px;
    padding: 0 0.25rem;
    transition: 0.3s;
    color: #aaa;
  }

  .formTextArea:not(:placeholder-shown).formTextArea:not(:focus) + label {
    color: ${Colors.focus};
    font-size: 12px;
    left: 0.3rem;
    top: 0.85rem;
    z-index: 10;
  }

  .formTextArea:not(:placeholder-shown).formTextArea:not(:focus) {
    border: 1.5px solid ${Colors.focus};
  }

  /*Input focus*/
  .formTextArea:focus {
    border: 1.5px solid ${Colors.focus};
  }
`;
