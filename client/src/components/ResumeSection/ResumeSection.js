import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './ResumeSection.scss'

import Title from '../../components/typography/Title/Title'


export default class ResumeSection extends Component {

  static propTypes = {}

  render() {
    return (
      <div className="resumeSection">
        <Title>Resume</Title>
      </div>
    )
  }

}
