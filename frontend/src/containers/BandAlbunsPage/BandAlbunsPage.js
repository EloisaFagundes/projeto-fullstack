import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Appbar from "../../components/AppBar/AppBar";
import BackToThePreviousPage from "../../components/BackToThePreviousPage/BackToThePreviousPage";
import { addAlbum } from "../../actions/album";
import { useGenres, useBandsAlbuns } from "../../utils/customHooks";

import {
  AlbumWrapper,
  CardStyled,
  TitleWrapper,
  FormAlbumWrapper,
  SelectStyled,
} from "./Styles";
import {
  Button,
  Typography,
  TextField,
  InputLabel,
  MenuItem,
  Checkbox,
  Divider,
  List,
  ListItemText,
  FormControl,
} from "@material-ui/core";

function BandAlbunsPage() {
  const [albumName, setAlbumName] = useState("");
  const allGenres = useGenres();
  const albuns = useBandsAlbuns();
  const [genreId, setGenreId] = useState([]);

  const dispatch = useDispatch();

  const changeNewAlbumInput = (event) => {
    setAlbumName(event.target.value);
  };

  const addNewAlbum = (event) => {
    event.preventDefault();
    const info = { name: albumName, genresInfo: genreId };
    dispatch(addAlbum(info));
    setAlbumName("");
    setGenreId([]);
  };

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
              name="gênero"
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
          <Typography color="primary" align="center">
            Álbuns cadastrados
          </Typography>
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
