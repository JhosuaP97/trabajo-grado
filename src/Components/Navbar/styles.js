import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";
import { Link } from "react-router-dom";
export const Header = styled.header`
  background-color: ${Colors.primary};
  width: 100%;
  padding: 1rem;
  color: ${Colors.white};
  margin-bottom: 1rem;
`;

export const Nav = styled.nav`
  width: 82%;
  margin: 0 auto;
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

export const NavAnchor = styled(Link)`
  font-family: Lato;
  text-decoration: none;
  color: ${Colors.white};
`;
