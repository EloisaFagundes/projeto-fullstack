import React from "react";
import { goBack } from "connected-react-router";
import { useDispatch } from "react-redux";

import { Button } from "@material-ui/core";
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';

function BackToThePreviousPage() {
  const dispatch = useDispatch();

  return (
    <>
      <Button  onClick={() => dispatch(goBack())}>
           <KeyboardBackspaceOutlinedIcon color="grey"/> voltar
    </Button>
    </>
  );
}

export default BackToThePreviousPage;
