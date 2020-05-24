import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import siteTheme from "../theme"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: siteTheme.palette.secondary.main,
    backgroundColor: siteTheme.palette.primary.light
  },
  bullets: {
    padding: theme.spacing(2),
    textAlign: "justify",
    color: siteTheme.palette.secondary.main
  },
  aboutHeader: {
    textAlign: "center",
    color: "#380A13"
  }
}))

export default function GoodPasswordInfo() {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1 className="about_header">Use our password generator to create stronger passwords.</h1>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h2>PASSWORDS TO AVOID</h2>
          </Paper>
          <div className={classes.bullets}>
            <ul>
              <li>Password</li>
              <li>123456</li>
              <li>Qwerty</li>
              <li>A close family member's name</li>
              <li>The same password repeatedly</li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h2>WHY ARE THESE PASSWORDS SO WEAK?</h2>
          </Paper>
          <div className={classes.bullets}>
            <ul>
              <li>Too easy to guess or crack</li>
              <li>When a password is re-used, if one login is compromised, the hacker has access to multiple accounts.
              </li>
            </ul>
          </div>

        </Grid>
      </Grid>
    </div>
  )
}
