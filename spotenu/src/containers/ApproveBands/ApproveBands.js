import React from "react";
import { useBands } from "../../utils/customHooks"
import Appbar from '../../components/AppBar/AppBar'

import {
  List,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
} from "@material-ui/core";

function ApproveBands() {

    const allBands = useBands()


  return (
    <>
    <Appbar />
      {/* <List>
            <ListItemIcom>
        <p> APROVAR BANDAS </p>
        </ListItemIcom>
        </List> */}

      <List>
        <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
      </List>
    </>
  );
}

export default ApproveBands;
