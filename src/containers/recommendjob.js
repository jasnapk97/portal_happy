import React from "react";
import { useHistory } from "react-router-dom";
import CardComponent from "../components/card";
import Diversity from "../components/diversity";
import Footer from "../components/footer";
import Header from "../components/header";
import Searchbar from "../components/searchbar";
import Slider from "../components/slider";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Button, Divider, Grid, Paper } from "@material-ui/core";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";
import { withStyles, createTheme } from "@material-ui/core/styles";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";

import TextField from "@material-ui/core/TextField";
const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "yellow",
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
      color: "black",
    },
    "& .MuiInputBase-input": {
      color: "black",
      height: "21px",
      width: "270px",
      fontSize: "x-large",
    },

    "&:hover fieldset": {
      borderColor: "black",
      borderBottomColor: "black",
    },
    "& .MuiInput-root": {
      width: "637px",
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
    backgroundColor: "#dedede",
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
 
  margin: {
    margin: theme.spacing(1),
    width: "320px",
    color: "white",
    fontWeight: "800px",
  },

 
  iconButton: {
    color: "yellowgreen",
    "&:hover": {
        color: "green",
        backgroundColor: "transparent",
      },

  },
  button: {
    color: "black",
    backgroundColor: "lightgrey",
    marginLeft: "660px",
  },
  paper1: {
    color: "white",
    margin: "auto",
    marginTop: "50px",
  },

  SearchIcon: {
    color: "yellowgreen",
    fontSize: "50px",
    marginTop: "-18px",
    marginLeft: "305px",
  },
  job: {
    padding: "53px",
    height: "188px",
  },

  divider: {
    marginTop: " 19px",
    width: "214px",
    color: "black",
    backgroundColor: "grey",
  },
  division_1: {
    width: "820px",
    backgroundColor: "#dedede",
    paddingLeft: "95px",
  },
  heading: {
    fontSize: "34px",
    fontWeight: "normal",
    color: "black",
  },
  division_2: {
    width: "820px",
    backgroundColor: "#dedede",
    paddingLeft: "95px",
  },
  subheading: {
    color: "yellowgreen",
    fontWeight: "normal",
    fontSize: "x-large",
  },
}));
const Recommendedjob = () => {
  const classes = useStyles();
  const [searchkey, setserach] = React.useState("");
  const handleChange = (e) => {
    setserach(e.target.value);
  };
  const handleSubmit = (e) => {
    // dispatch(fetchUsers(searchkey));
  };
  const handleReset = (e) => {
    setserach("");
  };
  let description =
    " For best results, upload *.doc/*.docx/*.pdf/*.txt format files only (File size should be < 2MB)";
  return (
    <>
      <Header />
      <div>
        <Grid container className={classes.searchContainer}>
          <div>
            <div className={classes.division_1}>
              <h3 className={classes.heading}>Current Openings</h3>
              <div className={classes.paper1}>
                <CssTextField
                  className={classes.margin}
                  id="custom-css-standard-input"
                  placeholder="KEYWORDS"
                  value={searchkey}
                  onChange={handleChange}
                ></CssTextField>

                <IconButton
                  className={classes.iconButton}
                  aria-label="search"
                  onClick={handleSubmit}
                >
                  <SearchIcon className={classes.SearchIcon} />
                </IconButton>
              </div>
              <Button className={classes.button} onClick={handleReset}>
                RESET
              </Button>
              <h4
                style={{
                  color: "black",
                }}
              >
                Current Openings found
              </h4>
            </div>
          </div>
        </Grid>
      </div>
      <div>
        <Grid container className={classes.searchContainer}>
          <div>
            <div className={classes.division_2}>
              <h4 style={{ color: "black" }}>
                Upload your resume and let our recommender engine suggest jobs
                from current openings.
              </h4>
              <Grid
                container
                style={{
                  height: "500px",
                }}
              >
                <Grid
                  item
                  style={{
                    width: "50%",
                    padding: "25px",
                  }}
                >
                  <Paper className={classes.job}>
                    <h3 className={classes.subheading}>Job Recommender</h3>
                    <Grid
                      container
                      style={{
                        justifyContent: "space-around",
                      }}
                    >
                      <Grid item>
                        <Divider
                          className={classes.divider}
                          orientation="horizondal"
                        ></Divider>
                      </Grid>
                      <Grid item>
                        <FolderOutlinedIcon />
                      </Grid>
                    </Grid>
                    <p style={{ fontSize: "10px" }}> {description}</p>
                  </Paper>
                </Grid>
                <Grid
                  item
                  style={{
                    backgroundColor: "#dedede",
                    width: "50%",
                    padding: "65px",
                  }}
                >
                  <h3 style={{ color: "yellowgreen" }}>
                    How Job Recommender works?
                  </h3>
                  <p style={{ color: "black", fontWeight: "500" }}>
                    The job recommender is an AI powered feature which suggests
                    job opportunities based on your resume.
                  </p>
                  <p style={{ color: "black", fontWeight: "500" }}>
                    You just need to upload your resume and our recommender
                    engine will scan your resume and suggest suitable job
                    opportunities for you.
                  </p>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Recommendedjob;
