import React from 'react'
import { UserProfile } from './user-profile'
import { UserInfo } from './user-info'
import { WindowWidth } from './window-width'
import { DocumentTitle } from './document-title'

export const UserCard = () => {
  return (
    <UserInfo>
      {({ loading, user, refreshUser }) => (
        <WindowWidth>
          {(windowWidth) => (
            <DocumentTitle title={user && user.name}>
              {() => <UserProfile user={user} loading={loading} refreshUser={refreshUser} windowWidth={windowWidth} />}
            </DocumentTitle>
          )}
        </WindowWidth>
      )}
    </UserInfo>
  )
}
