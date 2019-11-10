import { UserProfile } from './user-profile'
import { withUserInfo } from './with-user-info'
import { withWindowWidth } from './with-window-width'
import { withDocumentTitle } from './with-document-title'
import compose from 'compose-function'

const enhance = compose(
  withUserInfo,
  withWindowWidth,
  withDocumentTitle(({ user }) => {
    if (user && user.name) return user.name
  })
)

export const UserCard = enhance(UserProfile)
