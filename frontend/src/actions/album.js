import axios from "axios";

const baseUrl = "http://localhost:3001";
const getToken = () => localStorage.getItem("token");


// band funcionalities

export const setAllAlbunsBand = (albuns) => ({
  type: "SET_ALL_BAND_ALBUNS",
  payload: {
    albuns,
  },
});

export const getBandAlbuns = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/all-band-albuns`, {
      headers: {
        authorization: getToken(),
      },
    });
    dispatch(setAllAlbunsBand(response.data.result));
  } catch (err) {
    console.error(err?.response?.data?.message);
    alert(
      err?.response?.data?.message ||
        "Não foi possível pegar todos os seus álbuns."
    );
  }
};

export const addAlbum = (info) => async (dispatch) => {
  console.log(info, "Cheguei add album action");
  try {
     await axios.post(`${baseUrl}/register-album`, info, {
      headers: {
        authorization: getToken(),
      },
    });
    alert("Cadastro do novo álbum efetuado com sucesso!");
    dispatch(getBandAlbuns());
  } catch (err) {
    console.error(err?.response?.data?.message);

    alert(
      err?.response?.data?.message ||
        "Não foi possível cadastrar seu novo álbum."
    );
  }
};
