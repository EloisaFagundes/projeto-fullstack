import styled from "styled-components";

import { Select, Card } from "@material-ui/core";

export const AlbumWrapper = styled.div`
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

export const CardStyled = styled(Card)`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  margin: 1rem;
  margin-top: 40px;
`;

export const FormAlbumWrapper = styled.form`
  display: flex;

  flex-direction: column;
`;

export const SelectStyled = styled(Select)`
  margin-bottom: 10px;
`;
