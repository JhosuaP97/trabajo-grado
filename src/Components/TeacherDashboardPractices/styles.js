import styled from "styled-components";

export const TeacherContainerPractices = styled.div`
  width: 100%;
  display: ${({ practices }) => (practices.length > 0 ? "grid" : "")};
  gap: 1rem;
  grid-auto-rows: 16rem;
  align-items: center;
  justify-content: center;
  height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;
