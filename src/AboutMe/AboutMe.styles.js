import styled from "styled-components";

export const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: darkgrey;
`;

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50vh;
  width: 50vw;
`;

export const AboutMeSection = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  height: 50vh;
  width: 50vw;
`;

export const PhotoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 50%;
`;

export const Photo = styled.img`
  object-fit: contain;
`;

export const SectionTitle = styled.h1`
  margin: 0 0 10px 0;
`;

export const SectionText = styled.p`
  margin: 10px 0;
`;

export const SkillSection = styled.ul`
  margin: 0;
  display: flex;
  flex-flow: column wrap;
  height: 20%;
`;

export const Skills = styled.li`
  margin: 0;
`;
