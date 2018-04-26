import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { increment } from '../modules/counter'


@connect((state) => ({
  counter: state.counter,
}), { increment })
export default class App extends Component {

  static propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func,
  }

  state = {
    data: [],
  }

  componentDidMount() {
    axios.get('/api/projects')
      .then((data) => this.setState(data))
  }

  incrementCounter = () => {
    const { increment, counter } = this.props

    increment(counter + 1)
  }

  render() {
    const { data } = this.state
    const { counter, increment } = this.props

    return (
      <div>
        App
        response:
        <br />
        {
          data.map((project) => (
            <span key={project.id}> {project.name} </span>
          ))
        }
        <div>
          Counter: {counter}
          <button onClick={this.incrementCounter}>Increment</button>
        </div>
      </div>
    )
  }

}
