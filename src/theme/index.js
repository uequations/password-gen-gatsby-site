import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#b1b6db",
      main: "#9EA4D3",
      dark: "#6e7293",
      contrastText: "#fff"
    },
    secondary: {
      light: "#5f3b42",
      main: "#380A13",
      dark: "#27070d",
      contrastText: "#fff"
    }
  }
})

export default theme
