import axios from "axios";

const baseUrl = "https://3sty5gbjc3.execute-api.us-east-1.amazonaws.com/v1";
const getToken = () => localStorage.getItem("token");

// admin funcionalities

export const setGenres = (genres) => ({
  type: "SET_GENRES",
  payload: {
    genres,
  },
});

export const getAllGenres = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/all-genres`, {
      headers: {
        authorization: getToken(),
      },
    });

    dispatch(setGenres(response.data));
  } catch (err) {
    console.error(err?.response?.data?.message);
    alert(
      err?.response?.data?.message ||
        "Não foi possível acessar a lista com todos os gêneros."
    );
  }
};

export const addMusicalGenres = (name) => async (dispatch) => {
  try {
    await axios.post(
      `${baseUrl}/register-genre`,
      { name },
      {
        headers: {
          authorization: getToken(),
        },
      }
    );

    alert("Cadastro do novo gênero efetuado com sucesso!");
    dispatch(getAllGenres());
  } catch (err) {
    console.error(err?.response?.data?.message);
    alert(
      err?.response?.data?.message ||
        "Não foi possível acessar a lista com todas os gêneros."
    );
  }
};
