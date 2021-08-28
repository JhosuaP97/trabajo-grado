import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const ContainerActions = styled.div`
  margin: 2rem;
`;

export const TeacherCoursesContainer = styled.main`
  width: 100%;
  display: ${({ courses }) => (courses.length > 0 ? "flex" : "")};
  overflow: hidden;
`;
