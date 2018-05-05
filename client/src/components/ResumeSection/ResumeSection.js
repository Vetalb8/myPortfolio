import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './ResumeSection.scss'

import Title from '../../components/typography/Title/Title'
import Subtitle from '../../components/typography/Subtitle/Subtitle'


export default class ResumeSection extends Component {

  static propTypes = {}

  render() {
    return (
      <div className="resumeSection">
        <Title>Resume</Title>
        <Subtitle>Education</Subtitle>
        <h1>sad</h1>
        <h1>sad</h1>
        <h1>sad</h1>
      </div>
    )
  }

}
