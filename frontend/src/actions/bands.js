import axios from "axios";


const baseUrl = "http://localhost:3001";
const getToken = () => localStorage.getItem("token");

// admin funcionalities

export const setBands = (bands) => ({
  type: "SET_BANDS",
  payload: {
    bands,
  },
});

export const getBands = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/all-bands`, {
      headers: {
        authorization: getToken(),
      },
    });
    dispatch(setBands(response.data));
  } catch (err) {
    console.error(err?.response?.data?.message);
    alert(
      err?.response?.data?.message ||
        "Não foi possível acessar a lista com todas as bandas. Erro FRONT"
    );
  }
};

export const approveBand = (id) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${baseUrl}/approve-band/${id}`,
      {},
      {
        headers: {
          authorization: getToken(),
        },
      }
    );

    dispatch(getBands(response.data));
  } catch (err) {
    console.error(err?.response?.data?.message);

    alert(
      err?.response?.data?.message ||
        "Não foi possível acessar a lista de bandas cadastradas para aprovar."
    );
  }
};
