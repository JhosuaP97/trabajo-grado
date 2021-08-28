import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const Header = styled.header`
  background-color: ${Colors.primary};
  width: 100%;
  padding: 1rem;
  color: ${Colors.white};
`;

export const Nav = styled.nav`
  margin: 0 2rem;
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavItem = styled.li`
  font-family: Lato;

  :first-child {
    font-size: 40px;
  }
`;
