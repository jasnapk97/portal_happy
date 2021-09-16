import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Button, Card, Divider, Grid, Paper } from "@material-ui/core";
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
  paragraph: { color: "black", fontWeight: "500" },
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
  fileicon: {
    color: "yellowgreen",
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
    width: "189px",
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
  input: {
    display: "none",
  },
  recommendbutton:{
    backgroundColor:"yellowgreen",
    color:"white",
    "&:hover ": {
     backgroundColor:"green",
     color:"white",
    },

  },
 
}));
const Recommendedjob = () => {
  const classes = useStyles();
  const [searchkey, setserach] = React.useState("");
  const [filename, setFilename] = React.useState("");
  const [job, setJob] = React.useState({ backgroundColor:"green" });
  const handleChange = (e) => {
    setserach(e.target.value);
  };
  const handleSubmit = (e) => {
    // dispatch(fetchUsers(searchkey));
  };
  const handleReset = (e) => {
    setserach("");
  };
  const fileInput = React.createRef();
  const fileUpload = () => {
    console.log("lakjdh");
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
                  <Card className={classes.job} 
                 
                  onMouseOver={(e) => {
                    setJob({ color: "black" });
                  }}
                  onMouseLeave={(e) => {
                    setJob({ color: "yellowgreen" });
                  }}
                
                >
                    <h3 
                  className={classes.subheading} 
                    job={job}
                     >Job Recommender</h3>
                    <Grid
                      container
                      style={{
                        justifyContent: "space-around",
                      }}
                    >
                      <Grid item>
                        <label style={{ fontSize: "12px" }}>{filename}</label>
                        <Divider
                          className={classes.divider}
                          orientation="horizondal"
                          accept="image/*"
                        ></Divider>

                        <input
                          accept="image/*"
                          className={classes.input}
                          id="contained-button-file"
                          multiple
                          type="file"
                          ref={fileInput}
                          onChange={(e) => {
                            setFilename(fileInput.current.files[0].name);
                          }}
                        ></input>
                      </Grid>
                      <Grid item>
                        <label htmlFor="contained-button-file">
                          <Button
                            backgroundColor="transparent"
                            component="span"
                          >
                            <FolderOutlinedIcon className={classes.fileicon} />
                          </Button>
                        </label>
                      </Grid>
                    </Grid>
                    <p style={{ fontSize: "10px" }}> {description}</p>
                    <Button className={classes.recommendbutton}>Recommend</Button>
                  </Card>
                </Grid>
                {/* <Divider className={classes.divider} orientation="vertical" /> */}
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
                  <p className={classes.paragraph}>
                    The job recommender is an AI powered feature which suggests
                    job opportunities based on your resume.
                  </p>
                  <p className={classes.paragraph}>
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
