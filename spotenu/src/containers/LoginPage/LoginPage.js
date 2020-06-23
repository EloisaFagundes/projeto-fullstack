import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../actions/index";
import AppBar from "../../components/AppBar/AppBar";

import { Button, Typography, TextField } from "@material-ui/core";
import {LoginWrapper, FormWrapper, RegisterWrapper} from "./Styles"


function LoginPage() {
  const [form, setForm] = useState({
    nicknameOrEmail: "",
    password: "",
  });

  const dispatch = useDispatch();

  const changeForm = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const sendForm = (event) => {
    event.preventDefault();
    console.log(form);
    dispatch(login(form))
    setForm({})
  };

  return (
    <>
      <AppBar />

      <LoginWrapper>
        <Typography variant="h5" color="secondary" >
          Login
        </Typography>
        <FormWrapper onSubmit={sendForm}>
          <TextField
            required
            variant="outlined"
            margin="normal"
            type="text"
            label="Nome do Usuário ou e E-mail"
            value={form.nicknameOrEmail}
            name="nicknameOrEmail"
            onChange={changeForm}
          />
          <TextField
            required
            variant="outlined"
            margin="normal"
            type="password"
            label="Senha"
            value={form.password}
            name="password"
            onChange={changeForm}
          />
          <Button type="onSubmit" color="primary" variant="contained">
            Entrar
          </Button>
        </FormWrapper>

        <RegisterWrapper>
          <Typography variant="subtitle1" component="p">
            Ainda não possui cadastro?
            <Button color="inherit" href="/signup">
            Clique aqui
          </Button>
          </Typography>
        
        </RegisterWrapper>
      </LoginWrapper>
    </>
  );
}

export default LoginPage;
