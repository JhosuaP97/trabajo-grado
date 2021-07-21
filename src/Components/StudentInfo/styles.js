import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const Information = styled.div`
  flex: 20;
`;

const marginPaddingBottom = 10;

export const Indications = styled.div`
  margin: 20px 0 0 0;
  border-bottom: 1px solid ${Colors.default};
  padding-bottom: ${marginPaddingBottom}px;
  width: 90%;
  height: 8rem;
`;

export const Title = styled.h3`
  margin-bottom: ${marginPaddingBottom}px;
`;

export const Text = styled.p`
  margin-bottom: ${marginPaddingBottom}px;
`;

export const FeatureList = styled.ul`
  border-bottom: 1px solid ${Colors.default};
  padding: 1rem 0 1rem 0;
  max-height: 300px;
  overflow-y: auto;
`;

export const FeatureItem = styled.li`
  display: flex;
  & span:first-child {
    flex: 1;
  }
  & span:last-child {
    flex: 0.9;
  }
`;
export const Item = styled.span`
  margin-bottom: ${marginPaddingBottom}px;
  text-transform: capitalize;
`;

export const Feedback = styled.div`
  padding: 0.5rem 0 1rem;
`;

export const ProductsNumber = styled.div`
  display: flex;
`;

export const ExamineNumber = styled.h2`
  margin: 0 0.625rem 0.625rem;
`;
