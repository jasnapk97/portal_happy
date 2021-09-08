import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "../assets/logo.png";
import { Grid } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  image: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  button: {
    
    color: "darkgrey",
    backgroundColor: "transparent",
    border: "none",
    "&:hover": {
      color: "green",
      backgroundColor: "transparent",
    },
  },
  divider: {
    height: "15px",
     margin: "5px",
    marginLeft:"10px"
  },
  button1: {
    backgroundColor: "transparent",
    //    marginLeft: "20px",
    border: "double",
    borderWidth: "2px",
    borderColor: "darkgrey",

    "&:hover": {
      color: "green",
      backgroundColor: "white",
    },

  },
}));
const Header = () => {
  const classes = useStyles();

  return (
  
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "white" }}>
          <Toolbar style={{ height: "104px" }}>
            <div>
              <img className={classes.image} src={logo}></img>
            </div>
            <Typography variant="h8" className={classes.title}>
              Careers
            </Typography>
            <Grid style={{ backgroundColor: "", marginRight: "60px" }}>
              <Button color="black" className={classes.button} href="/">
                Home
                <Divider className={classes.divider} orientation="vertical" />
              </Button>
              
              <Button
                color="black"
                className={classes.button}
                href="/current_openings"
              >
                {" "}
                Current Openings
                <Divider className={classes.divider} orientation="vertical" />
              </Button>
         
              <Button color="black"  href="/benefits" className={classes.button}>
                {" "}
                Benefits
                <Divider className={classes.divider} orientation="vertical" />
              </Button>
              <Button color="black" href="/lifeatwork" className={classes.button}>
                {" "}
                Life@Work

              </Button>
              <Button className={classes.button1}>COMPANY WEBSITE</Button>
            </Grid>{" "}
          </Toolbar>
        </AppBar>
      </div>
   
  );
};

export default Header;
