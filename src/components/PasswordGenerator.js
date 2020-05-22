import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import Slider from "@material-ui/core/Slider"
import Checkbox from "@material-ui/core/Checkbox"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import InputAdornment from "@material-ui/core/InputAdornment"
import { ThemeProvider } from "@material-ui/core/styles"
import siteTheme from "../theme"
import { Security } from "@material-ui/icons"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import passwordGenerator from "generate-password"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: siteTheme.palette.primary.main,
    color: siteTheme.palette.secondary.main,
    marginLeft: "0%",
    marginRight: "0%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center"
  }
}))

export default function PasswordGenerator() {
  const classes = useStyles()

  const [state, setState] = useState({
    letters: true,
    mixedCase: true,
    punctuation: true,
    numbers: true
  })

  const [value, setValue] = useState({
    sliderValue: value
  })

  const [password, setPassword] = useState({
      passwordText: password
    }
  )

  const handleCheckboxChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
    setPassword(generatePassword(state, value))
  }

  const handleSliderChange = (event, newValue) => {
    if (value !== newValue) {
      setValue(newValue)
      setPassword(generatePassword(state, newValue))
    }
  }

  const generatePassword = (checkboxState, sliderValue) => {
    console.log("checkbox: ", JSON.stringify(checkboxState))
    console.log("slider: ", JSON.stringify(sliderValue))
    const password = passwordGenerator.generate(
      {
        length: sliderValue,
        numbers: checkboxState.numbers,
        lowercase: checkboxState.letters,
        uppercase: checkboxState.mixedCase,
        symbols: checkboxState.punctuation,
        excludeSimilarCharacters: true
      }
    )
    console.log("password: ", password)
    return password
  }

  return (
    <ThemeProvider theme={siteTheme}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs/>
          <Grid item xs={8}>
            <form>
              <TextField id="generated-password" fullWidth
                         value={typeof password === "string" ? password : "changeme"}
                         defaultValue={"changeme"}
                         InputProps={{
                           readOnly: true,
                           startAdornment: (
                             <InputAdornment position="start">
                               <Security color={"secondary"}/>
                             </InputAdornment>
                           )
                         }}/>
              <Typography id="password-length-label" gutterBottom>
                Password Length (4-64)
              </Typography>
              <Slider
                defaultValue={11}
                step={1}
                min={4}
                max={64}
                marks
                aria-labelledby="password-length-label"
                valueLabelDisplay="auto"
                color={"secondary"}
                onChange={handleSliderChange}
                value={typeof value === "number" ? value : 11}
              />
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.letters}
                      name={"letters"}
                      onChange={handleCheckboxChange}
                      color={"secondary"}
                    />
                  }
                  label={"letters"}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.mixedCase}
                      name={"mixedCase"}
                      onChange={handleCheckboxChange}
                      color={"secondary"}
                    />
                  }
                  label={"mixed case"}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.numbers}
                      name={"numbers"}
                      onChange={handleCheckboxChange}
                      color={"secondary"}
                    />
                  }
                  label={"numbers"}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.punctuation}
                      name={"punctuation"}
                      onChange={handleCheckboxChange}
                      color={"secondary"}
                    />
                  }
                  label={"punctuation"}
                />
              </FormGroup>
            </form>
          </Grid>
          <Grid item xs/>
        </Grid>
      </div>
    </ThemeProvider>
  )
}

