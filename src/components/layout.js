/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Navbar from "./Navbar"
import "./layout.css"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import siteTheme from "../theme"
import { ThemeProvider } from "@material-ui/core/styles"


const useStyles = makeStyles((theme) => ({
    container: {
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      height: "1000px",
      backgroundColor: "#FFFFFF"
    },
    subscribeButton: {
      alignItems: "center",
      marginTop: "40px"
    }

  }
))

const Layout = ({ children }) => {

  const classes = useStyles()

  return (
    <ThemeProvider theme={siteTheme}>
      <div className={classes.container}>
        <Navbar/>
        <main>{children}</main>

        <section className="footer_banner" id="contact">
          <h2 className="hidden">Footer Banner Section </h2>
          <p className="hero_header">SUBSCRIBE TO OUR <em>#DigitalTransformation SPEAKS!</em> NEWSLETTER</p>
          <Grid container spacing={2} justify={"center"}>
            <Button className={classes.subscribeButton} color={"secondary"} variant="contained"
                    href={"https://sales.uequations.com/newsletter-signup/"}>SUBSCRIBE
            </Button>
          </Grid>
        </section>

        <div className="copyright">&copy;2020-<strong>ALL RIGHTS RESERVED</strong></div>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
