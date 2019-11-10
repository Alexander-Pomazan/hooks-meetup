import React, { Component } from 'react'
import { Card, CardMedia, CardContent } from '@material-ui/core'

import { UserInfo, UserContacts } from 'src/components'

import { fetchUserProfileData } from 'src/utils'
import cardBackground from 'src/assets/background.jpg'

class UserCard extends Component {
  state = {
    user: {},
    loading: true
  }

  componentDidMount = () => {
    this.loadUser()
  }

  loadUser = async () => {
    this.setState({ loading: true })

    const user = await fetchUserProfileData()

    this.setState({
      loading: false,
      user
    })
  }

  render() {
    const { user, loading } = this.state

    const { phone, email, name } = user

    return (
      <Card elevation={12} style={{ height: 400, width: 300 }}>
        <CardMedia style={{ height: 150 }} image={cardBackground} />
        <UserInfo name={name} loading={loading} onRefresh={this.loadUser} />

        <CardContent>
          <UserContacts loading={loading} phone={phone} email={email} />
        </CardContent>
      </Card>
    )
  }
}

export default UserCard
