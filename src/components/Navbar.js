import React from "react"
import AppBar from "@material-ui/core/AppBar"
import siteTheme from "../theme"
import { ThemeProvider } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import makeStyles from "@material-ui/core/styles/makeStyles"
import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}))

const Navbar = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={siteTheme}>
      <div className={classes.root}>
        <AppBar position={"static"} color={"primary"}>
          <Toolbar>
            <IconButton className={classes.menuButton} href="https://www.uequations.com">
              <Avatar
                src={"https://res.cloudinary.com/uequations/image/upload/v1590188520/password-gen-gatsby-site/ueq_ps_crop_circle_logo_100px.png"}/>
            </IconButton>

            <Button color={"secondary"} href="https://www.uequations.com">HOME</Button>
            <Button color={"secondary"} href="https://www.uequations.com/about-us">ABOUT</Button>
            <Button color={"secondary"} href="https://sales.uequations.com/contact-us-general-inquiry/">CONTACT</Button>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  )
}

export default Navbar
