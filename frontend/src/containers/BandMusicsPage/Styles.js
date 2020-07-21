import styled from "styled-components";

export const MusicContentWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 2rem auto;
width: 30vw;
justify-content: center;
text-align: center;

@media screen and (max-device-width: 1200px) {
  width: 90vw;
}
`;

export const FormMusicWrapper = styled.form`
display: flex;
flex-direction: column;
`;