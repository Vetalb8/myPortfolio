import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './EducationCard.scss'


export default class EducationCard extends PureComponent {

  static propTypes = {
    topic: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    profession: PropTypes.string,
    thesis: PropTypes.string,
  }

  render() {
    const { topic, year, profession, thesis } = this.props
    return (
      <div className="educationCard">
        <div className="educationCard__university">
          <div className="educationCard__topic">{topic}</div>
          <div className="educationCard__year">{year}</div>
        </div>
        <div className="educationCard__profession">
          <div className="educationCard__topic">{profession}</div>
          <p className="educationCard__thesis">{thesis}</p>
        </div>
      </div>
    )
  }
}
