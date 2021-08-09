import styled, { css } from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const BigImage = styled.div`
  width: 563px;
  height: 350px;
  margin: 30px 0;
  position: relative;
  & .modelViewer {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #0f0c14;
  }
`;

export const Message = styled.p`
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 455px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
`;

const BORDERS_SLIDES = {
  selected: `2px solid ${Colors.selectedItem}`,
  rejected: `2px solid ${Colors.rejectItem}`,
  default: `1px solid ${Colors.default}`,
};

const borderStyle = ({ checked, rejected, reviewed, currentModule }) => {
  if (currentModule === "Corte 1" || currentModule === "Corte 2") {
    if (reviewed) {
      return BORDERS_SLIDES.selected;
    }
  }
  if (checked) {
    return BORDERS_SLIDES.selected;
  }
  if (rejected) {
    return BORDERS_SLIDES.rejected;
  } else {
    return BORDERS_SLIDES.default;
  }
};

export const Slide = styled.button`
  height: 100px;
  width: 100px;
  flex-shrink: 0;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${({ urlImage }) => urlImage && `url(${urlImage})`};
  background-color: ${({ isSelected }) =>
    isSelected ? Colors.black : Colors.white};
  transition: 300ms margin-left ease-in-out;
  border: ${borderStyle};
  border-radius: 8px;
  margin-right: 15px;
  margin-left: ${({ id, currentSlide, firstItem }) =>
    id === firstItem ? `-${currentSlide * 25}%` : undefined};
  cursor: pointer;
`;

export const Thumbnail = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.2rem;
`;

const SlideButton = css`
  position: absolute;
  width: 42px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid ${Colors.black};
  cursor: pointer;
  background: none;
  text-align: center;

  svg {
    fill: ${Colors.black};
  }

  :disabled {
    border: 1px solid ${Colors.default};
    cursor: not-allowed;
    svg {
      fill: ${Colors.default};
    }
  }
`;

export const ButtonRight = styled.button`
  ${SlideButton}
  right:-10%;
`;
export const ButtonLeft = styled.button`
  ${SlideButton}
  left: -12%;
  transform: rotate(-180deg);
`;

export const Hotspot = styled.button`
  display: block;
  width: 0.375rem;
  height: 0.375rem;
  border: none;
  border-radius: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  background-color: ${Colors.white};
  position: relative;

  :not([data-visible]) {
    width: 0.75rem;
    height: 1.05rem;
    background-color: transparent;
    border: 3px solid ${Colors.white};
  }
`;

export const HotspotAnnotation = styled.div`
  background: ${Colors.white};
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  color: #000;
  display: block;
  font-family: Raleway;
  font-size: 1rem;
  max-width: 7rem;
  overflow-wrap: break-word;
  padding: 0.5em 1em;
  position: absolute;
  left: 30px;
  width: max-content;
  height: max-content;
  transform: translate3d(1rem, -3rem, 0);
  --min-hotspot-opacity: 0;
`;

const ButtonScreen = css`
  background: none;
  position: absolute;
  outline: none;
  border: none;
  top: 50%;
  cursor: pointer;
`;

export const ButtonScreenReject = styled.button`
  ${ButtonScreen}
  left: 10%;
`;
export const ButtonScreenCheck = styled.button`
  ${ButtonScreen}
  right: 10%;
`;
