import React from "react";
import Carousel from "react-material-ui-carousel";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import WidgetsOutlinedIcon from "@material-ui/icons/WidgetsOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import StorageSharpIcon from "@material-ui/icons/StorageSharp";
import FilterDramaSharpIcon from "@material-ui/icons/FilterDramaSharp";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";
import photo1 from "../../src/assets/life-3.jpg";
import photo2 from "../../src/assets/life-4.jpg";
import photo3 from "../../src/assets/life-5.jpg";
import photo4 from "../../src/assets/life-6.jpg";
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
  "& .Carousel-indicators-33":{visibility:"hidden"
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

const Mindspeak = () => {
  const classes = useStyles();
  var items = [
    {
      name: (
        <img
          src={photo1}
          style={{ width: "100%", height: "400px" }}
          alt="Second slide"
        />

        // <Card className={classes.root} lg={3} sm={2}>
        //   <CardActionArea>
        //     <CardContent className={classes.cardcontent}>
        //       <WidgetsOutlinedIcon className={classes.blockchain} />
        //       <Typography gutterBottom variant="h5" component="h2">
        //         Block chain
        //       </Typography>
        //       <Typography variant="body2" color="black" component="p">
        //         As Blockchain technologies continues to evolve rapidly, Happiest
        //         Mind is one of the early implementor using Hyperledger Fabric,
        //         Ethereum, R3 Corda and many others in multiple business use
        //         cases. Happiest Minds continues to stay focus in Blockchain
        //         technologies.
        //       </Typography>
        //     </CardContent>
        //   </CardActionArea>
        // </Card>
      ),
    },
    {
      name: (
        <img
        src={photo2}
        style={{ width: "100%", height: "400px" }}
        alt="Second slide"
      />
      ),
    },
    {
      name: (
        <img
        src={photo3}
        style={{ width: "100%", height: "400px" }}
        alt="Second slide"
      />
      ),
    },
    {
      name: (
        <img
          src={photo4}
          style={{ width: "100%", height: "400px" }}
          alt="Second slide"
        />
      ),
    },
  ];
  return (
    <Carousel
    //   indicatorIconButtonProps={{
    //     style: {
    //       padding: "10px",
    //       color: "white",
    //     },
    //   }}
      //   activeIndicatorIconButtonProps={{
      //     style: {
      //       color: "yellowgreen",
      //     },
      //   }}
    //   indicatorContainerProps={{
    //     style: {
    //       marginTop: "-62px",
    //       textAlign: "right",
    //       marginLeft: "-46px",
    //     },
    //   }}
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
