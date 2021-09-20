import React from "react";
import Carousel from "react-material-ui-carousel";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Collapse, Grid, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import photo1 from "../assets/shefali-mundhada.jpg";
import photo2 from "../assets/sarvesh-deshmukh.jpg";
import photo3 from "../assets/nitin-pandurangji.jpg";
import photo6 from "../assets/kiran-veigas.jpg";
import photo5 from "../assets/manjula-loganathan.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
   
    maxWidth: 300,
    height: 500,
  },

  heading: {
    fontSize: "34px",
    fontWeight: "bold",
    paddingLeft: "63px",
    marginBottom: "10px",
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
    "&:hover":{
      backgroundColor:"white"
    }
  },
  general: {
    color: "white",
    backgroundColor: "#7754C4",
    paddingTop: "25px",
    margin: "1pc",
    height: "58px",
    paddingLeft: "13px",
  },
  heading_sub: {
    color: "white",
    backgroundColor: "#2D85C6",
    paddingTop: "25px",
    margin: "1pc",
    height: "58px",
    paddingLeft: "13px",
  },

  personalinfo: {
    color: "white",
    backgroundColor: "#C6BA2D",
    paddingTop: "25px",
    margin: "1pc",
    height: "58px",
    paddingLeft: "13px",
  },
  personalinformation: {
    color: "white",
    backgroundColor: "yellowgreen",
    paddingTop: "25px",
    margin: "1pc",
    height: "58px",
    paddingLeft: "13px",
  },
}));

const Mindspeakslider = () => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const [visible, setvisible] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setvisible(false);
  };

  var items = [
    {
      name: (
        <>
          <Grid container className={classes.Container}>
            <Grid>
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
                        <Paper className={classes.general}>
                          Shefali Mundhada
                          <p> Senior Engineering Manager</p>
                        </Paper>
                      </Grid>
                    </Grid>
                    <Typography
                      variant="body2"
                      style={{ padding: "10px" }}
                      color="black"
                      component="p"
                    >
                      Come April, I will be completing my 4 years at Happiest
                      Minds. Needless to say, what an amazing journey it has
                      been. In my 20 years of a Sales career this is one of the
                      most dedicated & collaborative teams I ever worked with. I
                      am very sure we will soar to new heights in the coming
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid style={{ marginLeft: "20px" }}>
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
                        <Paper className={classes.heading_sub}>
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
            <Grid style={{ marginLeft: "20px" }}>
              <Card className={classes.root} lg={3} sm={2}>
                <CardActionArea>
                  <CardContent className={classes.cardcontent}>
                    <Grid container>
                      <Grid style={{ width: "30%" }}>
                        {" "}
                        <img
                          style={{ width: "100%", height: "90%" }}
                          src={photo5}
                        ></img>
                      </Grid>

                      <Grid style={{ width: "70%" }}>
                        <Paper className={classes.personalinformation}>
                          Manjula Loganathan
                          <p>Senior Manager – L&D</p>
                        </Paper>
                      </Grid>
                    </Grid>

                    <Typography
                      variant="body2"
                      style={{ padding: "10px" }}
                      color="black"
                      component="p"
                    >
                      Happiest Minds is truly one of the “Best places to work
                      for”. I had not heard of Happiest Minds before joining;
                      however the first week into my job I realized that there
                      are ample opportunities available to those who want to
                      build a meaningful career here.
                      <IconButton
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        {/* <p style={{color:"yellowgreen"}} visible={visible}>  Show More....</p> */}
                      </IconButton>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </>
      ),
    },
{
  name: (
    <>
      <Grid container className={classes.Container}>
        <Grid>
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
                    <Paper className={classes.general}>
                      Shefali Mundhada
                      <p> Senior Engineering Manager</p>
                    </Paper>
                  </Grid>
                </Grid>
                <Typography
                  variant="body2"
                  style={{ padding: "10px" }}
                  color="black"
                  component="p"
                >
                  Come April, I will be completing my 4 years at Happiest
                  Minds. Needless to say, what an amazing journey it has
                  been. In my 20 years of a Sales career this is one of the
                  most dedicated & collaborative teams I ever worked with. I
                  am very sure we will soar to new heights in the coming
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid style={{ marginLeft: "20px" }}>
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
                    <Paper className={classes.heading_sub}>
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
        <Grid style={{ marginLeft: "20px" }}>
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
                        <Paper className={classes.personalinfo}>
                          Sarvesh Deshmukh
                          <p> Director-Business Development</p>
                        </Paper>
                      </Grid>
                    </Grid>

                    <Typography
                      variant="body2"
                      style={{ padding: "10px", }}
                      color="black"
                      component="p"
                    >
                      Looking back at my 5 years at Happiest Minds, I cannot
                      help but wonder at how fast technologies have evolved, and
                      how often I have had the opportunity to work on some of
                      these leading-edge solutions myself – from newer
                      architectural paradigms to emerging technologies and
                      languages. 
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
        </Grid>
      </Grid>
    </>
  ),


},
    {
      name: (
        <>
          <Grid container className={classes.Container}>
            <Grid>
            <Card className={classes.root} lg={3} sm={2}>
                <CardActionArea>
                  <CardContent className={classes.cardcontent}>
                    <Grid container>
                      <Grid style={{ width: "30%" }}>
                        {" "}
                        <img
                          style={{ width: "100%", height: "90%" }}
                          src={photo5}
                        ></img>
                      </Grid>

                      <Grid style={{ width: "70%" }}>
                        <Paper className={classes.personalinformation}>
                          Manjula Loganathan
                          <p>Senior Manager – L&D</p>
                        </Paper>
                      </Grid>
                    </Grid>

                    <Typography
                      variant="body2"
                      style={{ padding: "10px" }}
                      color="black"
                      component="p"
                    >
                      Happiest Minds is truly one of the “Best places to work
                      for”. I had not heard of Happiest Minds before joining;
                      however the first week into my job I realized that there
                      are ample opportunities available to those who want to
                      build a meaningful career here.
                      <IconButton
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        {/* <p style={{color:"yellowgreen"}} visible={visible}>  Show More....</p> */}
                      </IconButton>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid style={{ marginLeft: "20px" }}>
              <Card className={classes.root} lg={3} sm={2}>
                <CardActionArea>
                  <CardContent className={classes.cardcontent}>
                    <Grid container>
                      <Grid style={{ width: "30%" }}>
                        {" "}
                        <img
                          style={{ width: "100%", height: "90%" }}
                          src={photo6}
                        ></img>
                      </Grid>

                      <Grid style={{ width: "70%" }}>
                        <Paper className={classes.heading_sub}>
                          Kiran Veigas
                          <p> Director & Head of Corporate Marketing</p>
                        </Paper>
                      </Grid>
                    </Grid>

                    <Typography
                      variant="body2"
                      style={{ padding: "10px" }}
                      color="black"
                      component="p"
                    >
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
            <Grid style={{ marginLeft: "20px" }}>
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
                        <Paper className={classes.personalinfo}>
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
                      Looking back at my 5 years at Happiest Minds, I cannot
                      help but wonder at how fast technologies have evolved, and
                      how often I have had the opportunity to work on some of
                      these leading-edge solutions myself – from newer
                      architectural paradigms to emerging technologies and
                      languages. I was
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </>
      ),
    },
  ];
  return (
    <Carousel
      navButtonsProps={{
        style: {
          color: "yellowgreen",
          backgroundColor: "whitesmoke",
          borderRadius: "unset",
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: "yellowgreen",
        },
      }}
      animation="slide"
      navButtonsAlwaysVisible="false"
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
