import { scrollBarStyle } from "Components/StudentInfo/styles";
import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const SubgroupContainer = styled.section`
  width: 100%;
  border-radius: 8px;
  height: 8rem;
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
  height: 64px;

  ${scrollBarStyle}
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
