import React from "react"
import PasswordGenerator from "./PasswordGenerator"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import siteTheme from "../theme"

const useStyles = makeStyles((theme) => ({
  tagline: {
    textAlign: "center",
    color: siteTheme.palette.secondary.main,
    marginTop: "4px",
    fontWeight: "bold",
    textTransform: "upperCase",
    letterSpacing: "1px",
    marginLeft: "0%",
    marginRight: "0%",
    backgroundColor: siteTheme.palette.primary.main,
    fontSize: "medium"
  },
  paper: {
    marginLeft: "9%",
    marginRight: "9%",
    backgroundColor: siteTheme.palette.primary.light
  },
  heroHeader: {
    color: siteTheme.palette.secondary.main,
    textAlign: "center",
    marginTop: "0px",
    marginRight: "0%",
    marginBottom: "0px",
    marginLeft: "0%",
    letterSpacing: "4px",
    backgroundColor: siteTheme.palette.primary.main,
    fontWeight: "bold"
  }
}))

export default function Hero() {

  const classes = useStyles()

  return (<>
    <section className={"hero"} id="hero">
      <Paper elevation={3} square={false} className={classes.paper}>
        <h2 className={classes.heroHeader}><span>CREATE STRONG PASSWORDS WITH OUR PASSWORD GENERATOR</span></h2>
        <p className={classes.tagline}>We recommend passwords with at least 11 characters including at least one
          non-numeric
          character.</p>
        <PasswordGenerator/>
      </Paper>
    </section>
  </>)
}
