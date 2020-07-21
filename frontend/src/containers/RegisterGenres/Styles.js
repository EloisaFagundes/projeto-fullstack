import styled from "styled-components";
import { Card } from "@material-ui/core";

export const GenreWrapper = styled.div`
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

export const FormGenreWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  margin: 1rem;
`;

export const CardStyled = styled(Card)`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
