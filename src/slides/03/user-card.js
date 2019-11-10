import React, { Component } from 'react'
import { UserInfo, UserContacts, Card } from 'src/components'
import { fetchUserProfileData } from 'src/utils'

export class UserCard extends Component {
  state = {
    user: {},
    loading: true,
    windowWidth: window.innerWidth
  }

  componentDidMount = () => {
    this.loadUser()
    this.updateDocTitle()
    window.addEventListener('resize', this.handleWindowResize)
  }

  componentDidUpdate = () => {
    this.updateDocTitle()
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleWindowResize)
  }

  handleWindowResize = () => {
    this.setState({ windowWidth: window.innerWidth })
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
    const { user, loading, windowWidth } = this.state
    const { phone, email, name } = user

    return (
      <Card showImage={windowWidth > 700}>
        <UserInfo name={name} loading={loading} onRefresh={this.loadUser} />
        <UserContacts loading={loading} phone={phone} email={email} />
      </Card>
    )
  }
}
