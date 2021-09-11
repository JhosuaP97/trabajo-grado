import useTeacher from "hooks/useTeacher";
import React from "react";
import { useHistory } from "react-router-dom";
import { CardContainer, BackgrounImage, CardInfo, Dots } from "./styles";
const CardCourseItem = ({ course }) => {
  const { getActualCourse } = useTeacher();
  let history = useHistory();

  const handleHistory = () => {
    getActualCourse(course.idCurso);
    history.push(`/courses/${course.idCurso}`);
  };

  return (
    <CardContainer onClick={handleHistory}>
      <BackgrounImage />
      <CardInfo>
        <h1>{course.nombreCurso}</h1>
        <Dots>&#10247;</Dots>
      </CardInfo>
    </CardContainer>
  );
};

export default CardCourseItem;
