/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react'
import 'typeface-roboto'
import { Presenter } from './presenter'
import Slide00 from './slides/00'
import Slide001 from './slides/001'
import Slide01 from './slides/01'
import Slide02 from './slides/02'
import Slide03 from './slides/03'
import Slide04 from './slides/04'
import Slide05 from './slides/05'
import Slide06 from './slides/06'
import Slide07 from './slides/07'
import Slide08 from './slides/08'
import Slide09 from './slides/09'
import Slide095 from './slides/09,5'
import Slide10 from './slides/10'
import Slide11 from './slides/11'
import Slide12 from './slides/12'
import Slide115 from './slides/11,5'
import Slide13 from './slides/13'
import Slide14 from './slides/14'
import Slide15 from './slides/15'
import Slide16 from './slides/16'
import Slide17 from './slides/17'
import Slide18 from './slides/18'
import Slide19 from './slides/19'
import Slide20 from './slides/20'
import Slide21 from './slides/21'
import Slide22 from './slides/22'
import Slide23 from './slides/23'
import Slide24 from './slides/24'

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

import slide12codeMarkup from '!!raw-loader!./slides/12/user-profile.js'
import slide12UserInfo from '!!raw-loader!./slides/12/use-user-info.js'
import slide12DocumentTitle from '!!raw-loader!./slides/12/use-document-title.js'
import slide12WindowWidth from '!!raw-loader!./slides/12/use-window-width.js'
import slide12card from '!!raw-loader!./slides/12/user-card.js'
const theme = createMuiTheme()

const CARD_SCALE = 1.5

export const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Presenter>
        <Slide00 />

        <Slide001 />

        {/* / PART 01 */}
        <Scale scale={CARD_SCALE}>
          <Slide01 />
        </Scale>
        <CodeSnippet removeImports code={slide01code} />

        {/* / PART 02 */}
        <Scale scale={CARD_SCALE}>
          <Slide02 />
        </Scale>
        <CodeSnippet removeImports code={slide02code} />

        {/* / PART 03 */}
        <Scale scale={CARD_SCALE}>
          <Slide03 />
        </Scale>
        <CodeSnippet removeImports code={slide03code} />

        {/* / PART 04 */}
        <CodeSnippet removeImports code={slide04codeMarkup} />
        <CodeSnippet removeImports code={slide04withUserInfo} />
        <CodeSnippet removeImports code={slide04withDocumentTitle} />
        <CodeSnippet removeImports code={slide04withWindowWidth} />
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
        <Slide095 />
        <CodeSnippet code={slide10codeMarkup} />
        <CodeSnippet code={slide10UserInfo} />
        <CodeSnippet code={slide10DocumentTitle} />
        <CodeSnippet code={slide10WindowWidth} />
        <CodeSnippet code={slide10card} />

        <Scale scale={CARD_SCALE}>
          <Slide10 />
        </Scale>

        <Slide11 />

        {/* / PART 06 */}
        <Slide115 />
        <CodeSnippet code={slide12codeMarkup} />
        <CodeSnippet code={slide12UserInfo} />
        <CodeSnippet code={slide12DocumentTitle} />
        <CodeSnippet code={slide12WindowWidth} />
        <CodeSnippet code={slide12card} />

        <Scale scale={CARD_SCALE}>
          <Slide12 />
        </Scale>
        {/* / PART 07 */}
        <Slide13 />

        <Slide14 />

        <Slide15 />

        <Slide16 />

        <Slide17 />

        <Slide18 />

        <Slide19 />

        <Slide20 />

        <Slide21 />

        <Slide22 />

        <Slide23 />

        <Slide24 />
      </Presenter>
    </MuiThemeProvider>
  )
}
