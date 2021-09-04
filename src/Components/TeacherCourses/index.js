import React, { useEffect } from "react";
import Button from "Components/Button";
import ModalCourse from "Components/Modals/ModalCourse";
import TeacherCreateCourses from "Components/TeacherCreateCourses";
import useModal from "hooks/useModal";
import useTeacher from "hooks/useTeacher";
import { Container, TeacherCoursesContainer } from "./styles";
import CardCourseItem from "Components/CardCourseItem";

const TeacherCourses = () => {
  const { getCourses, courses } = useTeacher();
  const { isOpen, handleModalState } = useModal();

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <Container>
      <Button type="button" styleButton="secondary" onClick={handleModalState}>
        Crear curso
      </Button>

      <TeacherCoursesContainer courses={courses}>
        {courses.length > 0 ? (
          courses.map((course) => (
            <CardCourseItem course={course} key={course.idCurso} />
          ))
        ) : (
          <TeacherCreateCourses />
        )}
      </TeacherCoursesContainer>

      <ModalCourse isOpen={isOpen} close={handleModalState} />
    </Container>
  );
};

export default TeacherCourses;
