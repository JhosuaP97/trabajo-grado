import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const SubgroupContainer = styled.section`
  width: 100%;
  background-color: ${Colors.white};
  border-radius: 8px;
  height: 8rem;

  h3 {
    padding-top: 10px;
  }
`;

export const SubgroupInfo = styled.div`
  width: 100%;
  height: auto;
`;

export const SubgroupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h4 {
    margin-right: 0.625rem;
  }
`;

export const SubgroupList = styled.ul`
  width: 100%;
  overflow-y: scroll;
  height: 5.3125rem;

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
export const SubgroupItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2px;
  width: 98%;

  &:hover {
    background-color: ${Colors.black};
    color: ${Colors.white};
    cursor: pointer;
    border-radius: 2px;
  }
`;

export const SubgroupValue = styled.span`
  margin-right: 2px;
`;
