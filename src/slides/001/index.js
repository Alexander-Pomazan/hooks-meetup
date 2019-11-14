import React from 'react'
import { Typography, Box } from '@material-ui/core'
import cat from 'src/assets/obligatory-cat-meme.jpg'

export default () => {
  return (
    <Box position="relative">
      <Box
        top="50%"
        left="50%"
        component="img"
        style={{ transform: 'rotate(10deg) translate(-50%, -50%) scale(3)' }}
        src={cat}
        position="absolute"
        height="100%"
        width="100"
      />
      <Typography variant="h1">
        Композиция логики в <strong>React</strong>
      </Typography>
      <Typography variant="h2">
        Почему стоит уже начать использовать хуки
      </Typography>
    </Box>
  )
}
