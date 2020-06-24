import React from "react";
import { useBands } from "../../utils/customHooks";
import Appbar from "../../components/AppBar/AppBar";
import { useDispatch } from "react-redux";
import { approveBand } from "../../actions";

import {
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
  Card,
} from "@material-ui/core";
import styled from "styled-components";
import DoneAllOutlined from "@material-ui/icons/Done";
import Divider from "@material-ui/core/Divider";

const CardStyled = styled(Card)`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  margin: 1rem;
`;

function ApproveBands() {
  const dispatch = useDispatch();
  const allBands = useBands(false);

  const isApproved = allBands.filter((band) => band.approved === true);
  const isNotApproved = allBands.filter((band) => band.approved === false);

  console.log(isNotApproved);
  console.log(isApproved);

  const handleApprovation = (event) => {
    event.preventDefault();
    console.log(useBands);
  };

  const onclickToApprove = (band) => {
    console.log(band);
    dispatch(approveBand(band.id));
  };

  return (
    <>
      <Appbar />
      <TitleWrapper>
        <Typography color="primary">Bandas aguardando aprovação</Typography>
      </TitleWrapper>
      <Divider variant="middle" color="secondary" />
      <List component="nav" onSubmit={handleApprovation}>
        {isNotApproved.map((band) => (
          <CardStyled>
            <ListItemText  key={band.id}>
              {band.name}
            </ListItemText>
            <Button
              type="onSubmit"
              color="primary"
              variant="contained"
              onClick={() => onclickToApprove(band)}
            >
              Aprovar
            </Button>
          </CardStyled>
        ))}
      </List>
      <TitleWrapper>
        <Typography color="primary" >Bandas aprovadas</Typography>
      </TitleWrapper>
      <Divider variant="middle" color="secondary" />
      <List onSubmit={handleApprovation}>
        {isApproved.map((band) => (
          <CardStyled>
            <ListItemText key={band.id}>{band.name}</ListItemText>
            <DoneAllOutlined color="primary" />
          </CardStyled>
        ))}
      </List>
    </>
  );
}

export default ApproveBands;