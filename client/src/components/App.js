import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'


export default class App extends Component {

  static propTypes = {}

  state = {
    data: [],
  }

  componentDidMount() {
    axios.get('/api/projects')
      .then((data) => this.setState(data))
  }

  render() {
    const { data } = this.state

    return (
      <div>
        App
        response:
        <br />
        {
          data.map((project) => (
            <span> {project.name} </span>
          ))
        }
        <div>set travis deploy</div>
      </div>
    )
  }

}
