import { scrollBarStyle } from "Components/StudentInfo/styles";
import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const Progress = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 10px;
  padding: 2rem 0 2rem 2rem;
  width: 100%;
  /* min-height: 243px; */
  max-height: 536px;
  overflow-y: auto;
  overflow-x: hidden;

  ${scrollBarStyle}
`;

export const Steps = styled.ul`
  list-style: none;
  border-left: 1px solid ${Colors.default};
  padding-left: 10px;
  position: relative;
  height: auto;
`;

export const Bar = styled.div`
  position: absolute;
  width: 3px;
  height: ${({ height }) => height}%;
  max-height: 100%;
  left: -2px;
  background-color: #000;
  transition: height 0.2s 0.15s ease-in-out;
`;

export const Step = styled.li`
  position: relative;
  color: ${({ active }) => (active ? Colors.black : Colors.default)};
  counter-increment: step;

  &.active {
    color: ${Colors.black};
    transform-origin: 0 0;
    transform: scale(1.1);

    transition: all 0.2s 0.15s cubic-bezier(0.175, 0.885, 0.32, 2);
  }

  &.active:before {
    background-color: ${Colors.white};
    color: ${Colors.selectedItem};
    border: 2px solid ${Colors.selectedItem};
  }

  &.selected {
    color: ${Colors.black};
    font-weight: 700;
  }

  &.selected:before {
    color: ${Colors.white};
    background-color: ${Colors.black};
    border: none;
  }

  :before {
    content: counter(step);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background-color: white;
    border: 1px solid;
    border-radius: 50%;
    position: absolute;
    font-size: 18px;
    text-align: center;
    left: -28px;
    top: calc(50% - 16px);
  }
`;

export const Text = styled.span`
  display: block;
  padding: 25px;
  font-size: 12px;
  width: 200px;
  max-width: 300px;
`;
