import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 2rem 3rem;
`;

export const TeacherCoursesContainer = styled.main`
  width: 100%;
  display: ${({ courses }) => (courses.length > 0 ? "grid" : "")};
  gap: 1rem;
  grid-auto-rows: 16rem;
  align-items: center;
  justify-content: center;
  height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;
