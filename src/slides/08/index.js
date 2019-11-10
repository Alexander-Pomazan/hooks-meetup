import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { CodeSnippet } from 'src/code-snippet'
//eslint-disable-next-line import/no-webpack-loader-syntax
import snippet from '!!raw-loader!./colission.snippet.js'

export default () => {
  return (
    <Box>
      <Typography variant="h2">PropName collisions</Typography>
      <CodeSnippet code={snippet} />
    </Box>
  )
}
