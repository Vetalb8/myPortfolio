import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './ResumeCard.scss'


export default class ResumeCard extends PureComponent {

  static propTypes = {
    topic: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }

  render() {
    const { topic, year, children } = this.props
    return (
      <div className="resumeCard">
        <div className="resumeCard__header">
          <div className="resumeCard__topic">{topic}</div>
          <div className="resumeCard__year">{year}</div>
        </div>
        <div className="resumeCard__content">{children}</div>
      </div>
    )
  }
}
