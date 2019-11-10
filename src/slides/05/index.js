import React from 'react'
import { Box, Typography } from '@material-ui/core'

export default () => {
  return (
    <Box key="1">
      <Typography variant="h2">Разве может что-то пойти не так?</Typography>
      <Typography variant="h2">{'\u00A0'}</Typography>
    </Box>
  )
}
