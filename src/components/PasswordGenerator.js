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
import { Refresh, Security } from "@material-ui/icons"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import passwordGenerator from "generate-password"
import IconButton from "@material-ui/core/IconButton"

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

  const [checkBoxes, setCheckboxes] = useState({
    letters: true,
    mixedCase: true,
    punctuation: true,
    numbers: true
  })

  const [slider, setSlider] = useState({
    value: 11
  })

  const [password, setPassword] = useState({
      text: "changeme123"
    }
  )

  const handleCheckboxChange = (event) => {

    console.debug("event target", event.target.name)
    const newCheckBoxesState = { ...checkBoxes, [event.target.name]: event.target.checked }
    console.debug("handleCheckboxChange | beforeValidation ", JSON.stringify(newCheckBoxesState))
    if (event.target.name === "mixedCase" && newCheckBoxesState.mixedCase && !newCheckBoxesState.letters) {
      newCheckBoxesState.letters = true
    }
    if (event.target.name === "letters" && !newCheckBoxesState.letters && newCheckBoxesState.mixedCase) {
      newCheckBoxesState.mixedCase = false
    }
    setCheckboxes(newCheckBoxesState)
    console.debug("handleCheckboxChange | afterValidation ", JSON.stringify(newCheckBoxesState))
    console.debug("handleCheckboxChange | slider ", slider)
    setPassword(generatePassword(newCheckBoxesState, slider))
  }

  const handleSliderChange = (event, newValue) => {
    if (slider.value !== newValue) {
      console.debug("newValue: ", newValue)
      setSlider(newValue)
      setPassword(generatePassword(checkBoxes, newValue))
    }
  }

  const generatePassword = (checkboxes, sliderValue) => {
    console.debug("generatePassword | checkbox: ", JSON.stringify(checkboxes))
    console.debug("generatePassword | slider value: ", sliderValue)
    const newPassword = passwordGenerator.generate(
      {
        length: sliderValue,
        numbers: checkboxes.numbers,
        lowercase: checkboxes.letters,
        uppercase: checkboxes.mixedCase && checkboxes.letters,
        symbols: checkboxes.punctuation,
        excludeSimilarCharacters: true
      }
    )
    console.debug("generatePassword | password: ", newPassword)
    console.debug("generatePassword | length: ", newPassword.length)
    return newPassword
  }

  const handleReGeneratePassword = () => {
    console.debug("handleReGeneratePassword | slider value: ", slider)
    setPassword(generatePassword(checkBoxes, slider))
  }

  return (
    <ThemeProvider theme={siteTheme}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs/>
          <Grid item xs={10}>
            <form>
              <TextField id="generated-password" fullWidth
                         value={typeof password === "string" ? password : "changeme123"}
                         InputProps={{
                           readOnly: true,
                           startAdornment: (
                             <InputAdornment position="start">
                               <Security color={"secondary"}/>
                             </InputAdornment>
                           ),
                           endAdornment: (
                             <InputAdornment position={"end"}>
                               <IconButton
                                 color={"primary"}
                                 onClick={handleReGeneratePassword}
                               >
                                 <Refresh color={"secondary"}/>
                               </IconButton>
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
                value={typeof slider === "number" ? slider : 11}
              />
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkBoxes.letters}
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
                      checked={checkBoxes.mixedCase}
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
                      checked={checkBoxes.numbers}
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
                      checked={checkBoxes.punctuation}
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

