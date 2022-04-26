import styled from "styled-components";

export const LandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
  width: 50vw;
  @media (max-width: 414px) {
    height: 100vh;
    width: 100vw;
  }
`;

export const Greeting = styled.h3`
  margin: 0 50px;
`;

export const HeaderText = styled.h1`
  font-size: 3em;
  margin: 0 50px;
  @media (max-width: 414px) {
    font-size: 2em;
  }
`;

export const Skills = styled.h4`
  margin: 10px 50px;
`;
