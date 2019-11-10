import React from 'react'
import { Card as CardRaw, CardMedia } from '@material-ui/core'
import cardBackground from 'src/assets/background.jpg'

export const Card = ({ children, showImage, ...props }) => (
  <CardRaw elevation={6} style={{ width: 300 }} {...props}>
    {showImage && <CardMedia style={{ height: 150 }} image={cardBackground} />}
    {children}
  </CardRaw>
)

Card.defaultProps = {
  showImage: true
}
