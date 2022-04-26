import React from "react";
import {
  NavWrapper,
  NavGroup,
  NavItem,
  Resume,
  NavContainer,
  NavLink,
  LogoImg,
} from "./nav.styles";
import logo from "../assets/FP.png";

const Nav = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <NavGroup style={{ padding: "0" }}>
          <NavItem style={{ padding: "0" }}>
            <LogoImg src={logo} alt="" />
          </NavItem>
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
