import React from 'react'
// eslint-disable-next-line import/no-webpack-loader-syntax
import useFetchSnippet from '!!raw-loader!./use-fetch.snippet.js'
import { CodeSnippet } from 'src/code-snippet'

export default () => (
  <CodeSnippet code={useFetchSnippet} removeImports />
)