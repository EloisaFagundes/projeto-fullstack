import React, { useState } from "react";
import Appbar from "../../components/AppBar/AppBar";
import BackToThePreviousPage from "../../components/BackToThePreviousPage/BackToThePreviousPage";

import { MusicContentWrapper, FormMusicWrapper } from "./Styles";
import {
  Button,
  Typography,
  TextField,
  MenuItem,
  ListItemText,
} from "@material-ui/core";
import { useBandsAlbuns } from "../../utils/customHooks";
import { useDispatch } from "react-redux";
import { addMusicToTheAlbum } from "../../actions/music";

function BandMusicsPage() {
  const [musicName, setMusicName] = useState("");
  const allAlbuns = useBandsAlbuns();
  const [albumId, setAlbumId] = useState([]);

  const dispatch = useDispatch();

  const changeInputMusic = (event) => {
    setMusicName(event.target.value);
  };

  const addNewMusic = (event) => {
    event.preventDefault();
    const info = { name: musicName, albumId: albumId };
    dispatch(addMusicToTheAlbum(info));
    setMusicName("");
    setAlbumId([]);
  };

  return (
    <>
      <Appbar />
      <BackToThePreviousPage />

      <MusicContentWrapper>
        <Typography variant="h5" color="primary">
          Cadastrar Música
        </Typography>

        <FormMusicWrapper onSubmit={addNewMusic}>
          <TextField
            required
            onChange={changeInputMusic}
            value={musicName}
            label="Nova música"
            InputLabelProps={{ shrink: true }}
            name="music"
            variant="outlined"
            margin="normal"
          ></TextField>
          <TextField
            select
            required
            key="albumId"
            variant="outlined"
            margin="normal"
            label="Álbum"
            name="albumId"
            onChange={(event) => setAlbumId(event.target.value)}
            value={albumId}
            InputLabelProps={{ shrink: true }}
          >
            {allAlbuns.map((album) => (
              <MenuItem key={album.id} value={album.id}>
                <ListItemText primary={album.name} />
              </MenuItem>
            ))}
          </TextField>
          <Button type="onSubmit" color="primary" variant="contained">
            CADASTRAR
          </Button>
        </FormMusicWrapper>
      </MusicContentWrapper>
    </>
  );
}
export default BandMusicsPage;
