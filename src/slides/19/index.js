import React from 'react'
import { Typography } from '@material-ui/core'

export default () => {
  return (
    <Typography variant="h2">
      Каждый рендер и его эффекты зависят только от пропсов и стейта
      используемого в этом рендере
    </Typography>
  )
}
