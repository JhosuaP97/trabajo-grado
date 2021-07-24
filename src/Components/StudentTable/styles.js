import { scrollBarStyle } from "Components/StudentInfo/styles";
import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const TableContainer = styled.div`
  width: 100%;
  max-width: 660px;
  border-radius: 8px;
  border: 1px solid ${Colors.default};
  overflow-y: auto;
  padding: 10px 20px;
  max-height: 160px;

  ${scrollBarStyle}
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  border-radius: 8px;

  thead {
    font-size: 18px;
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
