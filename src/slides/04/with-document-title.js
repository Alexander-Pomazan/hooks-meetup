import React, { Component } from 'react'

export const withDocumentTitle = getTitle => BaseComponent =>
  class extends Component {
    componentDidUpdate = () => {
      const newTitle = getTitle(this.props)
      if (newTitle) document.title = newTitle
    }

    render() {
      return <BaseComponent {...this.props} />
    }
  }
