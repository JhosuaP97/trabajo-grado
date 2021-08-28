import React, { useEffect } from "react";
import useAuth from "hooks/useAuth";
import { Header, Nav, NavMenu, NavItem } from "./styles";
import Button from "Components/Button";
const Navbar = () => {
  // Extraer la información de autenticación
  const { userAuthenticate, user, signOff } = useAuth();

  useEffect(() => {
    userAuthenticate();
  }, []);
  return (
    <Header>
      <Nav>
        <NavMenu>
          <NavItem>LOGO</NavItem>
          {user?.estudiante && (
            <NavItem>{`${user.estudiante.nombreEstudiante} ${user.estudiante.apellidoEstudiante}`}</NavItem>
          )}
          {user?.profesor && (
            <NavItem>{`${user.profesor.nombreProfesor} ${user.profesor.apellidoProfesor}`}</NavItem>
          )}
          <Button styleButton="secondary" onClick={signOff}>
            Cerrar sesión
          </Button>
        </NavMenu>
      </Nav>
    </Header>
  );
};

export default Navbar;
