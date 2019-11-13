/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react'
import { Presenter } from './presenter'
import Slide01 from './slides/01'
import Slide02 from './slides/02'
import Slide03 from './slides/03'
import Slide04 from './slides/04'
import Slide05 from './slides/05'
import Slide06 from './slides/06'
import Slide07 from './slides/07'
import Slide08 from './slides/08'
import Slide09 from './slides/09'
import Slide10 from './slides/10'
import Slide11 from './slides/11'

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
import slide04codeMarkup from '!!raw-loader!./slides/04/user-profile.js'
import slide04withUserInfo from '!!raw-loader!./slides/04/with-user-info.js'
import slide04withDocumentTitle from '!!raw-loader!./slides/04/with-document-title.js'
import slide04withWindowWidth from '!!raw-loader!./slides/04/with-window-width.js'
import slide04card from '!!raw-loader!./slides/04/user-card.js'

import slide10codeMarkup from '!!raw-loader!./slides/10/user-profile.js'
import slide10UserInfo from '!!raw-loader!./slides/10/user-info.js'
import slide10DocumentTitle from '!!raw-loader!./slides/10/document-title.js'
import slide10WindowWidth from '!!raw-loader!./slides/10/window-width.js'
import slide10card from '!!raw-loader!./slides/10/user-card.js'
const theme = createMuiTheme()

const CARD_SCALE = 1.5

export const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Presenter>
        {/* / PART 014 */}
        <Scale scale={CARD_SCALE}>
          <Slide01 />
        </Scale>
        <CodeSnippet code={slide01code} />

        {/* / PART 02 */}
        <Scale scale={CARD_SCALE}>
          <Slide02 />
        </Scale>
        <CodeSnippet code={slide02code} />

        {/* / PART 03 */}
        <Scale scale={CARD_SCALE}>
          <Slide03 />
        </Scale>
        <CodeSnippet code={slide03code} />

        {/* / PART 04 */}
        <CodeSnippet code={slide04codeMarkup} />

        <CodeSnippet code={slide04withUserInfo} />

        <CodeSnippet code={slide04withDocumentTitle} />

        <CodeSnippet code={slide04withWindowWidth} />

        <CodeSnippet code={slide04card} />
        <Scale scale={CARD_SCALE}>
          <Slide04 />
        </Scale>

        <Slide05 />

        <Slide06 />

        <Slide07 />

        <Slide08 />

        <Slide09 />

        {/* / PART 05 */}
        <CodeSnippet code={slide10codeMarkup} />
        <CodeSnippet code={slide10UserInfo} />
        <CodeSnippet code={slide10DocumentTitle} />
        <CodeSnippet code={slide10WindowWidth} />
        <CodeSnippet code={slide10card} />

        <Slide10 />

        <Slide11 />
      </Presenter>
    </MuiThemeProvider>
  )
}
