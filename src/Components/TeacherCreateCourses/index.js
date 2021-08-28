import React from "react";
import Button from "Components/Button";
import { Container, ContainerImage } from "./styles";
import searchinPerson from "assets/character_images/personSearching.jpg";
import useModal from "hooks/useModal";
import ModalCourse from "Components/Modals/ModalCourse";

const TeacherCreateCourses = () => {
  const { isOpen, handleModalState } = useModal();

  return (
    <>
      <Container>
        <ContainerImage>
          <img src={searchinPerson} alt="character thumbs up" />
        </ContainerImage>
        <h2>Parece que todavía no tienes ningún curso creado</h2>
        <h2>¡Crea uno nuevo!</h2>

        <Button styleButton="primary" onClick={handleModalState}>
          Crear curso
        </Button>
      </Container>

      <ModalCourse isOpen={isOpen} close={handleModalState} />
    </>
  );
};

export default TeacherCreateCourses;
