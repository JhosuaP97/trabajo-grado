import React, { useEffect, memo } from "react";
import greeting from "assets/character_images/image_login.png";
import { Controller, useForm } from "react-hook-form";
import TextField from "Components/TextField";
import MultiSelectAll from "Components/MultiSelectAll";
import { optionsRoles } from "constants/index";

import {
  Container,
  ContainerImage,
  TitleForm,
  FieldForm,
  Link,
  ContainerLink,
  Form,
  ButtonForm,
} from "./styles";
import useAuth from "hooks/useAuth";

const LogIn = ({ history }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
  } = useForm();

  const { Login, user, authenticated } = useAuth();

  const onSubmit = (data) => {
    Login(data);
  };

  const Image = memo(function Image({ src }) {
    return <img src={src} alt={src} />;
  });

  useEffect(() => {
    if (authenticated) {
      if (user) {
        if (user.estudiante) {
          history.push("/practice/student");
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
        <Image src={greeting} />
      </ContainerImage>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TitleForm>
          <h1>LOGO</h1>
        </TitleForm>
        <FieldForm>
          <TextField
            type="text"
            placeholder="Email institucional"
            error={errors?.email}
            {...register("email", {
              required: "Ingrese su Email",
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
            Iniciar sesión
          </ButtonForm>
        </FieldForm>
        <ContainerLink>
          <p>¿No tienes cuenta?</p>
          <Link to="/register">Registrate</Link>
        </ContainerLink>
      </Form>
    </Container>
  );
};

export default LogIn;
