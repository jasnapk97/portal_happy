import React from "react";
import Carousel from "react-material-ui-carousel";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import { Collapse, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import photo1 from "../assets/shefali-mundhada.jpg";
import photo2 from "../assets/sarvesh-deshmukh.jpg";
import photo3 from "../assets/nitin-pandurangji.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    height: 500,
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
  "& .Carousel-indicators-34": {
    visibility: "collapse",
  },
  cardcontent: {
    backgroundColor: "white",
  },
  general: {
    color: "white",
    backgroundColor: "#7754C4",
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
  blockchain: {
    color: "yellowgreen",
    fontSize: "55px",
  },
  enriched: {
    color: "white",
    backgroundColor: "#C6BA2D",
    paddingTop: "25px",
    margin: "1pc",
    height: "58px",
    paddingLeft: "13px",
  },
  "& .Carousel-button-42": {
    color: "#42af4a",
  },
}));

const Mindspeakslider = () => {
  const classes = useStyles();
  var items = [
    {
      name: (
        <Card className={classes.root} lg={3} sm={2}>
          <CardActionArea>
            <CardContent className={classes.cardcontent}>
              <Grid container>
                <Grid style={{ width: "30%" }}>
                  {" "}
                  <img
                    style={{ width: "100%", height: "90%" }}
                    src={photo1}
                  ></img>
                </Grid>

                <Grid style={{ width: "70%" }}>
                  <Paper className={classes.general}>Sarvesh Deshmukh </Paper>
                </Grid>
              </Grid>
              <Typography
                variant="body2"
                style={{ padding: "10px" }}
                color="black"
                component="p"
              >
                Come April, I will be completing my 4 years at Happiest Minds.
                Needless to say, what an amazing journey it has been. In my 20
                years of a Sales career this is one of the most dedicated &
                collaborative teams I ever worked with. I am very sure we will
                soar to new heights in the coming
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ),
    },
    {
      name: (
        <Card className={classes.root} lg={3} sm={2}>
          <CardActionArea>
            <CardContent className={classes.cardcontent}>
              <Grid container>
                <Grid style={{ width: "30%" }}>
                  {" "}
                  <img
                    style={{ width: "100%", height: "90%" }}
                    src={photo2}
                  ></img>
                </Grid>

                <Grid style={{ width: "70%" }}>
                  <Paper className={classes.parenting}>
                    Sarvesh Deshmukh
                    <p> Director-Business Development</p>
                  </Paper>
                </Grid>
              </Grid>

              <Typography
                variant="body2"
                style={{ padding: "10px" }}
                color="black"
                component="p"
              >
                It's long that Dev Ops has become main stream in Engineering
                process bringing Development, IT Operations and Quality
                Engineering together. We thrive to take Dev Ops automation to a
                new level, leveraging new tools and technologies like -
                Prometheus, Site24x7, New Relic, Kubernetes, Dockers etc.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ),
    },
    {
      name: (
        <Card className={classes.root} lg={3} sm={2}>
          <CardActionArea>
            <CardContent className={classes.cardcontent}>
              <Grid container>
                <Grid style={{ width: "30%" }}>
                  {" "}
                  <img
                    style={{ width: "100%", height: "90%" }}
                    src={photo3}
                  ></img>
                </Grid>

                <Grid style={{ width: "70%" }}>
                  <Paper className={classes.enriched}>
                    Sarvesh Deshmukh
                    <p> Director-Business Development</p>
                  </Paper>
                </Grid>
              </Grid>

              <Typography
                variant="body2"
                style={{ padding: "10px" }}
                color="black"
                component="p"
              >
                Looking back at my 5 years at Happiest Minds, I cannot help but
                wonder at how fast technologies have evolved, and how often I
                have had the opportunity to work on some of these leading-edge
                solutions myself – from newer architectural paradigms to
                emerging technologies and languages. I was
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ),
    },
    {
      name: (
        <Card className={classes.root} lg={3} sm={2}>
          <CardActionArea>
            <CardContent className={classes.cardcontent}>
              <Grid container>
                <Grid style={{ width: "30%" }}>
                  {" "}
                  <img
                    style={{ width: "100%", height: "90%" }}
                    src={photo2}
                  ></img>
                </Grid>

                <Grid style={{ width: "70%" }}>
                  <Paper className={classes.parenting}>
                    Sarvesh Deshmukh
                    <p> Director-Business Development</p>
                  </Paper>
                </Grid>
              </Grid>

              <Typography
                variant="body2"
                style={{ padding: "10px" }}
                color="black"
                component="p"
              >
                Happiest Minds Cloud implementation offerings takes next leap
                towards finding innovative ways to strategize and optimize the
                services/operations, information access, application development
                and find new venues of market expansion opportunities.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ),
    },
  ];
  return (
    <Carousel
      indicatorIconButtonProps={{
        style: {
          padding: "10px",
          visibility: "collapse",
          color: "transparent",
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          visibility: "collapse",
          color: "transparent",
        },
      }}
      indicatorContainerProps={{
        style: {
          marginTop: "-62px",
          textAlign: "right",
          marginLeft: "-46px",
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );

  function Item(props) {
    return (
      <div style={{ width: "100%", height: "50%", marginTop: "-20px" }}>
        <h2>{props.item.name}</h2>
      </div>
    );
  }
};

export default Mindspeakslider;
