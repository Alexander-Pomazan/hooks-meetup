import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { CodeSnippet } from 'src/code-snippet'
import { Counter } from './counter'
import { CounterClass } from './counter-class'
// eslint-disable-next-line import/no-webpack-loader-syntax
import classBased from '!!raw-loader!./counter-class.js'
// eslint-disable-next-line import/no-webpack-loader-syntax
import funcBased from '!!raw-loader!./counter.js'

export default () => {
  return (
    <Box display="flex" justifyContent="center">
      <Box marginX={2}>
        <Typography variant="h3">Class</Typography>
        <CodeSnippet code={classBased} removeImports />
        <CounterClass />
      </Box>

      <Box marginX={2}>
        <Typography variant="h3">Function</Typography>
        <CodeSnippet code={funcBased} removeImports />
        <Counter />
      </Box>
    </Box>
  )
}
