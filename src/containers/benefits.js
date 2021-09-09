import React, { useEffect, useState } from "react";

import Header from "../components/header";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUsers, fetchUserslist } from "../store/action";
import { Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../components/footer";

const useStyles = makeStyles((theme) => ({
  h3: {
    fontSize: "44px",
    fontWeight: 400,
  },
  container: {
    paddingLeft: "71px",
    paddingTop: "11px",
    backgroundColor: "#EEEE",
    paddingBottom: "45px",
  },
  paragraph: {
    width: "700px",
  },
  benefitsmatrix: {
    fontSize: "50px",
    fontWeight: "400",
  },
  second_container: {
    marginTop: "-50px",
    paddingLeft: "71px",
  },
  third_container: {
    justifyContent: "space-around",
  },
  general: {
    color: "white",
    backgroundColor: "#7754C4;",
    paddingTop: "25px",
    margin: "1pc",
    height: "58px",
    paddingLeft: "13px",
  },
  health: {
    color: "white",
    backgroundColor: "#49B6BA",
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
  enriched: {
    color: "white",
    backgroundColor: "#C6BA2D",
    paddingTop: "25px",
    margin: "1pc",
    height: "58px",
    paddingLeft: "13px",
  },
  options: {
    backgroundColor: "#d6cced",
    margin: "1pc",
    textAlignLast: "center",
    paddingTop: "8px",
    paddingLeft: "13px",
    height:"40px"
  },

  healthoptions: {
    backgroundColor: "#c9e9ea",
    margin: "1pc",
    textAlignLast: "center",
    paddingTop: "8px",
    paddingLeft: "13px",
    height:"40px"
  },
  parentingoptions: {
    backgroundColor: "#c0daee",
    margin: "1pc",
    textAlignLast: "center",
    paddingTop: "8px",
    paddingLeft: "13px",
    height:"40px"
  },
  enrichedoptions: {
    backgroundColor: "#eeebc1",
    margin: "1pc",
    textAlignLast: "center",
    paddingTop: "8px",
    paddingLeft: "13px",
    height:"40px"
  },
  paper: {
    width: "121px",
    margin: "5px",
    backgroundColor: "#e7becf",
    padding: "25px",
  },
}));
const Benefits = ({}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  let { state } = useLocation();

  useEffect(() => {
    dispatch(fetchUserslist());
  }, []);
  useEffect(() => {
    dispatch(fetchUsers(state));
  }, [state]);

  return (
    <>
      <Header></Header>
      <Grid className={classes.container}>
        <h3 className={classes.h3}> Benefits</h3>
        <p className={classes.paragraph}>
          Happiest Minds offers benefits in order to encourage a culture of
          Happiness & Mindfulness by catering to one's needs with respect to
          flexibility, career development and an enriched personal life.
        </p>
      </Grid>
      <Grid className={classes.second_container}>
        <h3 className={classes.benefitsmatrix}> Benefits Matrix</h3>
        <Grid container>
          <Grid item style={{ width: "25%" }}>
            {" "}
            <Paper className={classes.general}>General Benefits</Paper>
            <Grid>
              <Paper className={classes.options}>Online library</Paper>
            </Grid>
            <Grid>
              <Paper className={classes.options}>Laptop Policy</Paper>
            </Grid>
            <Grid>
              <Paper className={classes.options}>
                Employee/Business Referral Policy
              </Paper>
            </Grid>
            <Grid>
              <Paper className={classes.options}>
                Joy Fund For Team Outing
              </Paper>
            </Grid>
            <Grid>
              <Paper className={classes.options}>Loan/Salary Advance</Paper>
            </Grid>
            <Grid>
              <Paper className={classes.options}>Flexible Expense Plan</Paper>
            </Grid>
            <Grid>
              <Paper className={classes.options}>National Pension Scheme</Paper>
            </Grid>
            <Grid>
              <Paper className={classes.options}>
                No Forced Retirement Age
              </Paper>
            </Grid>
            <Grid>
              <Paper className={classes.options}>Cab Facility</Paper>
            </Grid>
          </Grid>
          <Grid item style={{ width: "25%" }}>
            <Paper className={classes.health}> Health Benefits</Paper>
            <Grid>
              <Paper className={classes.healthoptions}>In-House Yoga</Paper>
            </Grid>
            <Grid>
              <Paper className={classes.healthoptions}>
                Corporate Tie-Ups/Discount
              </Paper>
            </Grid>
            <Grid>
              <Paper className={classes.healthoptions}>Dormitory</Paper>
            </Grid>
          </Grid>
          <Grid item style={{ width: "25%" }}>
            <Paper className={classes.parenting}>
              {" "}
              Parenting Related Benefits{" "}
            </Paper>
            <Grid>
              <Paper className={classes.parentingoptions}>Creche Tie-Ups</Paper>
            </Grid>
            <Grid>
              <Paper className={classes.parentingoptions}>
                Long Term leaves
              </Paper>
            </Grid>
            <Grid>
              <Paper className={classes.parentingoptions}>
                Bring Your child to work
              </Paper>
            </Grid>
          </Grid>
          <Grid item style={{ width: "25%" }}>
            <Paper className={classes.enriched}> Enriched Personal Life</Paper>
            <Grid>
              <Paper className={classes.enrichedoptions}>
                Work from home Policy
              </Paper>
            </Grid>
            <Grid>
              <Paper className={classes.enrichedoptions}>
                Exhaustive Leave Policy
              </Paper>
            </Grid>
            <Grid>
              <Paper className={classes.enrichedoptions}>Flexi Timing</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid style={{ backgroundColor: "#EEEEEE", padding: "78px" }}>
        <Grid>
          <h3 className={classes.benefitsmatrix}> Benefits for women</h3>
        </Grid>

        <Grid container>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Leave during Miscarriage</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Surrogacy leave</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Meternity Benefits</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>AURA-Women's Club</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Referral Bonus</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>AURA-Women's Club</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Pre/Post Meternity Leave</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Creche Facility</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Pre/Post Meternity Leave</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Medical Rooms</Paper>
          </Grid>
        </Grid>
      </Grid>
      <Footer></Footer>
    </>
  );
};

export default Benefits;
