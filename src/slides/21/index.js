import React from 'react'

import { Typography } from '@material-ui/core'

export default () => {
  return (
    <div>
      <Typography variant="h3">
        React придерживается иммутабельности.
      </Typography>
      <Typography variant="h3">
        Но <strong>this</strong> мутабелен.
      </Typography>
    </div>
  )
}
