import React from "react";
import { useParams, useHistory } from "react-router-dom";

import { CardContainer, BackgrounImage, CardInfo, Dots } from "./styles";
const CardCourseItem = ({ course }) => {
  let history = useHistory();
  const handleHistory = () => {
    history.push(`/courses/${course}/practice`);
  };

  return (
    <CardContainer onClick={handleHistory}>
      <BackgrounImage />
      <CardInfo>
        <h1>Curso 51</h1>
        <Dots>&#10247;</Dots>
      </CardInfo>
    </CardContainer>
  );
};

export default CardCourseItem;
