import React, { Component } from 'react'

export class CounterClass extends Component {
  state = {
    count: 0
  }

  handleAlertClick = () => {
    setTimeout(() => alert('You clicked on: ' + this.state.count), 3000)
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Click me
        </button>
        <button onClick={this.handleAlertClick}>Show alert</button>
      </div>
    )
  }
}
