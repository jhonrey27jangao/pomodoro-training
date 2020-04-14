import React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { Map } from "./map";

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
    marginTop: "30px",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export const Cases: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Avatar
          alt="Ricardo Milos"
          src="https://i.redd.it/pubbsk4oked41.jpg"
          className={classes.large}
        />
        <Typography variant="h4" component="h1">
          Dr. Ricardo Milos
        </Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Info</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Map />
          </Paper>
        </Grid>
        <Divider />
      </Grid>
    </>
  );
};
