import React from "react";
import weather from "../assets/ProjectPhotos/Weather.JPG";
import {
  WorkWrapper,
  WorkContainer,
  SectionTitle,
  WorkCarousel,
  PhotoLink,
  WorkPhoto,
  WorkDetailContainer,
  WorkTitle,
  WorkDetail,
  TechList,
  Tech,
  WorkLinkContainer,
  WorkLink,
} from "./Work.styles";

const Work = () => {
  return (
    <WorkWrapper id="work">
      <WorkContainer>
        <SectionTitle>Work</SectionTitle>
        <WorkCarousel>
          <PhotoLink
            href="https://glassmorphic-weather.herokuapp.com/home"
            target="_blank"
          >
            <WorkPhoto src={weather} />
          </PhotoLink>
          <WorkDetailContainer>
            <WorkTitle>Weather App</WorkTitle>
            <WorkDetail>
              Simple weather application build using the Open-Weather API. Users
              are able to get the weather, 24 hour forecast and 7 day forecast
              for their current location or search a location.
            </WorkDetail>
            <TechList>
              <Tech>React</Tech>
              <Tech>Open-Weather API</Tech>
              <Tech>Styled-Components</Tech>
              <Tech>Express</Tech>
              <Tech>Heroku</Tech>
            </TechList>
            <WorkLinkContainer>
              <WorkLink
                href="https://github.com/Frank-5850/weather-react"
                target="_blank"
              >
                Github
              </WorkLink>
              <WorkLink
                href="https://glassmorphic-weather.herokuapp.com/home"
                target="_blank"
              >
                website
              </WorkLink>
            </WorkLinkContainer>
          </WorkDetailContainer>
        </WorkCarousel>
      </WorkContainer>
    </WorkWrapper>
  );
};

export default Work;
