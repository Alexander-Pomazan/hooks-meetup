import React from 'react'
import { useDocumentTitle } from './use-document-title'
import { useWindowWidth } from './use-window-width'
import { useUserInfo } from './use-user-info'
import { UserProfile } from './user-profile'

export const UserCard = () => {
  const { user, loading, refreshUser } = useUserInfo()

  const windowWidth = useWindowWidth()

  useDocumentTitle(user.name)

  return (
    <UserProfile
      user={user}
      loading={loading}
      refreshUser={refreshUser}
      windowWidth={windowWidth}
    />
  )
}
