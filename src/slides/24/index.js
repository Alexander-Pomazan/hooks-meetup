import React from 'react'
import { Typography, Box } from '@material-ui/core'

export default () => {
  return (
    <Box>
      <Typography variant="h4">Reference materials:</Typography>
      <ol>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://overreacted.io/a-complete-guide-to-useeffect/"
          >
            <Typography variant="h6">A complete guide to useEffect</Typography>
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/simply/comparison-hocs-vs-render-props-vs-hooks-55f9ffcd5dc6"
          >
            <Typography variant="h6">HOCs vs Render Props vs Hooks</Typography>
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=zWsZcBiwgVE"
          >
            <Typography variant="h6">Why React Hooks</Typography>
          </a>
        </li>
      </ol>
    </Box>
  )
}
