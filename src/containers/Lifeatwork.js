import React from "react";
import Header from "../components/header";
import { useDispatch } from "react-redux";
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
    fontWeight: "600",
  },
}));
const Lifeatwork = ({}) => {
  const classes = useStyles();

  return (
    <>
      <Header></Header>
      <Grid className={classes.container}>
        <h3 className={classes.h3}> Life@Work</h3>
        <p className={classes.paragraph}>6 reasons why you should be here.</p>
      </Grid>
      <Mindspeak />
      <Grid className={classes.container}>
        <h3 className={classes.h3}> MindSpeak</h3>
        <Grid container style={{ justifyContent: "center" }}>
          <Mindspeakslider />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Lifeatwork;
