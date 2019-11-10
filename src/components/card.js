import React from 'react'
import { Card as CardRaw, CardMedia } from '@material-ui/core'
import cardBackground from 'src/assets/background.jpg'

export const Card = ({ children, ...props }) => (
  <CardRaw elevation={12} style={{ height: 400, width: 300 }} {...props}>
    <CardMedia style={{ height: 150 }} image={cardBackground} />
    {children}
  </CardRaw>
)
