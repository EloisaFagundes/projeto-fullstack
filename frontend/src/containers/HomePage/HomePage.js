import React from "react";
import AppBar from "../../components/AppBar/AppBar";
import styled from "styled-components";

// const BannerImageStyled = styled.img `
// width: auto;
// height: 100%;
// background-color: orange;
// `

export const BannerStyled = styled.div`
  background-image: url("https://user-images.githubusercontent.com/59846340/85867599-83f86a80-b79f-11ea-9e5d-09427b6b2e9e.png");
  background-color: orange;
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 92vh;
`;
export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

function HomePage() {
  
    return (
      <>
        <AppBar />

        <BannerStyled>
        </BannerStyled>
      </>
    );
  
}
export default HomePage;
