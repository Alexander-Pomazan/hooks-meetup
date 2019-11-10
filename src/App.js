import React from 'react'
import { Presenter } from './presenter'
import Slide01 from './slides/01'
import { indigo, ping } from '@material-ui/core/colors'
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    type: 'light'
  },
  overrides: {
    MuiIconButton: {
      backgroundColor: indigo[500]
    }
  }
})

export const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Presenter>
        <Slide01 />
        <div>2</div>
        <div>3</div>
      </Presenter>
    </MuiThemeProvider>
  )
}
