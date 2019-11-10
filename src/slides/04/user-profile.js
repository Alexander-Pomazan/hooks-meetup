import React from 'react'
import { UserInfo, UserContacts, Card } from 'src/components'

export const UserProfile = ({ user, loading, windowWidth, refreshUser }) => {
  const { phone, email, name } = user

  return (
    <Card showImage={windowWidth > 700}>
      <UserInfo name={name} loading={loading} onRefresh={refreshUser} />
      <UserContacts loading={loading} phone={phone} email={email} />
    </Card>
  )
}
