import React from 'react'
import { CardHeader, IconButton, Avatar } from '@material-ui/core'
import { indigo } from '@material-ui/core/colors'
import { Refresh } from '@material-ui/icons'

import { Skeleton } from '@material-ui/lab'

import { formatUserInitials } from 'src/utils'

export const UserInfo = ({ loading, name, onRefresh }) => (
  <CardHeader
    avatar={
      loading ? (
        <Skeleton height={40} width={40} variant="circle" />
      ) : (
        <Avatar style={{ backgroundColor: indigo[400] }}>
          {formatUserInitials(name)}
        </Avatar>
      )
    }
    title={loading ? <Skeleton width="80%" /> : name}
    action={
      onRefresh && (
        <IconButton onClick={onRefresh}>
          <Refresh />
        </IconButton>
      )
    }
  />
)

UserInfo.defaultProps = {
  allowEdit: true
}
