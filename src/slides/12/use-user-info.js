import { useState, useEffect, useCallback } from 'react'
import { fetchUserProfileData } from 'src/utils'

export const useUserInfo = () => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  const loadUser = useCallback(async () => {
    setLoading(true)

    const user = await fetchUserProfileData()

    setUser(user)
    setLoading(false)
  }, [])

  useEffect(() => {
    loadUser()
  }, [loadUser])

  return { user, loading, refreshUser: loadUser }
}
