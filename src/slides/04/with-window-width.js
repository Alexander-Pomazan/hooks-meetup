import React, { Component } from 'react'

export const withWindowWidth = BaseComponent =>
  class extends Component {
    state = { windowWidth: window.innerWidth }

    componentDidMount = () =>
      window.addEventListener('resize', this.handleWindowResize)

    componentWillUnmount = () =>
      window.removeEventListener('resize', this.handleWindowResize)

    handleWindowResize = () => this.setState({ windowWidth: window.innerWidth })

    render() {
      return <BaseComponent {...this.props} {...this.state} />
    }
  }
