import React, { Component } from 'react'
import { fetchUserProfileData } from 'src/utils'

export const withUserInfo = BaseComponent =>
  class extends Component {
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
        <BaseComponent
          {...this.props}
          {...this.state}
          refreshUser={this.loadUser}
        />
      )
    }
  }
