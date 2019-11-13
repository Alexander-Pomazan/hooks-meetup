import { Component } from 'react'

export class DocumentTitle extends Component {
  componentDidUpdate = () => {
    const { title } = this.props
    if (title) document.title = title
  }

  render() {
    return this.props.children()
  }
}
