import React, { useState } from "react";
import styled from "styled-components";
import AppBar from "../../components/AppBar/AppBar";
import {
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
} from "@material-ui/core";

const SignupWrapper = styled.div`
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

const FormSignupWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const RegisterWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

function SignupPage() {
  const [formSignup, setFormSignup] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
    role: "",
    description: "",
  });

  const roleTypes = [
    { role: "BAND", name: "ARTISTA" },
    { role: "PAYINGUSER", name: "USUÁRIO PAGANTE" },
    { role: "UNPAYINGUSER", name: "USUÁRIO GRATUITO" },
  ];

  const changeSignupForm = (event) => {
    const { value, name } = event.target;
    setFormSignup({
      ...formSignup,
      [name]: value,
    });
  };

  const sendSignupForm = (event) => {
    event.preventDefault();
    console.log(formSignup);
  };

  return (
    <>
      <AppBar />
      <SignupWrapper>
      <Typography variant="h5" color="secondary">
          Cadastro
        </Typography>
        <FormSignupWrapper onSubmit={sendSignupForm}>
          <Select
            onChange={changeSignupForm}
            value={formSignup.role}
            label="Tipo"
            name="role"
            variant="outlined"
            // margin="normal"
          >
            <MenuItem value="">Selecione uma opção</MenuItem>
            {roleTypes.map((role) => {
              return (
                <MenuItem value={role.role} key={role.name}>
                  {role.name}
                </MenuItem>
              );
            })}
          </Select>

          <TextField
            required
            variant="outlined"
            margin="normal"
            type="text"
            label="Nome"
            name="name"
            value={formSignup.name}
            onChange={changeSignupForm}
          />

          <TextField
            required
            variant="outlined"
            margin="normal"
            type="text"
            label="Apelido"
            name="nickname"
            value={formSignup.nickname}
            onChange={changeSignupForm}
          />

          <TextField
            required
            variant="outlined"
            margin="normal"
            type="text"
            label="E-mail"
            name="email"
            value={formSignup.email}
            onChange={changeSignupForm}
          />

          <TextField
            required
            variant="outlined"
            margin="normal"
            type="text"
            label="Senha"
            name="password"
            value={formSignup.password}
            onChange={changeSignupForm}
          />

          {formSignup.role === "BAND" && (
            <TextField
              required
              variant="outlined"
              margin="normal"
              type="text"
              label="Descrição"
              name="description"
              value={formSignup.description}
              onChange={changeSignupForm}
            />
          )}

          <Button type="onSubmit" color="primary" variant="contained">CADASTRAR</Button>
        </FormSignupWrapper>
      </SignupWrapper>
    </>
  );
}

export default SignupPage;
