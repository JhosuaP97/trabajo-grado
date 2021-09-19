import styled, { css } from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const scrollBarStyle = css`
  ::-webkit-scrollbar {
    width: 10px;
    height: auto;
    background-color: #f1f3f4;
  }

  ::-webkit-scrollbar-thumb {
    height: 28px;
    width: 10px;
    border-radius: 8px;
    background-color: #c4c4c4;

    :hover {
      background-color: ${Colors.black};
    }
  }

  ::-webkit-scrollbar-track:active {
    background-color: ${Colors.default};
  }
`;

export const Information = styled.div`
  width: 90%;
  margin-top: 30px;
  height: 92%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SectionSpace = css`
  border-bottom: 1px solid ${Colors.default};
  padding-bottom: 10px;
`;

export const Section1 = styled.div`
  height: auto;
  max-height: 125px;
  border-bottom: 1px solid ${Colors.default};
`;

export const Description = styled.div`
  overflow: auto;
  max-height: 90px;
  ${scrollBarStyle}
`;

export const Section2 = styled.div`
  padding-top: 10px;
  border-bottom: 1px solid ${Colors.default};
  overflow: auto;

  ${scrollBarStyle}
`;

export const Section3 = styled.div`
  ${SectionSpace}
  height: auto;
`;

export const Section4 = styled.div`
  padding-top: 10px;
`;

export const Section5 = styled.div`
  justify-self: flex-end;
`;

const marginPaddingBottom = 10;

export const Title = styled.h3`
  margin-bottom: ${marginPaddingBottom}px;
`;

export const Text = styled.p`
  margin-bottom: ${marginPaddingBottom}px;
`;

export const FeatureList = styled.ul`
  max-height: 80px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
    height: auto;
    background-color: #f1f3f4;
  }

  ::-webkit-scrollbar-thumb {
    height: 28px;
    width: 10px;
    border-radius: 8px;
    background-color: #c4c4c4;

    :hover {
      background-color: ${Colors.black};
    }
  }

  ::-webkit-scrollbar-track:active {
    background-color: ${Colors.default};
  }
`;

export const FeatureItem = styled.li`
  display: flex;
  width: 100%;
  & span:first-child {
    flex: 0.4;
  }
  & span:last-child {
    flex: 0.9;
  }
`;
export const Item = styled.span`
  margin-bottom: ${marginPaddingBottom}px;
  text-transform: capitalize;
`;

export const ProductsNumber = styled.div`
  display: flex;
`;

export const ExamineNumber = styled.h2`
  margin: 0 0.625rem 0.625rem;
`;
