import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 5px;
  @media (min-width: 100px) and (max-width: 768px) {
    padding: 0;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 50px 150px 0 150px;
  @media (min-width: 100px) and (max-width: 768px) {
    padding: 10px;
  }
`;

export const NavGroup = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 0;
`;

export const NavItem = styled.li`
  list-style: none;
  padding: 0.5rem;
  margin: 0;
`;

export const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 4px;
  @media (max-width: 375px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 320px) {
    width: 40px;
    height: 40px;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: black;
  }
  @media (max-width: 375px) {
    font-size: 1em;
  }
  @media (max-width: 320px) {
    font-size: 0.8em;
  }
`;

export const Resume = styled.li`
  list-style: none;
  padding: 0.5rem;
  margin: 0;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;
