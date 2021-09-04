import React from "react";
// import Button from "Components/Button";
// import { Container, ContainerImage } from "./styles";
import character from "assets/character_images/character.png";
import useModal from "hooks/useModal";
import ModalCourse from "Components/Modals/ModalCourse";
import ShowMessageToCreate from "Components/ShowMessageToCreate";

const TeacherCreateCourses = () => {
  const { isOpen, handleModalState } = useModal();

  return (
    <>
      <ShowMessageToCreate
        img={character}
        text="Parece que todavía no tienes ningún curso creado ¡Crea uno nuevo!"
        textButton="Crear curso"
        onClick={handleModalState}
      />

      <ModalCourse isOpen={isOpen} close={handleModalState} />
    </>
  );
};

export default TeacherCreateCourses;
