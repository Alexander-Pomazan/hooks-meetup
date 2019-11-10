import React from 'react'
import { Presenter } from './presenter'
import Slide01 from './slides/01'
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core'

const theme = createMuiTheme()

export const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Presenter>
      <Slide01 />
      <div>2</div>
      <div>3</div>
    </Presenter>
  </MuiThemeProvider>
)
