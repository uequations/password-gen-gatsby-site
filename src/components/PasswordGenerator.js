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
import { Assignment, Refresh, Security } from "@material-ui/icons"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import passwordGenerator from "generate-password"
import IconButton from "@material-ui/core/IconButton"
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component"
import Snackbar from "@material-ui/core/Snackbar"
import Divider from "@material-ui/core/Divider"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: siteTheme.palette.primary.main,
    color: siteTheme.palette.secondary.contrastText,
    marginLeft: "0%",
    marginRight: "0%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center"
  },
  passwordTextBox: {},
  divider: {
    height: 28,
    margin: 4
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
      text: "changeme123",
      copied: false
    }
  )

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
    setPassword({ text: password.text, copied: true })
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  const handleCheckboxChange = (event) => {

    const newCheckBoxesState = { ...checkBoxes, [event.target.name]: event.target.checked }

    if (event.target.name === "mixedCase" && newCheckBoxesState.mixedCase && !newCheckBoxesState.letters) {
      newCheckBoxesState.letters = true
    }
    if (event.target.name === "letters" && !newCheckBoxesState.letters && newCheckBoxesState.mixedCase) {
      newCheckBoxesState.mixedCase = false
    }

    setCheckboxes(newCheckBoxesState)
    setPassword({ text: generatePassword(newCheckBoxesState, slider.value), copied: false })
  }

  const handleSliderChange = (event, newValue) => {

    setSlider({ value: newValue })
    if (slider.value && slider.value !== newValue) {
      setPassword({ text: generatePassword(checkBoxes, newValue), copied: false })
    }
  }

  const generatePassword = (checkboxes, sliderValue) => {

    const passwordOptions = {
      length: sliderValue,
      numbers: checkboxes.numbers,
      lowercase: checkboxes.letters,
      uppercase: checkboxes.mixedCase && checkboxes.letters,
      symbols: checkboxes.punctuation,
      excludeSimilarCharacters: true
    }

    const newPassword = passwordGenerator.generate(passwordOptions)

    return newPassword
  }

  const handleReGeneratePassword = (mouseEvent) => {

    const newPassword = generatePassword(checkBoxes, slider.value)
    setPassword({ text: newPassword, copied: false })
  }

  return (
    <ThemeProvider theme={siteTheme}>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs/>
          <Grid item xs={10}>
            <form>
              <TextField id="generated-password" fullWidth
                         size={"medium"}
                         value={typeof password.text === "string" ? password.text : "changeme123"}
                         variant={"outlined"}
                         color={siteTheme.palette.secondary.main}
                         InputProps={{
                           size: 32,
                           readOnly: true,
                           color: siteTheme.palette.secondary.dark,
                           startAdornment: (
                             <InputAdornment position="start">
                               <Security color={"secondary"}/>
                             </InputAdornment>
                           ),
                           endAdornment: (
                             <InputAdornment position={"end"}>
                               <CopyToClipboard
                                 text={typeof password.text === "string" ? password.text : { text: "changeme123" }}
                                 onCopy={handleClick}>
                                 <IconButton
                                   color={"primary"}>
                                   <Assignment color={"secondary"}/>
                                 </IconButton>
                               </CopyToClipboard>
                               <Snackbar
                                 anchorOrigin={{
                                   vertical: "bottom",
                                   horizontal: "center"
                                 }}
                                 open={open}
                                 autoHideDuration={5500}
                                 onClose={handleClose}
                                 message={"COPIED"}
                               />
                               <Divider className={classes.divider} orientation="vertical"/>
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
                Password Length (4-32)
              </Typography>
              <Slider
                defaultValue={11}
                step={1}
                min={4}
                max={32}
                marks
                aria-labelledby="password-length-label"
                valueLabelDisplay="auto"
                color={"secondary"}
                onChange={handleSliderChange}
                value={typeof slider.value === "number" ? slider.value : 11}
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

