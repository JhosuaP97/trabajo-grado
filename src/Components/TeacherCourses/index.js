import Button from "Components/Button";
import CardCourse from "Components/CardCourse";
import ModalCourse from "Components/Modals/ModalCourse";
import TeacherCreateCourses from "Components/TeacherCreateCourses";
import useModal from "hooks/useModal";
import React from "react";
import { Container, ContainerActions, TeacherCoursesContainer } from "./styles";

const TeacherCourses = () => {
  const courses = [1, 2];
  const { isOpen, handleModalState } = useModal();

  return (
    <Container>
      {courses.length > 0 && (
        <ContainerActions>
          <Button styleButton="secondary" onClick={handleModalState}>
            Crear grupo
          </Button>
        </ContainerActions>
      )}

      <TeacherCoursesContainer courses={courses}>
        {courses.length > 0 ? (
          <CardCourse courses={courses} />
        ) : (
          <TeacherCreateCourses />
        )}
      </TeacherCoursesContainer>

      <ModalCourse isOpen={isOpen} close={handleModalState} />
    </Container>
  );
};

export default TeacherCourses;
