import React from "react";
import styled from "styled-components";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #fff;
  margin: 0;
  padding: 0 150px;
`;

const NavGroup = styled.ul`
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 0.5rem;
  margin: 0;
`;

const NavItem = styled.li`
  list-style: none;
  background: #fff;
  padding: 0.5rem;
  margin: 0;
`;

const Resume = styled.li`
  list-style: none;
  background: #fff;
  padding: 0.5rem;
  margin: 0;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;

const Nav = () => {
  return (
    <NavWrapper>
      <NavGroup>
        <NavItem>logo</NavItem>
      </NavGroup>
      <NavGroup>
        <NavItem>About</NavItem>
        <NavItem>Work</NavItem>
        <NavItem>Contact</NavItem>
        <Resume>Resume</Resume>
      </NavGroup>
    </NavWrapper>
  );
};

export default Nav;
