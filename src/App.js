import React from 'react'
import { Presenter } from './presenter'
import Slide01 from './slides/01'
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider,
  Box
} from '@material-ui/core'

const theme = createMuiTheme()

export const App = () => (
  <MuiThemeProvider theme={theme}>
    <Box
      component="img"
      src="/company-logo.svg"
      position="absolute"
      height={48}
      left={8}
      top={8}
    />
    <CssBaseline />
    <Presenter>
      <Slide01 />
      <div>2</div>
      <div>3</div>
    </Presenter>
  </MuiThemeProvider>
)
