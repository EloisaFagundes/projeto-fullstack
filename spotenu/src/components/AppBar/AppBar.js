import React from "react";
import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

function Appbar() {
  return (
    <AppBar position="static" color="primary">
      <ToolbarStyled>
        <img
          src={require("../../images/Novo Projeto (2).png")}
          alt="logo branco spotenu não" 
        />
        <p>
          <Button href="/signup" color="inherit">
            Inscrever-se
          </Button>
          <Button href="/login" color="inherit">
            Login
          </Button>
        </p>
      </ToolbarStyled>
    </AppBar>
  );
}
export default Appbar;
