import React from 'react'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import vs from 'react-syntax-highlighter/dist/esm/styles/prism/duotone-light'
import { removeImportLines } from './utils'

SyntaxHighlighter.registerLanguage('jsx', jsx)

export const CodeSnippet = ({ code, removeImports }) => {
  const snippet = removeImports ? removeImportLines(code) : code

  return (
    <SyntaxHighlighter language="jsx" style={vs}>
      {snippet}
    </SyntaxHighlighter>
  )
}

CodeSnippet.defaultProps = {
  children: `
import React from 'react'

const Component = () => {
  return <div>Hello world</div>
}
`,
  removeImports: false
}
