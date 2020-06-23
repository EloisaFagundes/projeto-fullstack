import axios from "axios";
import { routes } from "../containers/Router/index";
import { push } from "connected-react-router";

const baseUrl="http://localhost:3001"
const getToken = () => localStorage.getItem("token")

// signups
export const signupUser = (signupData) => async (dispatch) => {
// console.log(signupData, "Cheguei signupUSER action")

  try {
      const response = await axios.post(`${baseUrl}/signup/user`, signupData);
      const token = response.data.acessToken
      const user = response.data.user
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))

      alert("Cadastro efetuado com sucesso!");
      dispatch(push(routes.root))
     
  } catch (error) {
    console.error(error.message);
    alert("Não foi possível efetuar cadastro.");
  }
};

export const signupBand = (signupData) => async (dispatch) => {
  // console.log(signupData, "Cheguei signupBAND action")
  
    try {
        const response = await axios.post(`${baseUrl}/signup/band`, signupData);
        const token = response.data.token
        const user = response.data.user
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
  
        dispatch(push(routes.root))
       
    } catch (error) {
      console.error(error.message);
      alert("Não foi possível efetuar cadastro.");
    }
  };

export const signupAdmin = (signupData) => async (dispatch) => {
  console.log(signupData, "Cheguei signupADMIN action")
  
    try {
         await axios.post(`${baseUrl}/signup/admin`, signupData,
        {
      headers: {
        authorization: getToken()
      }
    })

    alert("Cadastro do novo administrador efetuado com sucesso!");
       
    } catch (error) {
      console.error(error.message);
      alert("Não foi possível efetuar cadastro.");
    }
  };


// login
export const login = (info) => async (dispatch) => {
    // console.log(info, "Cheguei login action")
    
      try {
          const response = await axios.post(`${baseUrl}/login`, info);
          const token = response.data.acessToken
          const user = response.data.user
          localStorage.setItem("token", token)
          localStorage.setItem("user", JSON.stringify(user))

          dispatch(push(routes.root))
          
      } catch (error) {
        console.error(error.response);
        alert("Não foi possível efetuar login.");
      }
    };

    // admin functions
  export const setBands = (bands) => ({
    type: "SET_BANDS",
    payload: {
      bands
    }
  })

  export const getBands = () => async (dispatch) => {
    console.log("Pega sua lista de artistas.")
    // try {
    //   const response = await axios.get(`${baseUrl}/all-bands`, {
    //     headers: {
    //       authorization: getToken()
    //     }
    //   })

    //   dispatch(setBands(response.data.bands))

    // } catch(err) {
    //   console.error(err.message)
    //     alert("Não foi possível acessar a lista de bandas cadastradas.")
    // }
  }