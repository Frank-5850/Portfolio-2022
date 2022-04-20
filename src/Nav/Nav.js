import React from "react";
import { NavWrapper, NavGroup, NavItem, Resume } from "./nav.styles";

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
