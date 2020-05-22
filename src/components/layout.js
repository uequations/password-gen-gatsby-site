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

const useStyles = makeStyles((theme) => ({
    container: {
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      height: "1000px",
      backgroundColor: "#FFFFFF"
    }
  }
))

const Layout = ({ children }) => {

  const classes = useStyles()

  return (
    <>
      <div className={classes.container}>
        <Navbar/>
        <main>{children}</main>

        <section className="footer_banner" id="contact">
          <h2 className="hidden">Footer Banner Section </h2>
          <p className="hero_header">SUBSCRIBE TO OUR <em>#DIgitalTransformation SPEAKS!</em> NEWSLETTER</p>
          <div className="button">subscribe</div>
        </section>

        <div className="copyright">&copy;2020-<strong>ALL RIGHTS RESERVED</strong></div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
