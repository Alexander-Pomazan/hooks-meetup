/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react'
import { Presenter } from './presenter'
import Slide01 from './slides/01'
import Slide02 from './slides/02'
import Slide03 from './slides/03'
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core'
import { CodeSnippet } from './code-snippet'
import { Scale } from './utils'

import slide01code from '!!raw-loader!./slides/01/user-card.js'
import slide02code from '!!raw-loader!./slides/02/user-card.js'
import slide03code from '!!raw-loader!./slides/03/user-card.js'
const theme = createMuiTheme()

const CARD_SCALE = 1.5

export const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Presenter>
        <Scale scale={CARD_SCALE}>
          <Slide01 />
        </Scale>

        <CodeSnippet code={slide01code} />

        <Scale scale={CARD_SCALE}>
          <Slide02 />
        </Scale>

        <CodeSnippet code={slide02code} />

        <Scale scale={CARD_SCALE}>
          <Slide03 />
        </Scale>

        <CodeSnippet code={slide03code} />
      </Presenter>
    </MuiThemeProvider>
  )
}
