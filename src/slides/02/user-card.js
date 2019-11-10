import React, { Component } from 'react'
import { UserInfo, UserContacts, Card } from 'src/components'
import { fetchUserProfileData } from 'src/utils'

export class UserCard extends Component {
  state = {
    user: {},
    loading: true
  }

  componentDidMount = () => {
    this.loadUser()
    this.updateDocTitle()
  }

  componentDidUpdate = () => {
    this.updateDocTitle()
  }

  loadUser = async () => {
    this.setState({ loading: true })

    const user = await fetchUserProfileData()

    this.setState({
      loading: false,
      user
    })
  }

  updateDocTitle = () => {
    const { user } = this.state

    if (!user || !user.name) return

    document.title = user.name
  }

  render() {
    const { user, loading } = this.state
    const { phone, email, name } = user

    return (
      <Card>
        <UserInfo name={name} loading={loading} onRefresh={this.loadUser} />
        <UserContacts loading={loading} phone={phone} email={email} />
      </Card>
    )
  }
}
