import { useState, useEffect, useCallback } from 'react'

const initialState = window.innerWidth

export const useWindowWidth = () => {
  const [width, setWidth] = useState(initialState)

  const handleResize = useCallback(() => setWidth(window.innerWidth), [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return width
}
