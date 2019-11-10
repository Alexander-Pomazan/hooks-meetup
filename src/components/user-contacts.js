import React from 'react'
import {
  Box,
  Typography,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  CardContent
} from '@material-ui/core'
import { Phone, Email } from '@material-ui/icons'

import { Skeleton } from '@material-ui/lab'

export const UserContacts = ({ phone, email, loading }) => (
  <CardContent>
    <List>
      <Box height={48}>
        <ListItem>
          <ListItemIcon>
            <Phone />
          </ListItemIcon>
          <ListItemText
            primary={
              loading ? (
                <Skeleton variant="rect" />
              ) : (
                <Typography title={phone} noWrap>
                  {phone}
                </Typography>
              )
            }
          />
        </ListItem>
      </Box>

      <Box height={48}>
        <ListItem>
          <ListItemIcon>
            <Email />
          </ListItemIcon>
          <ListItemText
            primary={
              loading ? (
                <Skeleton variant="rect" />
              ) : (
                <Typography noWrap>{email}</Typography>
              )
            }
          />
        </ListItem>
      </Box>
    </List>
  </CardContent>
)
