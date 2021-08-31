import React, { useEffect, useState } from "react";

import Header from "../components/header";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { useLocation } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/action";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "10px",
  },

  card: {
    //flexGrow: 1,
    width: "100%",

    backgroundColor: "#dedede",
    justifyContent: "space-evently",
    marginInline: "auto",
  },
  heading: {
    fontSize: "34px",
    fontWeight: "bold",
    paddingLeft: "63px",
    marginBottom: "10px",
  },
  head: {
    fontSize: "34px",
    fontWeight: "900px",
    width: "600px",
    backgroundColor: "#dedede",
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  itemgrid: {
    margin: "27px",
  },
  "& .MuiGrid-item": {
    margin: "27px",
  },
  cardcontent: {
    backgroundColor: "white",
    color: "black",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
    },
  },
  blockchain: {
    color: "yellowgreen",
    fontSize: "55px",
  },
}));
const CurrentOpenings = ({}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.user);
  let { state } = useLocation();
  console.log("state in currentpage", state);
  useEffect(() => {
    dispatch(fetchUsers(state));
  }, []);
  console.log("userdata", userdata.user);
  return (
    <>
      <Header></Header>
      <Grid container className={classes.card}>
        <Typography>
          {" "}
          <h1>Current Openings</h1>
        </Typography>

        <div style={{ marginTop: "10px" }}>
          {/* {userdata.user
            ? 
            
             userdata.user.map((item) => { */}
          {/* return ( */}
          <>
            <Grid item className={classes.itemgrid}>
              <Card className={classes.root} lg={3} sm={2}>
                <CardActionArea>
                  <CardContent className={classes.cardcontent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      <h2 style={{ fontFamily: "Titillium Web', sans-serif" }}>
                        {userdata?.user?.id}
                      </h2>
                      {userdata?.user?.title}
                    </Typography>
                    <Typography variant="body2" color="black" component="p">
                      {userdata?.user?.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </>
          {/* ); */}
          {/* }
              )
            : ""} */}
        </div>
      </Grid>
    </>
  );
};

export default CurrentOpenings;
