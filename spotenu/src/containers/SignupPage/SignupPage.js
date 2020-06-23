import React, { useState, useEffect } from "react";
import { useRoleTypes } from "../../utils/customHooks"

import AppBar from "../../components/AppBar/AppBar";
import { loginForm } from "./constants";
import { useDispatch } from "react-redux";
import { signupUser, signupBand, signupAdmin } from "../../actions/index";

import { Button, Typography, TextField, MenuItem } from "@material-ui/core";
import { SignupWrapper, FormSignupWrapper } from "./Styles"


function SignupPage() {
  const [formSignup, setFormSignup] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
    role: "",
    description: "",
  });
  const [isAdmin, setIsAdmin] = useState(false)
  const userRole = useRoleTypes()
  // console.log(isAdmin)

  const roleTypes = [
    { role: "BAND", name: "ARTISTA" },
    { role: "PAYINGLISTENER", name: "USUÁRIO PAGANTE" },
    { role: "UNPAYINGISTENER", name: "USUÁRIO GRATUITO" },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    if(userRole === "ADMIN") {
      setIsAdmin(true)
    }
  }, [userRole])

  const changeSignupForm = (event) => {
    const { value, name } = event.target;
    setFormSignup({
      ...formSignup,
      [name]: value,
    }); 
  };

  const sendSignupForm = (event) => {
    event.preventDefault()

    const {name, nickname, email, password, role} = formSignup
    if(isAdmin) {
      const formAdmin = {
        name,
        nickname,
        email,
        password,
        role: "ADMIN",
      }

      dispatch(signupAdmin(formAdmin))
    } 
    else if (formSignup.role === "BAND") {
      dispatch(signupBand(formSignup))
    }
    else {
      const formUser = {
        name,
        nickname,
        email,
        password,
        role
      }
      dispatch(signupUser(formUser))
    }
    setFormSignup({});
  };

  return (
    <>
      <AppBar />

      <SignupWrapper>
        <Typography variant="h5" color="secondary">
          Cadastro
        </Typography>
        <FormSignupWrapper onSubmit={sendSignupForm}>

          {isAdmin  === false && 
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
                <MenuItem value={role.role} key={role.id}>
                  {role.name}
                </MenuItem>
              );
            })}
          </TextField>
}

          {loginForm.map((input) => {
            return input.role === undefined ||
              input.role === formSignup.role ? (
              <TextField
                key = {input.input}
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
