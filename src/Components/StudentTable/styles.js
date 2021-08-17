import { scrollBarStyle } from "Components/StudentInfo/styles";
import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const StudentTableMainContainer = styled.div`
  width: 100%;
  border: 1px solid ${Colors.default};
  border-radius: 8px;
`;

export const ContainerSelect = styled.div`
  margin: 20px;
  display: flex;
  gap: 10px;
`;

export const TableContainer = styled.div`
  width: 100%;
  max-width: 660px;
  overflow-y: auto;
  padding: 10px 20px;
  max-height: 160px;

  ${scrollBarStyle}
`;

export const Table = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  border-radius: 8px;
  text-transform: capitalize;

  thead {
    font-size: 18px;
  }

  thead tr th:nth-child(1) {
    width: 10%;
  }
  thead tr th:nth-child(2) {
    width: 10%;
  }
  thead tr th:nth-child(3) {
    width: 10%;
  }

  thead tr th:nth-child(4) {
    width: 20%;
  }

  tr {
    font-family: Lato;
  }

  td {
    font-family: Raleway;
  }

  tr,
  td {
    text-align: left;
    padding: 10px 0;
  }
`;
