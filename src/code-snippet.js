import React from 'react'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import vs from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark'

SyntaxHighlighter.registerLanguage('jsx', jsx)

export const CodeSnippet = ({ code }) => {
  return (
    <SyntaxHighlighter showLineNumbers language="jsx" style={vs}>
      {code}
    </SyntaxHighlighter>
  )
}

CodeSnippet.defaultProps = {
  children: `
import React from 'react'

const Component = () => {
  return <div>Hello world</div>
}
`
}
