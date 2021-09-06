import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankRoundedIcon from "@material-ui/icons/CheckBoxOutlineBlankRounded";
import StopRoundedIcon from "@material-ui/icons/StopRounded";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  typography: {
    padding: theme.spacing(2),
  },
  heading: {
    fontWeight: 600,
    fontSize: "24px",
    color: "#383D39",
  },
  paper: {
    padding: "32px",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 16,
  },
  radioButton: {
    color: "rgba(172, 220, 44, 1) !important",
  },
  root: {
    display: "flex",
  },
  formControl: {},
  cancel: {
    marginTop: "16px",
  },
}));

export default function Checkboxitems({
  open,
  handleChangeCheckbox,
  checkboxItems,
}) {
  const classes = useStyles();

  const id = open ? "simple-popover" : undefined;

  return (
    <div>
        <Grid className={classes.paper}>
          <div className={classes.root}>
            <FormControl className={classes.formControl}>
              <FormGroup>
                {checkboxItems?.map((option, index) => {
                  return (
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox
                          className={classes.radioButton}
                          checked={option.state}
                          icon={<CheckBoxOutlineBlankRoundedIcon />}
                          checkedIcon={<StopRoundedIcon />}
                          onChange={handleChangeCheckbox}
                          name={option.name}
                        />
                      }
                      label={option.label}
                    />
                  );
                })}
              </FormGroup>
            </FormControl>
          </div>
        </Grid>
      
    </div>
  );
}
