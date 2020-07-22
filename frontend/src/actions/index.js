import axios from "axios";
import { routes } from "../containers/Router/index";
import { push } from "connected-react-router";

const baseUrl = "http://localhost:3001";
const getToken = () => localStorage.getItem("token");

// signups

export const signupUser = (signupData) => async (dispatch) => {

  try {
    const response = await axios.post(`${baseUrl}/signup/user`, signupData);
    const token = response.data.acessToken;
    const user = response.data.user;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    alert("Cadastro efetuado com sucesso!");
    dispatch(push(routes.home));
  } catch (err) {
    console.error(err.response.data);
    alert(err?.response?.data?.message || "Não foi possível efetuar cadastro.");
  }
};

export const signupBand = (signupData) => async (dispatch) => {

  try {
    const response = await axios.post(`${baseUrl}/signup/band`, signupData);
    const token = response.data.token;
    const user = response.data.user;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    dispatch(push(routes.home));
  } catch (err) {
    console.error(err.response.data);
    alert(err?.response?.data?.message || "Não foi possível efetuar cadastro.");
  }
};

export const signupAdmin = (signupData) => async (dispatch) => {

  try {
    await axios.post(`${baseUrl}/signup/admin`, signupData, {
      headers: {
        authorization: getToken(),
      },
    });

    alert("Cadastro do novo administrador efetuado com sucesso!");
  } catch (err) {
    console.error(err.response.data);
    alert(err?.response?.data?.message || "Não foi possível efetuar cadastro.");
  }
};

// login
export const login = (info) => async (dispatch) => {

  try {
    const response = await axios.post(`${baseUrl}/login`, info);
    const token = response.data.acessToken;
    const user = response.data.user;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    dispatch(push(routes.home));
  } catch (err) {
    console.error(err.response);
    alert(err?.response?.data?.message || "Não foi possível efetuar login.");
  }
};


