import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { CodeSnippet } from 'src/code-snippet'

import funcBased from '!!raw-loader!./funky-func.snippet.js' // eslint-disable-line

export default () => {
  return (
    <Box>
      <Typography variant="h4">Imagine this:</Typography>
      <CodeSnippet code={funcBased} />
    </Box>
  )
}
