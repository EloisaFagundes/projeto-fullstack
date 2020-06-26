import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMusicalGenres } from "../../actions/index";
import { useGenres } from "../../utils/customHooks"
import Appbar from "../../components/AppBar/AppBar";
import styled from "styled-components";
import {
  Button,
  Typography,
  TextField,
  Divider,
  List,
  ListItemText,
  Card,
} from "@material-ui/core";
import { DoneAllOutlined } from "@material-ui/icons";
import BackToThePreviousPage from "../../components/BackToThePreviousPage/BackToThePreviousPage";

export const GenreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  width: 30vw;
  /* min-height: 80vh; */
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

export const RegisterWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const TitleWrapper = styled.div`
  margin: 1rem;
`;

const CardStyled = styled(Card)`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


function RegisterGenres() {
//   const [changeGenre, setChangeGenre] = useState("");
  const [genreName, setGenreName] = useState("");

  const isCadastred = useGenres()

  const dispatch = useDispatch();

  const changeGenreInput = (event) => {
    setGenreName(event.target.value);
    // console.log(genreName);
  };

  const sendMusicalGenre = (event) => {
    event.preventDefault();
    const nameUpperCase = genreName.toUpperCase()
    dispatch(addMusicalGenres(nameUpperCase));
    setGenreName("");
    // console.log(nameUpperCase);
  };


  const handleCadastredGenres = (event) => {
      event.preventDefault()
    //   console.log(useGenres)
  }


  return (
    <>
      <Appbar />
      <BackToThePreviousPage />
      <GenreWrapper>
        <Typography variant="h5" color="primary">
          Cadastrar Gênero
        </Typography>

        <FormGenreWrapper onSubmit={sendMusicalGenre}>
          <TextField
            required
            onChange={changeGenreInput}
            value={genreName}
            label="Novo gênero"
            InputLabelProps={{ shrink: true }}
            name="genre"
            variant="outlined"
            margin="normal"
          ></TextField>
          <Button type="onSubmit" color="primary" variant="contained">
            CADASTRAR
          </Button>
        </FormGenreWrapper>
      </GenreWrapper>

      <TitleWrapper>
        <Typography color="primary">Gêneros Cadastrados</Typography>
      </TitleWrapper>

      <Divider variant="middle" color="secondary" />

      <List onSubmit={handleCadastredGenres}>

          {isCadastred.map((genre) => (
               <CardStyled>
              <ListItemText key={genre?.id}>{genre?.name}</ListItemText>
              <DoneAllOutlined color="primary" />
              </CardStyled>
          ))}
      </List>
    </>
  );
}

export default RegisterGenres;
