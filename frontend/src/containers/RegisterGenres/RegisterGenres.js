import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMusicalGenres } from "../../actions/index";
import { useGenres } from "../../utils/customHooks";
import Appbar from "../../components/AppBar/AppBar";

import {
  GenreWrapper,
  FormGenreWrapper,
  TitleWrapper,
  CardStyled,
} from "./Styles";
import {
  Button,
  Typography,
  TextField,
  Divider,
  List,
  ListItemText,
} from "@material-ui/core";
import { DoneAllOutlined } from "@material-ui/icons";
import BackToThePreviousPage from "../../components/BackToThePreviousPage/BackToThePreviousPage";

function RegisterGenres() {
  //   const [changeGenre, setChangeGenre] = useState("");
  const [genreName, setGenreName] = useState("");

  const isCadastred = useGenres();

  const dispatch = useDispatch();

  const changeGenreInput = (event) => {
    setGenreName(event.target.value);
    // console.log(genreName);
  };

  const sendMusicalGenre = (event) => {
    event.preventDefault();
    const nameUpperCase = genreName.toUpperCase();
    dispatch(addMusicalGenres(nameUpperCase));
    setGenreName("");
    // console.log(nameUpperCase);
  };

  const handleCadastredGenres = (event) => {
    event.preventDefault();
    //   console.log(useGenres)
  };

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
