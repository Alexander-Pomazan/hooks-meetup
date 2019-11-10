import React, { Component } from 'react'
import { UserInfo, UserContacts, Card } from 'src/components'
import { fetchUserProfileData } from 'src/utils'

export class UserCard extends Component {
  state = {
    user: {},
    loading: true
  }

  componentDidMount = () => this.loadUser()

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
      <Card>
        <UserInfo loading={loading} name={name} onRefresh={this.loadUser} />
        <UserContacts loading={loading} phone={phone} email={email} />
      </Card>
    )
  }
}
