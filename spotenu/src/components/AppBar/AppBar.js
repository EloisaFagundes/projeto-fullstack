import React, { useState } from "react";
import { useRoleTypes } from "../../utils/customHooks";

import styled from "styled-components";

import { Button, IconButton, AppBar, Toolbar } from "@material-ui/core";
import { PowerSettingsNewRounded } from "@material-ui/icons";

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

function Appbar() {
  const userRole = useRoleTypes();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    setIsLoggedIn(!isLoggedIn);
    localStorage.clear();
  };

  let buttons;
  switch (userRole) {
    case "ADMIN":
      buttons = (
        <div>
          <Button href="/aprovar-bandas" color="inherit">
            {" "}
            BANDAS{" "}
          </Button>
          <Button href="/cadastrar-generos" color="inherit">
            {" "}
            GÊNEROS{" "}
          </Button>
          <IconButton href="/" color="secondary" onClick={logout}>
            <PowerSettingsNewRounded />
          </IconButton>
        </div>
      );
      break;
    case "BAND":
      buttons = (
        <div>
          <Button color="inherit">Criar Álbuns</Button>
          <Button color="inherit">Criar Músicas</Button>
          <IconButton href="/" color="secondary" onClick={logout}>
            <PowerSettingsNewRounded />
          </IconButton>
        </div>
      );
      break;
    case "PAYINGLISTENER":
      buttons = (
        <div>
          <Button>Usuário Pagante</Button>
          <IconButton href="/" color="secondary" onClick={logout}>
            <PowerSettingsNewRounded />
          </IconButton>
        </div>
      );
      break;
    case "UNPAYINGISTENER":
      buttons = (
        <div>
          <Button>Usuário Gratuito</Button>;
          <IconButton color="secondary" onClick={logout}>
            <PowerSettingsNewRounded />
          </IconButton>
        </div>
      );
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
        <p>{buttons}</p>
      </ToolbarStyled>
    </AppBar>
  );
}
export default Appbar;
