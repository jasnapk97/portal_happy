import { Grid, Paper } from "@material-ui/core";
import React from "react";
import photo1 from "../assets/4-full.jpg";
import photo2 from "../assets/3-full.jpg";
import photo3 from "../assets/5-full.jpg";
import photo4 from "../assets/9-full.jpg";
import photo5 from "../assets/13-full.jpg";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
  },

  card: {
    //flexGrow: 1,
    width: "88%",

    backgroundColor: "#dedede",
    justifyContent: "space-evently",
    marginInline: "auto",
  },

  itemgrid: {
    margin: "27px",
  },
  "& .MuiGrid-item": {
    margin: "unset",
  },

  papercontent: {
    padding: "70px",
    marginBottom: "0px",
  },
  paragraph: {
    fontWeight: 450,
  },
  picture: {
    // height: "94%",
    paddingTop: "80px",
  },
  image: {
    width: "176px",
    height: "100%",
  },
}));
const Diversity = () => {
  const classes = useStyles();
  return (
    <>
      <Paper>
        <Grid container>
          <Grid
            style={{
              marginBottom: "auto",
              width: "30%",
            }}
          >
            <div>
              <Grid className={classes.papercontent}>
                <h3 style={{ fontWeight: 400, fontSize: "35px" }}>
                  Diversity@Work
                </h3>
                <h3>Our Commitment</h3>
                <p className={classes.paragraph}>
                  Inclusion and diversity are fundamental to a culture and core
                  values. At Happiest Minds, we strive to ensure that everyone
                  can retain their identity that reflects their cultural
                  experiences and feelings. We believe that no one should be
                  discriminated against because of their differences, such as
                  age, ability, ethnicity, gender, expression or religion.
                </p>
                <p className={classes.paragraph}>
                  {" "}
                  Diversity makes us stronger, more innovative, more competitive
                  and more creative, which helps us better serve our clients and
                  our communities. This resonates with our mission statement:
                  Happiest People. Happiest Customers.
                </p>
                <p className={classes.paragraph}>
                  We remain committed to an inclusive and diverse workplace,
                  where people can be who they are and be their best,
                  professionally and personally.
                </p>
              </Grid>
            </div>
          </Grid>
          <Grid
            style={{
              width: "70%",
            }}
          >
            <Grid className={classes.picture}>
              <Grid
                container
                style={{
                  marginBottom: "auto",
                }}
              >
                <Grid item className={classes.itemgrid}>
                  <img src={photo1} className={classes.image} />
                </Grid>
                <Grid item className={classes.itemgrid}>
                  <img src={photo2} className={classes.image} />
                </Grid>
                <Grid item className={classes.itemgrid}>
                  <img src={photo3} className={classes.image} />
                </Grid>
                <Grid item className={classes.itemgrid}>
                  <img src={photo4} className={classes.image} />
                </Grid>
                <Grid item className={classes.itemgrid}>
                  <img src={photo5} className={classes.image} />
                </Grid>
                <Grid item className={classes.itemgrid}>
                  <img src={photo3} className={classes.image} />
                </Grid>
                <Grid item className={classes.itemgrid}>
                  <img src={photo4} className={classes.image} />
                </Grid>
                <Grid item className={classes.itemgrid}>
                  <img src={photo1} className={classes.image} />
                </Grid>
                <Grid item className={classes.itemgrid}>
                  <img src={photo2} className={classes.image} />
                </Grid>
                <Grid item className={classes.itemgrid}>
                  <img src={photo3} className={classes.image} />
                </Grid>
                <Grid item className={classes.itemgrid}>
                  <img src={photo4} className={classes.image} />
                </Grid>
                <Grid item className={classes.itemgrid}>
                  <img src={photo1} className={classes.image} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Diversity;
