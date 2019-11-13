import { Component } from 'react'

export class WindowWidth extends Component {
  state = { windowWidth: window.innerWidth }

  componentDidMount = () =>
    window.addEventListener('resize', this.handleWindowResize)

  componentWillUnmount = () =>
    window.removeEventListener('resize', this.handleWindowResize)

  handleWindowResize = () => this.setState({ windowWidth: window.innerWidth })

  render() {
    return this.props.children(this.state.windowWidth)
  }
}