import React from "react";
import photo from "../assets/profile pic.jpg";
import {
  AboutMeContainer,
  AboutMeSection,
  AboutMeWrapper,
  Photo,
  PhotoSection,
  SectionText,
  SectionTitle,
  Skills,
  SkillSection,
} from "./AboutMe.styles";

const AboutMe = () => {
  return (
    <AboutMeWrapper id="aboutMe">
      <AboutMeContainer>
        <AboutMeSection>
          <SectionTitle>About Me</SectionTitle>
          <SectionText>
            Greetings, My name is Franco Phan and I love building things for the
            web. My interest in software engineering really shaped when I
          </SectionText>
          <SkillSection>
            <Skills>Javascript (ES6+)</Skills>
            <Skills>React JS</Skills>
            <Skills>MongoDB</Skills>
            <Skills>Node JS</Skills>
            <Skills>Express JS</Skills>
            <Skills>CSS</Skills>
            <Skills>styled-components</Skills>
          </SkillSection>
        </AboutMeSection>
        <PhotoSection>
          <Photo src={photo} />
        </PhotoSection>
      </AboutMeContainer>
    </AboutMeWrapper>
  );
};

export default AboutMe;
