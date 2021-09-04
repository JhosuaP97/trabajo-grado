import React, { useEffect } from "react";
import useAuth from "hooks/useAuth";
import { Header, Nav, NavMenu, NavItem, NavAnchor } from "./styles";
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
          <NavItem>
            <NavAnchor to="/courses">LOGO</NavAnchor>
          </NavItem>
          {user?.estudiante && (
            <NavItem>{`${user.estudiante.nombreEstudiante} ${user.estudiante.apellidoEstudiante}`}</NavItem>
          )}
          {user?.profesor && (
            <NavItem>{`${user.profesor.nombreProfesor} ${user.profesor.apellidoProfesor}`}</NavItem>
          )}
          <Button type="button" styleButton="secondary" onClick={signOff}>
            Cerrar sesión
          </Button>
        </NavMenu>
      </Nav>
    </Header>
  );
};

export default Navbar;
