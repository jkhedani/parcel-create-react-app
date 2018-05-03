import React from 'react'

class Counter extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
  		count: 0
  	}
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(prevState => ({ count: prevState.count - 10 })),
      200,
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return this.state.count
  }
}

export default Counter