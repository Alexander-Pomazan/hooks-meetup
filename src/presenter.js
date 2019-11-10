import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { Box, IconButton, LinearProgress } from '@material-ui/core'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'
import { styled } from '@material-ui/styles'

const ThiccLinearProgress = styled(LinearProgress)({
  height: 18
})

const isFirstSlide = slideNumber => slideNumber === 1
const isLastSlide = (slideNumber, totallySlides) =>
  slideNumber === totallySlides

export const Presenter = ({ children }) => {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(1)

  const totallySlides = React.Children.count(children)
  const currentSlideComponent = useMemo(
    () => React.Children.toArray(children)[currentSlideNumber - 1],
    [children, currentSlideNumber]
  )

  const currentProgress = useMemo(
    () => (currentSlideNumber / totallySlides) * 100,
    [currentSlideNumber, totallySlides]
  )

  const switchNextSlide = useCallback(
    () => setCurrentSlideNumber(c => (isLastSlide(c) ? c : c + 1)),
    []
  )

  const switchPrevSlide = useCallback(
    () => setCurrentSlideNumber(c => (isFirstSlide(c) ? c : c - 1)),
    []
  )

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 37) switchPrevSlide()
      if (e.keyCode === 39) switchNextSlide()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [switchNextSlide, switchPrevSlide])

  return (
    <Box
      minHeight="100vh"
      width="100vw"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box marginTop={6} maxWidth={1200}>
        {currentSlideComponent}
      </Box>

      <Box position="absolute" left={4} bottom={20}>
        <IconButton
          onClick={switchPrevSlide}
          disabled={isFirstSlide(currentSlideNumber)}
        >
          <KeyboardArrowLeft />
        </IconButton>
      </Box>

      <Box position="absolute" right={4} bottom={20}>
        <IconButton
          onClick={switchNextSlide}
          disabled={isLastSlide(currentSlideNumber, totallySlides)}
        >
          <KeyboardArrowRight />
        </IconButton>
      </Box>

      <Box position="absolute" bottom={0} left={0} width="100%">
        <ThiccLinearProgress variant="determinate" value={currentProgress} />
      </Box>
    </Box>
  )
}
