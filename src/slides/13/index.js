/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react'
import { Box } from '@material-ui/core'
import { CodeSnippet } from 'src/code-snippet'
import slide04card from '!!raw-loader!src/slides/04/user-card.js'
import slide10card from '!!raw-loader!src/slides/10/user-card.js'
import slide12card from '!!raw-loader!src/slides/12/user-card.js'

export default () => {
  return (
    <Box display="flex" justifyContent="center">
      <Box paddingX={1}>
        <CodeSnippet removeImports code={slide04card} />
      </Box>

      <Box paddingX={1}>
        <CodeSnippet removeImports code={slide10card} />
      </Box>

      <Box paddingX={1}>
        <CodeSnippet removeImports code={slide12card} />
      </Box>
    </Box>
  )
}
