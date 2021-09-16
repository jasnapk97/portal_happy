import React from "react";
import Carousel from "react-material-ui-carousel";
import photo1 from "../../src/assets/life-3.jpg";
import photo2 from "../../src/assets/life-4.jpg";
import photo3 from "../../src/assets/life-5.jpg";
import photo4 from "../../src/assets/life-6.jpg";
import { Card, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  heading: { fontSize: "35px", fontWeight: "400" },
  font: {
    position: "absolute",
    fontSize: "20px",
    top: "20%",
    width: "100%",
    textAlign: "left",
    color: "white",
    fontFamily: "Titillium Web, sans-serif",
    paddingLeft: "5%",
    lineHeight:"30px"
  },
}));
const Mindspeak = () => {
  const classes = useStyles();
  var items = [
    {
      name: (
        <>
          {" "}
          <Card className={classes.root}>
            <CardMedia
              style={{ width: "100%", height: "500px" }}
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={photo1}
              title="Contemplative Reptile"
            />

            <Typography
              gutterBottom
              variant="h1"
              component="h1"
              className={classes.font}
            >
              <h3 className={classes.heading}> Mindfulness</h3>
              <div style={{ width: "50%" }}>
                Happiest Minds is the first Indian IT firm to be 'The Mindful IT
                Company' and have adopted this as our tagline.
              </div>
            </Typography>
          </Card>
        </>
      ),
    },
    {
      name: (
        <>
          {" "}
          <Card className={classes.root}>
            <CardMedia
              style={{ width: "100%", height: "500px" }}
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={photo2}
              title="Contemplative Reptile"
            />

            <Typography
              gutterBottom
              variant="h1"
              component="h1"
              className={classes.font}
            >
              <h3 className={classes.heading}> HappiZest</h3>
              <div style={{ width: "50%" }}>
                Experience the Joy of Living through our wellness programs under
                different wellness themes, designed to improve one's health,
                well-being and productivity.
              </div>
            </Typography>
          </Card>
        </>
      ),
    },
    {
      name: (
        <>
          {" "}
          <Card className={classes.root}>
            <CardMedia
              style={{ width: "100%", height: "500px" }}
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={photo3}
              title="Contemplative Reptile"
            />

            <Typography
              gutterBottom
              variant="h1"
              component="h1"
              className={classes.font}
            >
              <h3 className={classes.heading}> Circle of Happiness</h3>
              <div style={{ width: "50%" }}>
                Social Responsibility is a core value of Happiest Minds. It is
                also one of our vision statements where we have set out to "be a
                leader in integrating social responsibility initiatives with
                core business operations".
              </div>
            </Typography>
          </Card>
        </>
      ),
    },
    {
      name: (
        <>
          {" "}
          <Card className={classes.root}>
            <CardMedia
              style={{ width: "100%", height: "500px" }}
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={photo4}
              title="Contemplative Reptile"
            />

            <Typography
              gutterBottom
              variant="h1"
              component="h1"
              className={classes.font}
            >
              <h3 className={classes.heading}> Happiness Evangelism</h3>
              <div style={{ width: "50%" }}>
                While happiness is a personal choice, happiness evangelism is an
                imperative and a responsibility. A happiness evangelist is one
                who appreciates and empathizes, one who is kind and courteous,
                polite and helpful, increases harmony and collaboration, is calm
                & committed, someone who goes the extra mile to deliver results
                & to keep one's internal/external customers happy.
              </div>
            </Typography>
          </Card>
        </>
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

export default Mindspeak;
