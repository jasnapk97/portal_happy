import React, { useEffect, useState } from "react";

import Header from "../components/header";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { useLocation } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, fetchUserslist } from "../store/action";
import { Button, Divider, Paper, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

import { withStyles, createTheme } from "@material-ui/core/styles";
import Footer from "../components/footer";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "yellow",
      borderBottomColor: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
      color: "white",
    },
    "& .MuiInputBase-input": {
      color: "black",
      fontSize: "xx-large",
      height: "27px",
      width: "152px",
    },

    "&:hover fieldset": {
      borderColor: "yellow",
      borderBottomColor: "black",
    },
  },
})(TextField);
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "10px",
  },
  divider: {
    width: "320px",
    color: "black",
    backgroundColor: "grey",
  },
  margin: {
    margin: theme.spacing(1),
    width: "320px",
    color: "white",
    fontWeight: "800px",
  },

  card: {
    display: "flow-root",
    padding:"25px",
    // width: "100%",
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
  mainheading: {
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
  iconButton: {
    marginLeft: "-43px",
    color: "yellowgreen",
  },
  button: {
    color: "black",
    backgroundColor: "lightgrey",
  },
  paper1: {
    backgroundColor: "",
    color: "white",
    margin: "auto",
    marginTop: "50px",
  },
  textbox: {
    width: "100px",
    marginTop: "10px",
    "& .MuiOutlinedInput-input": {
      padding: "0px",
      height: "30px",
      // backgroundColor:"pink"
    },
  },
}));
const CurrentOpenings = ({}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const userdata = useSelector((state) => state.user);
  const userslist = useSelector((state) => state.user.userslist);

  let { state } = useLocation();
  const [searchkey, setserach] = React.useState("");
  useEffect(() => {
    dispatch(fetchUserslist());
  }, []);
  useEffect(() => {
    dispatch(fetchUsers(state));
  }, [state]);

  const handleChange = (e) => {
    setserach(e.target.value);
  };
  const handleSubmit = (e) => {
    dispatch(fetchUsers(searchkey));
  };
  const handleReset = (e) => {
    setserach("");
    dispatch(fetchUserslist());
  };
  const [checkbox, setCheckbox] = React.useState({
    Bangalore: false,
    Us: false,
    Australia: false,
  });

  const { Bangalore, Us, Australia } = checkbox;
 
  const   handleChecked = (event) => {
    setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });
    console.log("value", checkbox);
  };

  return (
    <>
      <Header></Header>
      <Grid container style={{ backgroundColor: "" }}>
        <Grid
          item
          style={{ width: "30%" }}
        >
          <Button style={{ height: "50px", width: "50%",backgroundColor:"yellowgreen" ,margin:"10px"}}>Clear All</Button>
          <Paper style={{height:"100%"}}>
            <Typography>By Experience (in Years)</Typography>
            <Divider className={classes.divider}></Divider>
            <Grid container>
              <Grid item style={{ height: "50px", width: "50%" }}>
                {" "}
                <TextField
                  id="outlined-basic"
                  className={classes.textbox}
                  variant="outlined"
                ></TextField>
              </Grid>
              <Grid item style={{ width: "50%" }}>
                <TextField
                  id="outlined-basic"
                  className={classes.textbox}
                  variant="outlined"
                ></TextField>
              </Grid>
            </Grid>
            <Grid>
              <Typography>Location</Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Bangalore}
                      onChange={handleChecked}
                      name="Bangalore"
                      color="primary"
                    />
                  }
                  label="Bangalore"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Us}
                      onChange={handleChecked}
                      name="Us"
                      color="primary"
                    />
                  }
                  label="Us"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Australia}
                      onChange={handleChecked}
                      name="Australia"
                      color="primary"
                    />
                  }
                  label="Australia"
                />
              </FormGroup>
            </Grid>
          </Paper>
        </Grid>
        <Grid item style={{ width: "70%" }}>
          <Grid className={classes.card}>
            <Grid>
              <Typography>
                {" "}
                <h1>Current Openings</h1>
              </Typography>
            </Grid>
            <div style={{ marginTop: "100px" }}>
              <>
                <div>
                  <div className={classes.paper1}>
                    <CssTextField
                      className={classes.margin}
                      id="custom-css-standard-input"
                      placeholder="Keywords"
                      value={searchkey}
                      onChange={handleChange}
                    ></CssTextField>

                    <IconButton
                      className={classes.iconButton}
                      aria-label="search"
                      onClick={handleSubmit}
                    >
                      <SearchIcon />
                    </IconButton>
                  </div>
                  <Button className={classes.button} onClick={handleReset}>
                    RESET
                  </Button>
                </div>
                {userdata?.user ? (
                  <Grid item className={classes.itemgrid}>
                    <Card className={classes.root} lg={3} sm={2}>
                      <CardActionArea>
                        <CardContent className={classes.cardcontent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            <h2
                              style={{
                                fontFamily: "Titillium Web', sans-serif",
                              }}
                            >
                              {userdata?.user?.id}
                            </h2>
                            {userdata?.user?.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="black"
                            component="p"
                          >
                            {userdata?.user?.body}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ) : (
                  ""
                )}
                {userslist?.data
                  ? userslist?.data?.map((item) => {
                      return (
                        <>
                          <Grid item className={classes.itemgrid}>
                            <Card className={classes.root} lg={3} sm={2}>
                              <CardActionArea>
                                <CardContent className={classes.cardcontent}>
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                  >
                                    <h2
                                      style={{
                                        fontFamily:
                                          "Titillium Web', sans-serif",
                                      }}
                                    >
                                      {item?.id}
                                    </h2>
                                    {item?.title}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="black"
                                    component="p"
                                  >
                                    {item?.body}
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                            </Card>
                          </Grid>
                        </>
                      );
                    })
                  : ""}
              </>
            </div>
          </Grid>
        </Grid>
      </Grid>

    </>
  );
};

export default CurrentOpenings;
