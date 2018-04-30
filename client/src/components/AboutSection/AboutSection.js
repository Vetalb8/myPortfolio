import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './AboutSection.scss'

import avatarImageSrc from './images/avatar.jpg'

import Title from '../../components/typography/Title/Title'


export default class AboutSection extends Component {

  static propTypes = {}

  render() {
    return (
      <div className="aboutSection">
        <Title>I am Vitaliy Kudla</Title>
        <div className="imageWrapper">
          <img className="image" src={avatarImageSrc} alt="vitaliy kudla"/>
        </div>
      </div>
    )
  }
}
