import React, { useState } from "react";
import Appbar from "../../components/AppBar/AppBar";
import BackToThePreviousPage from "../../components/BackToThePreviousPage/BackToThePreviousPage";

import styled from "styled-components";
import {
  Button,
  Typography,
  TextField,
  MenuItem,
  Select,
  Divider,
  List,
  ListItemText,
  Card,
} from "@material-ui/core";
import { useBandsAlbuns } from "../../utils/customHooks";
import { useDispatch } from "react-redux";
import { addMusicToTheAlbum } from "../../actions/music";

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

export const FormAlbumWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const RegisterWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

function BandMusicsPage() {
  const [musicName, setMusicName] = useState("");
  const allAlbuns = useBandsAlbuns();
  const [albumId, setAlbumId] = useState([]);

  const dispatch = useDispatch();

  console.log(allAlbuns);

  const changeInputMusic = (event) => {
    setMusicName(event.target.value);
    console.log(musicName);
  };

  const addNewMusic = (event) => {
    event.preventDefault()
    const info =  { name: musicName, albumId: albumId }
    dispatch(addMusicToTheAlbum(info))
    setMusicName("")
    setAlbumId([])
    console.log(info)
  }


  return (
    <>
      <Appbar />
      <BackToThePreviousPage />

      <AlbumWrapper>
        <Typography variant="h5" color="primary">
          Cadastrar Música
        </Typography>

        <FormAlbumWrapper onSubmit={addNewMusic}>
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
        </FormAlbumWrapper>
      </AlbumWrapper>
    </>
  );
}
export default BandMusicsPage;
