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
        <div className="content">
          <div className="imageWrapper">
            <img className="image" src={avatarImageSrc} alt="vitaliy kudla"/>
          </div>
          <div className="intro">
            <p className="text text--dropCap">
              I am a driven, energetic and proactive Web Developer specializing in
              Front-end development. Experience in web
              development three years, mostly using the latest technology in the
              modern frameworks Angular JS and React.
            </p>
            <p className="text">
              The key area of professional expertise covers the development of web
              applications using HTML(5)/CSS(3) and JavaScript.
              English at the pre-intermediate level.
              Well-organized with an ability to prioritize tasks.
            </p>
            <p className="text">
              Experienced in communicating with vast and creative team.
              Highly drive to meet deadlines.
              Unique ability to improvise, grasp new skills and troubleshoot problems.
            </p>
            <p className="text">
              Continuous learner – always looking for new technologies, in my spare time I search Google for the latest trends.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
