import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../assets/logo.png";
import { Grid } from "@material-ui/core";
import WidgetsOutlinedIcon from "@material-ui/icons/WidgetsOutlined";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },

  card: {
    //flexGrow: 1,
    width: "88%",

    backgroundColor: "#dedede",
    justifyContent: "space-evently",
    marginInline: "auto",
  },
  heading: {
    fontSize: "34px",
    fontWeight: "bold",
    paddingLeft: "63px",
    marginBottom:"10px"
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
    backgroundColor: "#dedede",
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
const CardComponent = () => {
  const classes = useStyles();

  return (
    <>
      <Paper style={{ backgroundColor: "#dedede" }}>
        <Grid container className={classes.card}>
          <div className={classes.head}>
            <Typography className={classes.heading}>
              Technologies we work with
            </Typography>
          </div>
        </Grid>
        <Grid container className={classes.card}>
          <div
            style={{
              backgroundColor: "#dedede",
              margin: "auto",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              style={{
                direction: "row",
                backgroundColor: "#dedede",
              }}
              spacing={3}
            >
              <Grid item className={classes.itemgrid} xs={3}>
                <Card className={classes.root} lg={3} sm={2}>
                  <CardActionArea>
                    <CardContent className={classes.cardcontent}>
                      <WidgetsOutlinedIcon className={classes.blockchain} />
                      <Typography gutterBottom variant="h5" component="h2">
                        Block chain
                      </Typography>
                      <Typography variant="body2" color="black" component="p">
                        "As Blockchain technologies continues to evolve rapidly,
                        Happiest Mind is one of the early implementor using
                        Hyperledger Fabric, Ethereum, R3 Corda and many others
                        in multiple business use cases. Happiest Minds continues
                        to stay focus in Blockchain technologies.",
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item className={classes.itemgrid} xs={3}>
                <Card className={classes.root} lg={3} sm={2}>
                  <CardActionArea>
                    <CardContent className={classes.cardcontent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Data Science
                      </Typography>
                      <Typography variant="body2" color="black" component="p">
                        "AI is another exciting area where deep learning is
                        revolutionizing audio, video, image & text analysis as
                        pre-trained models are becoming more prominent than
                        traditional statistical models. We have specialized in
                        developing deep learning models that work on low cost
                        devices while continuing to build solutions that enhance
                        the efficacy of Auto ML and Explainable AI frameworks.",
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item className={classes.itemgrid} xs={3}>
                <Card className={classes.root} lg={3} sm={2}>
                  <CardActionArea>
                    <CardContent className={classes.cardcontent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Dev Ops
                      </Typography>
                      <Typography variant="body2" color="black" component="p">
                        It's long that Dev Ops has become main stream in
                        Engineering process bringing Development, IT Operations
                        and Quality Engineering together. We thrive to take Dev
                        Ops automation to a new level, leveraging new tools and
                        technologies like - Prometheus, Site24x7, New Relic,
                        Kubernetes, Dockers etc.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item className={classes.itemgrid} xs={3}>
                <Card className={classes.root} lg={3} sm={2}>
                  <CardActionArea>
                    <CardContent className={classes.cardcontent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Programmable Network
                      </Typography>
                      <Typography variant="body2" color="black" component="p">
                        We at Happiest Minds are building the next generation of
                        Programmable Networks - working on Disaggregation,
                        containerized Networking OS development and integration
                        of programmable platforms such as NPUs, FPGAs and
                        popular ASICs, and virtual network functions,
                        programmable Data plane technologies such as DPDK and P4
                        , and closed loop Network Automation including Network
                        Monitoring and Visibility, Network Analytics and Intent
                        Driven Networks.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item className={classes.itemgrid} xs={3}>
                <Card className={classes.root} lg={3} sm={2}>
                  <CardActionArea>
                    <CardContent className={classes.cardcontent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Cloud Computing
                      </Typography>
                      <Typography variant="body2" color="black" component="p">
                        Happiest Minds Cloud implementation offerings takes next
                        leap towards finding innovative ways to strategize and
                        optimize the services/operations, information access,
                        application development and find new venues of market
                        expansion opportunities.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item className={classes.itemgrid} xs={3}>
                <Card className={classes.root} lg={3} sm={2}>
                  <CardActionArea>
                    <CardContent className={classes.cardcontent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Internet Of Things
                      </Typography>
                      <Typography variant="body2" color="black" component="p">
                        We at Happiest Minds are deeply focused into 3rd wave of
                        Internet of Things. Smart and connected devices
                        comprises of sensors, microprocessors, edge computing,
                        data storage, controls, cloud computing and essentially
                        embedded operating system. We continue to bolster our
                        capabilities and solutions by aligning ourselves with
                        industry leading alliance partners - AWS, Azure. We also
                        have our home grown IoT platform.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Paper>
    </>
  );
};

export default CardComponent;
