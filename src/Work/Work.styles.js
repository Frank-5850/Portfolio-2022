import styled from "styled-components";

export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 60vw;
`;

export const SectionTitle = styled.h1`
  margin: 0 0 10px 0;
`;

export const WorkCarousel = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const PhotoLink = styled.a`
  text-decoration: none;
`;

export const WorkPhoto = styled.img`
  width: 600px;
  height: 400px;
  object-fit: contain;
`;

export const WorkDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 250px;
  width: 400px;
  background-color: black;
  position: absolute;
  right: 0;
  z-index: 1;
  padding: 10px;
`;

export const WorkTitle = styled.h1`
  margin: 0 10px 10px 0;
  background-color: black;
  align-self: end;
`;

export const WorkDetail = styled.p`
  margin: 10px 0;
  background-color: black;
`;

export const TechList = styled.ul`
  margin: 0;
  display: flex;
  flex-flow: column wrap;
  height: 20%;
  background-color: black;
  padding: 0;
`;

export const Tech = styled.li`
  list-style: none;
  margin: 0;
  background-color: black;
`;

export const WorkLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: black;
`;

export const WorkLink = styled.a`
  text-decoration: none;
  margin: 10px;
  background-color: black;
`;
