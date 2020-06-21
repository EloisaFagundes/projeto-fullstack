import axios from "axios";
import { routes } from "../containers/Router/index";
import { push } from "connected-react-router";

const baseUrl="http://localhost:3001"

export const signup = (signupData) => async (dispatch) => {
// console.log(signupData, "Cheguei action")

  try {
      const response = await axios.post(`${baseUrl}/signup`, signupData);
      const token = response.data.token
      const user = response.data.user
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      dispatch(push(routes.home))
      alert("Cadastro efetuado com sucesso!");
  } catch (error) {
    console.error(error.message);
    alert("Não foi possível efetuar cadastro.");
  }
};

export const login = (info) => async (dispatch) => {
    // console.log(signupData, "Cheguei action")
    
      try {
          const response = await axios.post(`${baseUrl}/login`, info);
          const token = response.data.acessToken
          const user = response.data.user
          localStorage.setItem("token", token)
          localStorage.setItem("user", JSON.stringify(user))

          // alert("Login efetuado com sucesso!");
          dispatch(push(routes.root))
          
      } catch (error) {
        console.error(error.response);
        alert("Não foi possível efetuar login.");
      }
    };
