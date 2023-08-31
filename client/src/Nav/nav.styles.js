import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2;
  border-bottom: 1px solid #818589;
  padding-bottom: 5px;
  @media (min-width: 100px) and (max-width: 549px) {
    padding: 10px 0;
    width: 100vw;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 20px 30px;
  @media (min-width: 100px) and (max-width: 549px) {
    padding: 0px;
  }
`;

export const IconContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-left: 10px;
`;

export const HamburgerIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  height: 60px;
  width: 60px;
  @media (min-width: 100px) and (max-width: 549px) {
    padding: 0px;
    display: block;
    margin-right: 10px;
  }
`;

export const HamburgerLinks = styled.div`
  width: 30px;
  height: 3px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
`;

export const NavGroup = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 0;
  list-style: none;
  padding: 0;
  @media (max-width: 549px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  padding: 0.5rem;
  margin: 0;
  text-decoration: none;
  list-style-type: none;
`;

export const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 4px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #818589;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  &:after {
    content: ""; /*Content property must be set else this element will not show up on the page. */
    width: 100%;
    height: 1px;
    background-color: grey;
    border-radius: 4px; /*Applies roundness to the bar. */
    position: absolute; /*Allows for this element to be moved freely within the parent box that has the position of relative. */
    left: 0; /*Starting left position will be 0. */
    bottom: 0; /*Starting bottom position will be 0 since we want to place this element under the link text. */
    transform: scaleX(
      0
    ); /*We scale the width of this element on the X axis to 0 because we do not want to see it until hovered. */
    transform-origin: left; /*By default, transform origin is the center, meaning the bar would grow from the center if we don't change this. We set it to the left so that it grows from the left instead. */
    transition: transform 0.25s ease; /*Since we want to animate the transform property that is what we apply the transition to. */
  }
  &:hover::after {
    transform: scaleX(
      1
    ); /*When the link is hovered, we target the pseudo-element and turn the scaleX back to 1. This will make it grow back to the initial width of 100%. */
  }
  // &:hover {
  //   color: black;
  // }
  @media (max-width: 375px) {
    font-size: 1em;
  }
  @media (max-width: 320px) {
    font-size: 0.8em;
  }
`;

export const Resume = styled.li`
  padding: 0.5rem;
  margin: 0;
  border: 1px solid #818589;
  border-radius: 5px;
  position: relative;
`;

export const ResumeLink = styled.a`
  text-decoration: none;
  color: grey;
  font-weight: bold;
  cursor: pointer;
`;
