import React, { useState } from "react";
import styled from "styled-components";
import AppBar from "../../components/AppBar/AppBar";
import { loginForm } from "./constants";
import { useDispatch } from "react-redux";
import { signup } from "../../actions/index";

import { Button, Typography, TextField, MenuItem } from "@material-ui/core";

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

  const dispatch = useDispatch();

  const changeSignupForm = (event) => {
    const { value, name } = event.target;
    setFormSignup({
      ...formSignup,
      [name]: value,
    });
  };

  const sendSignupForm = (event) => {
    event.preventDefault();
    dispatch(signup(formSignup));
    setFormSignup({});
    // console.log(formSignup);
  };

  return (
    <>
      <AppBar />

      <SignupWrapper>
        <Typography variant="h5" color="secondary">
          Cadastro
        </Typography>
        <FormSignupWrapper onSubmit={sendSignupForm}>
          <TextField
            select
            required
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
          </TextField>

          {loginForm.map((input) => {
            return input.role === undefined ||
              input.role === formSignup.role ? (
              <TextField
                required={input.required}
                variant="outlined"
                margin="normal"
                type={input.type}
                label={input.label}
                name={input.name}
                pattern={input.pattern}
                title={input.title}
                value={formSignup[input.name]}
                onChange={changeSignupForm}
                inputProps={{
                  pattern: input.pattern,
                  title: input.title,
                }}
              />
            ) : (
              <></>
            );
          })}

          <Button type="onSubmit" color="primary" variant="contained">
            CADASTRAR
          </Button>
        </FormSignupWrapper>
      </SignupWrapper>
    </>
  );
}

export default SignupPage;
