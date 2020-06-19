import React, { useState } from "react";
import styled from "styled-components";
import AppBar from "../../components/AppBar/AppBar";
import { Button, Typography, TextField } from "@material-ui/core";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  width: 30vw;
  min-height: 80vh;
  justify-content: center;
  text-align: center;

  @media screen and (max-device-width: 1200px) {
    width: 90vw;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const RegisterWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

function LoginPage() {
  const [form, setForm] = useState({
    nicknameOrEmail: "",
    password: "",
  });

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
            label="nickname ou e-mail"
            value={form.nicknameOrEmail}
            name="nicknameOrEmail"
            onChange={changeForm}
          />
          <TextField
            required
            variant="outlined"
            margin="normal"
            type="password"
            label="senha"
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
          </Typography>
          <Button color="inherit" href="/signup">
            Clique aqui
          </Button>
        </RegisterWrapper>
      </LoginWrapper>
    </>
  );
}
export default LoginPage;
