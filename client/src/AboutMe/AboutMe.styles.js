// import styled from "styled-components";

// export const AboutMeWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   width: 100vw;
//   // @media (min-width: 100px) and (max-width: 549px) {
//   //   margin: 20px 0px;
//   //   height: 100vh;
//   //   width: auto;
//   //   min-height: 70vh;
//   //   background-color: yellow;
//   // }
// `;

// export const AboutMeContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   height: 50vh;
//   width: 50vw;
//   // @media (min-width: 450px) and (max-width: 1024px) {
//   //   width: 75vw;
//   //   align-items: center;
//   // }
//   @media (min-width: 100px) and (max-width: 549px) {
//     min-width: 100vw;
//     width: 90%;
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// export const AboutMeSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 50vh;
//   width: 50vw;
//   padding: 0px 10px;
//   // @media (min-width: 450px) and (max-width: 1024px) {
//   //   height: 50vh;
//   //   width: 45vw;
//   // }
//   @media (min-width: 100px) and (max-width: 549px) {
//     // height: 100vh;
//     width: 95%;
//   }
// `;

// export const SectionTitle = styled.h1`
//   margin: 0 0 10px 0;
//   @media (max-width: 549px) {
//     margin: 0;
//   }
// `;

// export const SectionText = styled.p`
//   margin: 10px 0;
// `;

// export const SkillSection = styled.ul`
//   margin: 0;
//   display: flex;
//   flex-flow: column wrap;
//   height: 20%;
//   @media (max-width: 549px) {
//     flex-flow: column;
//     height: auto;
//   }
// `;

// export const Skills = styled.li`
//   margin: 0;
// `;

// export const PhotoSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   height: 100%;
//   width: 50%;
//   // @media (min-width: 450px) and (max-width: 768px) {
//   //   height: 300px;
//   //   align-items: center;
//   // }
//   @media (min-width: 100px) and (max-width: 549px) {
//     width: 100%;
//     // height: 300px;
//     align-items: center;
//   }
// `;

// export const Photo = styled.img`
//   width: 400px;
//   height: 400px;
//   object-fit: contain;
//   border-radius: 5px;
//   // @media (min-width: 450px) and (max-width: 768px) {
//   //   width: 300px;
//   //   height: 300px;
//   // }
//   @media (min-width: 100px) and (max-width: 549px) {
//     width: 80vw;
//   }
// `;

import styled from "styled-components";

export const AboutMeWrapper = styled.div``;

export const AboutMeContainer = styled.div`
  @media (max-width: 549px) {
    display: flex;
    flex-direction: column-reverse;
    margin: 0;
  }
`;

export const AboutMeSection = styled.div`
  @media (max-width: 549px) {
    padding: 10px 50px;
  }
`;

export const SectionTitle = styled.h1`
  margin: 0 0 10px 0;
  @media (max-width: 549px) {
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
  @media (max-width: 549px) {
    flex-flow: column;
    height: auto;
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
  // @media (min-width: 450px) and (max-width: 768px) {
  //   height: 300px;
  //   align-items: center;
  // }
  @media (min-width: 100px) and (max-width: 549px) {
    width: 100%;
    align-items: center;
  }
`;

export const Photo = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  border-radius: 5px;
  // @media (min-width: 450px) and (max-width: 768px) {
  //   width: 300px;
  //   height: 300px;
  // }
  @media (min-width: 100px) and (max-width: 549px) {
    width: 80vw;
  }
`;
