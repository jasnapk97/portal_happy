import React from "react";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: " -17px",
    width: "320px",
    color: "black",
    backgroundColor: "grey",
  },
  link: {
    textDecorationLine: "none",
    color: "gray",
    "&:hover": {
      textDecorationLine: "underline",
    },
    text: {
      marginTop: "20px",
      marginLeft: "-10px",
      color: "gray",
    },
  },
  textaddress: {
    marginTop: "20px",
    marginLeft: "-10px",
    color: "white",
  },
  divideraddress: {
    marginTop: " -17px",
    color: "white",
    backgroundColor: "grey",
  },
}));

const Footer = () => {
  const classes = useStyles();

  const companySite = () => {
    window.open("https://www.happiestminds.com/");
  };
  const aboutCompany = () => {
    window.open("https://www.happiestminds.com/about-us/");
  };
  const termsofCompany = () => {
    window.open("https://www.happiestminds.com/terms-and-conditions/");
  };
  const privacyPolicy = () => {
    window.open("https://www.happiestminds.com/privacy-policy/");
  };

  return (
    <div>
      <Grid
        container
        style={{
          backgroundColor: "black",

          padding: "27px",
        }}
      >
        <Grid item>
          <div
            style={{
              width: "200px",
              background: "black",
            }}
          >
            <h4 style={{ fontWeight: 400, fontSize: "18px", color: "#82c32d" }}>
              Infromation
            </h4>

            <Divider className={classes.divider} orientation="horizondal" />
            <p className={classes.text}>
              {" "}
              <Link className={classes.link} onClick={companySite}>
                Company Website
              </Link>
            </p>
            <p className={classes.text}>
              {" "}
              <Link className={classes.link} onClick={aboutCompany}>
                About Happiest Minds
              </Link>
            </p>
            <p className={classes.text}>
              {" "}
              <Link className={classes.link} onClick={termsofCompany}>
                Terms and Conditions
              </Link>
            </p>
            <p className={classes.text}>
              {" "}
              <Link className={classes.link} onClick={privacyPolicy}>
                Privacy Policy
              </Link>
            </p>
          </div>
        </Grid>
        <Grid item>
          <div
            style={{
              background: "black",
            }}
          >
            <h4 style={{ fontWeight: 400, fontSize: "18px", color: "#82c32d" }}>
              Address
            </h4>
            <div
              style={{
                width: "200px",
              }}
            >
              <Divider
                className={classes.divideraddress}
                orientation="horizondal"
              />
              <p style={{ color: "gray" }}>
                {" "}
                Happiest Minds Technologies Limited SMILES 2,3 & 4
              </p>
              <p style={{ color: "gray" }}>
                {" "}
                Registered Office : #53/1-4, Hosur Main Road, Madivala (Next To
                Madivala Police Station) Bengaluru-560068, Karnataka, India
              </p>
            </div>
          </div>
        </Grid>
        <Grid
          item
          style={{
            backgroundColor: "black",
          }}
        >
          <div
            style={{
              background: "black",

              backgroundColor: "black",
              maxWidth: "min-content",
            }}
          >
            <h4 style={{ fontWeight: 400, fontSize: "18px", color: "#82c32d" }}>
              Follow Us
            </h4>
            <div style={{ width: "200px" }}>
              <Divider className={classes.divider} orientation="horizondal" />
              <p style={{ color: "gray" }}>
                {" "}
                <FacebookIcon />
                <LinkedInIcon />
                <TwitterIcon />
                <YouTubeIcon />
                <InstagramIcon />
              </p>
            </div>
          </div>
        </Grid>
        <Grid item>
          <div
            style={{
              background: "black",

              backgroundColor: "black",
            }}
          >
            <h4 style={{ fontWeight: 400, fontSize: "18px", color: "#82c32d" }}>
              Contact Us
            </h4>
            <div style={{ width: "200px" }}>
              <Divider className={classes.divider} orientation="horizondal" />
              <p style={{ color: "gray" }}>
                {" "}
                peoplepositions@happiestminds.com
              </p>
              <p style={{ color: "gray" }}>
                {" "}
                Call us on +91 80 61960300 +91 80 61960400 Fax +91 80 6196 0700
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
