import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

import './ExperienceCard.scss'

import ResumeCard from '../../../components/cards/ResumeCard/ResumeCard'


export default class ExperienceCard extends PureComponent {

  static propTypes = {
    topic: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    customer: PropTypes.string,
    projectDescription: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    achievements: PropTypes.string.isRequired,
    environment: PropTypes.string,
  }

  render() {
    const { topic, year, customer, projectDescription, team, achievements, environment } = this.props
    return (
      <ResumeCard topic={topic} year={year}>
        {
          Boolean(customer) && (
            <Fragment>
              <div className="experienceCard__topic">Customer</div>
              <p className="experienceCard__thesis">{customer}</p>
            </Fragment>
          )
        }

        <div className="experienceCard__topic">Project Description</div>
        <p className="experienceCard__thesis">{projectDescription}</p>

        <div className="experienceCard__topic">Team</div>
        <p className="experienceCard__thesis">{team}</p>

        <div className="experienceCard__topic">Responsibilities and achievements</div>
        <p className="experienceCard__thesis">{achievements}</p>

        {
          Boolean(environment) && (
            <Fragment>
              <div className="experienceCard__topic">Environment</div>
              <p className="experienceCard__thesis">{environment}</p>
            </Fragment>
          )
        }
      </ResumeCard>
    )
  }
}
