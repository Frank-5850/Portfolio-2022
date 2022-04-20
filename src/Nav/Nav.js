import React from "react";
import {
  NavWrapper,
  NavGroup,
  NavItem,
  Resume,
  NavContainer,
} from "./nav.styles";

const Nav = () => {
  return (
    <NavContainer>
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
    </NavContainer>
  );
};

export default Nav;
