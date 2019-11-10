import React from 'react'
import { Typography, Box } from '@material-ui/core'
import wrapperHell from './wrapper-hell.png'

export default () => {
  return (
    <div>
      <Box marginBottom={2}>
        <Typography align="center" variant="h2">
          Wrapper Hell
        </Typography>
      </Box>
      <img
        style={{ maxWidth: '100%', objectFit: 'contain' }}
        src={wrapperHell}
        alt="wrapper-hell"
      />
    </div>
  )
}
