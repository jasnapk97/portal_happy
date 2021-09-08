import React, { useEffect, useState } from "react";

import Header from "../components/header";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUsers, fetchUserslist } from "../store/action";
import { Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../components/footer";
import Mindspeak from "../components/mindspeak";
import Mindspeakslider from "../components/mindspeakslider";

const useStyles = makeStyles((theme) => ({
  h3: {
    fontSize: "44px",
    fontWeight: 400,
  },
  container: {
    paddingLeft: "71px",
    paddingTop: "11px",
    backgroundColor: "#EEEE",
    paddingBottom: "45px",
  },
  paragraph: {
    width: "700px",
  },
  benefitsmatrix: {
    fontSize: "50px",
    fontWeight: "400",
  },
  second_container: {
    marginTop: "-50px",
    paddingLeft: "71px",
  },
  third_container: {
    justifyContent: "space-around",
  },
  general: {
    color: "white",
    backgroundColor: "#7754C4;",
    paddingTop: "25px",
    margin: "1pc",
    height: "58px",
    paddingLeft: "13px",
  },
  health: {
    color: "white",
    backgroundColor: "#49B6BA",
    paddingTop: "25px",
    margin: "1pc",
    height: "58px",
    paddingLeft: "13px",
  },
  parenting: {
    color: "white",
    backgroundColor: "#2D85C6",
    paddingTop: "25px",
    margin: "1pc",
    height: "58px",
    paddingLeft: "13px",
  },
  enriched: {
    color: "white",
    backgroundColor: "#C6BA2D",
    paddingTop: "25px",
    margin: "1pc",
    height: "58px",
    paddingLeft: "13px",
  },
  options: {
    backgroundColor: "#d6cced",
    margin: "1pc",
    textAlignLast: "center",
    paddingTop: "8px",
    paddingLeft: "13px",
  },

  healthoptions: {
    backgroundColor: "#c9e9ea",
    margin: "1pc",
    textAlignLast: "center",
    paddingTop: "8px",
    paddingLeft: "13px",
  },
  parentingoptions: {
    backgroundColor: "#c0daee",
    margin: "1pc",
    textAlignLast: "center",
    paddingTop: "8px",
    paddingLeft: "13px",
  },
  enrichedoptions: {
    backgroundColor: "#eeebc1",
    margin: "1pc",
    textAlignLast: "center",
    paddingTop: "8px",
    paddingLeft: "13px",
  },
  paper: {
    width: "121px",
    margin: "5px",
    backgroundColor: "#e7becf",

    padding: "25px",
  },
}));
const Lifeatwork = ({}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  let { state } = useLocation();

  useEffect(() => {
    dispatch(fetchUserslist());
  }, []);
  useEffect(() => {
    dispatch(fetchUsers(state));
  }, [state]);

  return (
    <>
      <Header></Header>
      <Grid className={classes.container}>
        <h3 className={classes.h3}> Life@Work</h3>
        <p className={classes.paragraph}>
        6 reasons why you should be here.
        </p>
      </Grid>
      <Mindspeak/>
      <Grid className={classes.container}>
      <h3 className={classes.h3}> MindSpeak</h3>
      <Grid container style={{justifyContent:"center"}}>
<Mindspeakslider/>

      </Grid>
      </Grid>
      <Footer/>
     
     
    </>
  );
};

export default Lifeatwork;