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

const initialSlideNumber =
  parseInt(sessionStorage.getItem('currentSlideNumber'), 10) || 1

export const Presenter = ({ children }) => {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(
    initialSlideNumber
  )

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
    () =>
      setCurrentSlideNumber(c => (isLastSlide(c, totallySlides) ? c : c + 1)),
    [totallySlides]
  )

  const switchPrevSlide = useCallback(
    () => setCurrentSlideNumber(c => (isFirstSlide(c) ? c : c - 1)),
    []
  )

  useEffect(
    () => sessionStorage.setItem('currentSlideNumber', currentSlideNumber),
    [currentSlideNumber]
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
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box paddingY={6} maxWidth="90%">
        {currentSlideComponent}
      </Box>

      <Box
        component="img"
        src="/company-logo.svg"
        position="absolute"
        height={60}
        left={32}
        top={16}
      />

      {!isFirstSlide(currentSlideNumber) && (
        <Box position="fixed" left={4} bottom={20}>
          <IconButton onClick={switchPrevSlide}>
            <KeyboardArrowLeft />
          </IconButton>
        </Box>
      )}

      {!isLastSlide(currentSlideNumber, totallySlides) && (
        <Box position="fixed" right={4} bottom={20}>
          <IconButton onClick={switchNextSlide}>
            <KeyboardArrowRight />
          </IconButton>
        </Box>
      )}

      <Box position="fixed" bottom={0} left={0} width="100%">
        <ThiccLinearProgress variant="determinate" value={currentProgress} />
      </Box>
    </Box>
  )
}
