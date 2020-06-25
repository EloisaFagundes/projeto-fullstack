import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../actions/index";

import { Button, Typography, TextField } from "@material-ui/core";
import {
  LoginWrapper,
  FormWrapper,
  RegisterWrapper,
  LogoStyled,
} from "./Styles";

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
    dispatch(login(form));
    setForm({});
  };

  return (
    <>
      <LoginWrapper>
        <LogoStyled
          src={require("../../images/Novo Projeto (3).png")}
          alt="logo branco spotenu"
        />

        <Typography variant="h5" color="secondary">
          Login
        </Typography>

        <FormWrapper onSubmit={sendForm}>
          <TextField
            required
            variant="outlined"
            margin="normal"
            type="text"
            label="Apelido ou e E-mail"
            InputLabelProps={{ shrink: true }}
            value={form.nicknameOrEmail || ""}
            name="nicknameOrEmail"
            onChange={changeForm}
          />
          <TextField
            required
            variant="outlined"
            margin="normal"
            type="password"
            label="Senha"
            InputLabelProps={{ shrink: true }}
            value={form.password || ""}
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
