import React from 'react'
import { CardHeader, IconButton, Avatar } from '@material-ui/core'
import { Edit } from '@material-ui/icons'

import { Skeleton } from '@material-ui/lab'

import { formatUserInitials } from 'src/utils'

export const UserInfo = ({ loading, name, allowEdit }) => (
  <CardHeader
    avatar={
      name ? (
        <Avatar>{formatUserInitials(name)}</Avatar>
      ) : (
        <Skeleton height={40} width={40} variant="circle" />
      )
    }
    title={name ? name : <Skeleton />}
    action={
      allowEdit && (
        <IconButton disabled={loading}>
          <Edit />
        </IconButton>
      )
    }
  />
)

UserInfo.defaultProps = {
  allowEdit: true
}
