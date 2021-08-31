import React from "react";

import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Button, Grid } from "@material-ui/core";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";
import { connect } from "react-redux";
import { withStyles, createTheme } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "yellow",
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
      color: "white",
    },
    "& .MuiInputBase-input": {
      color: "white",
      fontWeight: "900",
      height: "21px",
      width: "270px",
    },

    "&:hover fieldset": {
      borderColor: "yellow",
      borderBottomColor: "white",
    },
  },
})(TextField);
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  paper1: {
    textAlignLast: "center",
    alignItems: "center",
    width: "500px",
    backgroundColor: "",
    color: "white",
    margin: "auto",
    marginTop: "50px",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "yellow",
    color: "red",
    width: "100%",
  },
  iconButton: {
    marginLeft: "-43px",
    color: "white",
  },
  serchbar: {
    backgroundColor: "blue",
    height: "160px",
  },
  input: {
    marginLeft: theme.spacing(1),
    width: "336px",
    flex: 1,
  },
  recommented: {
    backgroundColor: "green",
    height: "160px",
  },
  margin: {
    margin: theme.spacing(1),
    width: "320px",
    color: "white",
    fontWeight: "800px",
  },

  button: {
    fontFamily: "Titillium Web, sans-serif",
    backgroundColor: "transparent",

    fontSize: "18px",
    marginTop: "50px",
    color: "white",
    fontWeight: "bolder",
    "&:hover": {
      color: "white",
      backgroundColor: "transparent",
    },
    paddingLeft: "32px",
  },
}));
const Searchbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const [search, setserach] = React.useState("");
  const handleChange = (e) => {
    setserach(e.target.value);
    console.log("value", search);
  };
  const handleSubmit = (e) => {
    history.push({
      pathname: `/current_openings`,
      state: search,
    });
  };
  const handleClick = (e) => {
    console.log("click=====>>>", search);
    //history.push('/current_openings')
  };
  return (
    <Grid container className={classes.searchContainer}>
      <div
        style={{
          backgroundColor: "#49B6BA",
          height: "170px",
          width: "70%",
        }}
      >
        <div className={classes.paper1}>
          <CssTextField
            className={classes.margin}
            id="custom-css-standard-input"
            placeholder="Search by job title,location and skills"
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
      </div>
      <div
        style={{
          backgroundColor: "yellowgreen",
          height: "170px",
          width: "30%",
        }}
      >
        <Button className={classes.button} type="submit" onClick={handleClick}>
          {" "}
          RECOMMENT ME A JOB
          <WbIncandescentOutlinedIcon />
        </Button>
      </div>
    </Grid>
  );
};

export default Searchbar;
