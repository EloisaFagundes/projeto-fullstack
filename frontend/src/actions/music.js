import axios from "axios";

const baseUrl = "https://3sty5gbjc3.execute-api.us-east-1.amazonaws.com/v1";
const getToken = () => localStorage.getItem("token");

// band funcionalities

export const addMusicToTheAlbum = (album) => async (dispatch) => {
  try {
    await axios.post(`${baseUrl}/register-music`, album, {
      headers: {
        authorization: getToken(),
      },
    });
    alert("Cadastro da nova música efetuada com sucesso!");
  } catch (err) {
    console.error(err?.response?.data?.message);
    alert(
      err?.response?.data?.message ||
        "Não foi possível cadastrar sua nova música."
    );
  }
};

export const setAllMusicsFromAlbum = (musics) => ({
  type: "SET_ALL_MUSICS_FROM_ALBUM",
  payload: {
    musics,
  },
});
