import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Appbar from "../../components/AppBar/AppBar";
import BackToThePreviousPage from "../../components/BackToThePreviousPage/BackToThePreviousPage";
import { addAlbum } from "../../actions/album";
import { useGenres, useBandsAlbuns } from "../../utils/customHooks";

import styled from "styled-components";
import {
  Button,
  Typography,
  TextField,
  InputLabel,
  MenuItem,
  Checkbox,
  Select,
  OutlinedInput,
  Divider,
  List,
  ListItemText,
  Card,
  FormControl,
} from "@material-ui/core";

export const AlbumWrapper = styled.div`
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

const CardStyled = styled(Card)`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  margin: 1rem;
  margin-top: 40px;
`;

export const FormAlbumWrapper = styled.form`
  display: flex;

  flex-direction: column;
`;

// export const RegisterWrapper = styled.div`
//   margin-top: 2rem;
//   text-align: center;
// `;

const SelectStyled = styled(Select) `
margin-bottom: 10px;
`

function BandAlbunsPage() {
  const [albumName, setAlbumName] = useState("");
  const allGenres = useGenres();
  const albuns = useBandsAlbuns();
  const [genreId, setGenreId] = useState([]);

  const dispatch = useDispatch();

  console.log(albuns);

  const changeNewAlbumInput = (event) => {
    setAlbumName(event.target.value);
    console.log(albumName);
  };

  const addNewAlbum = (event) => {
    event.preventDefault();
    const info = { name: albumName, genresInfo: genreId };
    dispatch(addAlbum(info));
    setAlbumName("");
    setGenreId([]);
  };

  console.log(genreId);

  return (
    <>
      <Appbar />
      <BackToThePreviousPage />

      <AlbumWrapper>
        <TitleWrapper>
          <Typography variant="h5" color="primary">
            Cadastrar Álbum
          </Typography>
        </TitleWrapper>
        <FormAlbumWrapper onSubmit={addNewAlbum}>
          <TextField
            required
            onChange={changeNewAlbumInput}
            value={albumName}
            label="Novo álbum"
            InputLabelProps={{ shrink: true }}
            name="album"
            variant="outlined"
            margin="normal"
          ></TextField>
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-filled-label">
              Gênero Musical
            </InputLabel>
            <SelectStyled
              onChange={(event) => setGenreId(event.target.value)}
              value={genreId}
              multiple
              label="Gênero Musical"
              labelId="demo-simple-select-outlined-label"
              // InputLabelProps={{ shrink: true }}
              name="gênero"
              // input={<OutlinedInput />}
              renderValue={() =>
                genreId.length === 1
                  ? "1 gênero selecionado"
                  : `${genreId.length} gêneros selecionados`
              }
            >
              {allGenres.map((genre) => (
                <MenuItem key={genre.id} value={genre.id}>
                  <Checkbox checked={genreId.indexOf(genre.id) > -1} />
                  <ListItemText primary={genre.name} />
                </MenuItem>
              ))}
            </SelectStyled>
          </FormControl>
          <Button type="onSubmit" color="primary" variant="contained">
            CADASTRAR
          </Button>
        </FormAlbumWrapper>

        <TitleWrapper>
          <Typography color="primary" align="center">Álbuns cadastrados</Typography>
        </TitleWrapper>
        <Divider variant="middle" color="secondary" />
        <List>
          {albuns.map((album) => (
            <CardStyled>
              <ListItemText key={album.id}>{album.name}</ListItemText>
            </CardStyled>
          ))}
        </List>
      </AlbumWrapper>
    </>
  );
}
export default BandAlbunsPage;
