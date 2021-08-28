import CardCourseItem from "Components/CardCourseItem";
import React from "react";
import { Container } from "./styles";
const CardCourse = ({ courses }) => {
  return (
    <Container>
      {courses.map((course) => (
        <CardCourseItem course={course} />
      ))}
    </Container>
  );
};

export default CardCourse;
