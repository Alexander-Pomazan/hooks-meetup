import { Component } from 'react'
import { fetchUserProfileData } from 'src/utils'

export class UserInfo extends Component {
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
    return (
      this.props.children({ ...this.state, refreshUser: this.loadUser })
    )
  }
}
