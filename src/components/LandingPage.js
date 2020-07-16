import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    fontSize: 85,
    fontFamily: "Dosis, sans-serif",
    color: "black",
    letterSpacing: "3px",
    color: "black",
    [theme.breakpoints.down("sm")]: {
      fontSize: "70px",
    },
  },
  Typo: {
    fontFamily: "Dosis, sans-serif",
    color: "black",
    letterSpacing: "5px",
    textAlign: "justify",
    textJustify: "inter-word ",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  Link: {
    color: "black",
    textDecoration: "inherit",
    fontSize: "50px",
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "70px",
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid>
        <Typography variant="h3" className={classes.grid}>
          v e r b e r
        </Typography>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Typography variant="h5" className={classes.Typo}>
        Verber is an application based on experiencing historical sites and
        spaces through sound simulation. You can choose from the available
        catalogue, or you can add to the catalogue by creating your own space
        with an available Impulse Response.The app connects to your microphone
        and gives you an impression of being in a space while being at your
        computer.The application also offers the users to upload Ambient/Field
        Recording Data related to the place.
        <br />
        <br />
        <br />
        <br />
      </Typography>
      <Button>
        <Link to="/spaces" className={classes.Link}>
          <Typography variant="h4">START EXPLORING</Typography>
        </Link>
      </Button>
    </div>
  );
};

export default LandingPage;
