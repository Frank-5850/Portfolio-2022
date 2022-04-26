import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 50px 150px 0 150px;
`;

export const NavGroup = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  margin: 0;
`;

export const NavItem = styled.li`
  list-style: none;
  padding: 0.5rem;
  margin: 0;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const Resume = styled.li`
  list-style: none;
  padding: 0.5rem;
  margin: 0;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;
