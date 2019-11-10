import React from 'react'
import { Typography } from '@material-ui/core'
import { CodeSnippet } from 'src/code-snippet'
//eslint-disable-next-line import/no-webpack-loader-syntax
import snippet from '!!raw-loader!./shadowing.snippet.js'

export default () => {
  return (
    <div>
      <Typography variant="h2">Statics shadowing*</Typography>
      <CodeSnippet code={snippet} />
      <Typography variant="h6">
        *Solved by{' '}
        <a
          href="https://github.com/mridgway/hoist-non-react-statics"
          target="_blank"
          rel="noopener noreferrer"
        >
          hoist-non-react-statics
        </a>
      </Typography>
    </div>
  )
}
