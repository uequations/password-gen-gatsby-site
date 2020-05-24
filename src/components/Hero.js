import React from "react"
import PasswordGenerator from "./PasswordGenerator"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import siteTheme from "../theme"
import Typography from "@material-ui/core/Typography"
import { ThemeProvider } from "@material-ui/styles"

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
  },
  hero: {

    paddingTop: "150px",
    paddingBottom: "150px",
    backgroundImage: "url(\"https://res.cloudinary.com/uequations/image/upload/v1590180350/password-gen-gatsby-site/keys.png\")",
    backgroundSize: "cover"
  },
  companyName: {
    textAlign: "center",
    color: siteTheme.palette.secondary.contrastText,
    flexgrow: 1
  }
}))

export default function Hero() {

  const classes = useStyles()

  return (
    <ThemeProvider theme={siteTheme}>
      <section className={classes.hero} id="hero">
        <Paper elevation={3} square={false} className={classes.paper}>
          <Typography className={classes.companyName} variant={"h4"}>
            UNIVERSAL EQUATIONS
          </Typography>
          <h2 className={classes.heroHeader}><span>CREATE STRONG PASSWORDS WITH OUR PASSWORD GENERATOR</span></h2>
          <p className={classes.tagline}>We recommend passwords with at least 11 characters including at least one
            non-numeric
            character.</p>
          <PasswordGenerator/>
        </Paper>
      </section>
    </ThemeProvider>
  )
}
