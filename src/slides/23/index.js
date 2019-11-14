import React from 'react'
import { Box, Typography } from '@material-ui/core'
import scheme from './fc.png'

export default () => (
  <Box display="flex" justifyContent="center" flexDirection="column">
    <Box marginBottom={2}>
      <Typography variant="h3">
        Каждый рендер использует свои <strong>props</strong> и свой{' '}
        <strong>state</strong>:
      </Typography>
    </Box>

    <img src={scheme} style={{ objectFit: 'contain' }} alt="scheme" />
  </Box>
)
