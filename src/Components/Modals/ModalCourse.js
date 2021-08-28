import Modal from "Components/Modal";
import React from "react";
import TextField from "Components/TextField";
import { useForm } from "react-hook-form";
import { Actions } from "Components/Modal/styles";
import Button from "Components/Button";

const ModalCourse = ({ isOpen, close }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitCourse = (data) => {
    console.log(data);
  };
  return (
    <Modal isOpen={isOpen} close={close}>
      <h1>¿Listo para crear un nuevo curso?</h1>
      <p>Ingresa en el siguiente campo el nombre de tu nuevo curso</p>

      <form onSubmit={handleSubmit(onSubmitCourse)}>
        <TextField
          type="text"
          width="100%"
          placeholder="Nombre del curso"
          error={errors?.nombreGrupo}
          {...register("nombreGrupo", {
            shouldUnregister: isOpen,
            required: "Ingrese el nombre del grupo",
          })}
        />
        <Actions>
          <Button type="button" styleButton="secondary" onClick={close}>
            Cancelar
          </Button>
          <Button type="submit" styleButton="primary" onClick={() => {}}>
            Crear curso
          </Button>
        </Actions>
      </form>
    </Modal>
  );
};

export default ModalCourse;
