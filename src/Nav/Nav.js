import React from "react";
import {
  NavWrapper,
  NavGroup,
  NavItem,
  Resume,
  NavContainer,
  NavLink,
} from "./nav.styles";

const Nav = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <NavGroup>
          <NavItem>logo</NavItem>
        </NavGroup>
        <NavGroup>
          <NavItem>
            <NavLink href="#aboutMe">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#work">Work</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
          <Resume>
            <NavLink>Resume</NavLink>
          </Resume>
        </NavGroup>
      </NavWrapper>
    </NavContainer>
  );
};

export default Nav;
