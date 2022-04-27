import styled from "styled-components";

export const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  @media (max-width: 375px) {
    margin: 25px 0;
  }
  @media (max-width: 320px) {
    margin: 25px 0;
  }
`;

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50vh;
  width: 50vw;

  @media (max-width: 375px) {
    width: 100vw;
    flex-direction: column;
    align-items: center;
    // margin: 10px;
    // align-items: center;
  }

  @media (max-width: 320px) {
    width: 100vw;
    flex-direction: column;
    margin: 10px;
    align-items: center;
  }
`;

export const AboutMeSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 50vw;
  @media (max-width: 375px) {
    height: 100vh;
    width: 95vw;
  }
  @media (max-width: 320px) {
    height: 100vh;
    width: 95vw;
  }
`;

export const SectionTitle = styled.h1`
  margin: 0 0 10px 0;
  @media (max-width: 320px) {
    margin: 0;
  }
`;

export const SectionText = styled.p`
  margin: 10px 0;
`;

export const SkillSection = styled.ul`
  margin: 0;
  display: flex;
  flex-flow: column wrap;
  height: 20%;
  @media (max-width: 320px) {
    flex-flow: column;
  }
`;

export const Skills = styled.li`
  margin: 0;
`;

export const PhotoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 50%;
  @media (max-width: 375px) {
    width: 100%;
    height: 300px;
    align-items: center;
  }
  @media (max-width: 320px) {
    width: 100%;
    height: 300px;
    align-items: center;
  }
`;

export const Photo = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  border-radius: 5px;
  @media (max-width: 375px) {
    width: 80vw;
  }
  @media (max-width: 320px) {
    width: 80vw;
  }
`;
