import React, { useEffect } from "react";
import greeting from "assets/character_images/image_login.png";
import { Controller, useForm } from "react-hook-form";
import TextField from "Components/TextField";
import MultiSelectAll from "Components/MultiSelectAll";
import { optionsRoles } from "constants/index";
import useAuth from "hooks/useAuth";
import {
  Container,
  ContainerImage,
  TitleForm,
  FieldForm,
  ContainerLink,
  Link,
  Form,
  ButtonForm,
} from "./styles";
const Register = ({ history }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm();
  const { registerUser, authenticated, user } = useAuth();

  const onSubmit = (data) => {
    registerUser(data);
  };

  // En caso que el usuario autenticado sea un estudiante o un profesor los redirige a su página
  // correspondiente

  useEffect(() => {
    if (authenticated) {
      if (user) {
        if (user.estudiante) {
          history.push("/login");
        }
        if (user.profesor) {
          history.push("/courses");
        }
      }
    }
  }, [authenticated, user, history]);

  return (
    <Container>
      <ContainerImage>
        <img src={greeting} alt="character greeting" />
      </ContainerImage>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TitleForm>
          <h1>LOGO</h1>
        </TitleForm>
        <FieldForm>
          <TextField
            type="text"
            placeholder="Nombre"
            error={errors?.firstname}
            {...register("firstname", {
              required: "Ingrese su nombre",
            })}
          />
        </FieldForm>
        <FieldForm>
          <TextField
            type="text"
            placeholder="Apellido"
            error={errors?.lastname}
            {...register("lastname", {
              required: "Ingrese su apellido",
            })}
          />
        </FieldForm>
        <FieldForm>
          <TextField
            type="email"
            placeholder="Email institucional"
            error={errors?.email}
            {...register("email", {
              required: "Ingrese su email",
            })}
          />
        </FieldForm>
        <FieldForm>
          <TextField
            type="password"
            placeholder="Contraseña"
            error={errors?.password}
            {...register("password", {
              required: "Ingrese su contraseña",
            })}
          />
        </FieldForm>
        <FieldForm>
          <Controller
            name="role"
            control={control}
            rules={{ required: "Selecciona un rol" }}
            render={({ field }) => (
              <MultiSelectAll
                isMulti={false}
                widthSelect={"9rem"}
                options={optionsRoles}
                placeholder="Soy"
                error={errors?.role}
                {...field}
              />
            )}
          />
        </FieldForm>
        <FieldForm>
          <ButtonForm type="submit" styleButton="primary">
            Registrarse
          </ButtonForm>
        </FieldForm>
        <ContainerLink>
          <p>¿Ya tienes cuenta?</p>
          <Link to="/">Inicia sesión</Link>
        </ContainerLink>
      </Form>
    </Container>
  );
};

export default Register;
