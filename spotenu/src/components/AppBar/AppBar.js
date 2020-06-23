import React from "react";
import { useRoleTypes } from "../../utils/customHooks";

import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

function Appbar() {
  const userRole = useRoleTypes();

  let buttons;
  switch (userRole) {
    case "ADMIN":
      buttons = 
      <div>
        <Button href="/aprovar-bandas" color="inherit"> Aprovar BANDAS </Button>
        <Button href="/cadastrar-generos" color="inherit"> Cadastrar GÊNEROS </Button>
      </div>;
      break;
    case "BAND":
      buttons=<Button>Band</Button>
      break;
    case "PAYINGLISTENER":
      buttons = <Button>Usuário Pagante</Button>
      break;
    case "UNPAYINGISTENER":
      buttons = <Button>Usuário Gratuito</Button>
      break;

    default:
      break;  
  }

  return (
    <AppBar position="static" color="primary">
      <ToolbarStyled>
        <img
          src={require("../../images/Novo Projeto (2).png")}
          alt="logo branco spotenu"
        />
        <p>
          {/* <Button href="/signup" color="inherit">
            Inscrever-se
          </Button>
          <Button href="/login" color="inherit">
            Login
          </Button> */}

          {buttons}
        </p>
      </ToolbarStyled>
    </AppBar>
  );
}
export default Appbar;
