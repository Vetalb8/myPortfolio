import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './EducationCard.scss'

import ResumeCard from '../../../components/cards/ResumeCard/ResumeCard'


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
      <ResumeCard topic={topic} year={year}>
        <div className="educationCard__topic">{profession}</div>
        <p className="educationCard__thesis">{thesis}</p>
      </ResumeCard>
    )
  }
}
