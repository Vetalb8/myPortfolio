import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './ResumeSection.scss'

import Title from '../../components/typography/Title/Title'
import Subtitle from '../../components/typography/Subtitle/Subtitle'
import EducationCard from '../../components/EducationCard/EducationCard'


export default class ResumeSection extends Component {

  static propTypes = {}

  render() {
    return (
      <div className="resumeSection">
        <Title>Resume</Title>
        <Subtitle>Education</Subtitle>
        <EducationCard
          topic="Samara State Technical University"
          year="2005-2010"
          thesis="Master of Engineering in development and operation of oil and gas fields"
        />

        <Subtitle>Experience</Subtitle>
        <EducationCard
          topic="Senior Frontend-developer (Scentbird)"
          year="2017 - Now"
          profession="Tasks performed:"
          thesis={`
            Got hands-on experience with a React JS.
            Implemented a lot of API integrations.
            Have written unit tests on Jest framework and e2e test on Cypress.io
            Created and implemented new features.
            Improved skills in Webpack2.
          `}
        />
        <EducationCard
          topic="Frontend-developer (EPAM Systems)"
          year="2016 - 2017"
          profession="Tasks performed:"
          thesis={`
            Got hands-on experience with a new JavaScript framework Angular2.
            Implemented a lot of API integrations.
            Have written unit tests.
            Created and implemented new features.
            Investigated ES 2015, applied new knowledge in practice.
            Got experience in organizing an application.
            Improved skills in TypeScript and RX JS.
          `}
        />
        <EducationCard
          topic="Frontend-developer (EPAM Systems)"
          year="2016 - 2016"
          profession="Tasks performed:"
          thesis={`
            Got hands-on experience with a CSS Preprocessors (Sass).
            Mastered best practices in Sass file organization and structure.
            Created and implemented new features to already existing projects.
            Developed business crucial functionality elements.
            Used semantic markup for displaying lists,data, forms, articles, etc.
            Investigated ES 2015, applied new knowledge in practice.
            Improved experience in Angular framework, using best practices for organizing applications.
            Improved skills in the creation Angular directives and services, interaction with the server.
          `}
        />
        <EducationCard
          topic="Frontend-developer (EPAM Systems)"
          year="2015 - 2016"
          profession="Tasks performed:"
          thesis={`
            Developed static pages with a catalog of books, login form and order book.
            Developed custom directive to display and calculate the cost of goods.
            Set up Angular UI routing.
            Created Angular services.
            Estimated change requests.
            Performed bug fixing.
          `}
        />
        <EducationCard
          topic="Frontend-developer, Freelancer (GRISSLI)"
          year="2015 - 2015"
          profession="Tasks performed:"
          thesis={`
            Make up mobile version of the site for design layouts.
            Added effects when scrolling site, validation on ticket forms and queries to the server using jquery.
            Fixed bugs and optimize site using minification and sprites.
          `}
        />
        <EducationCard
          topic="Frontend-developer, Freelancer (Naumen)"
          year="2014 - 2015"
          profession="Tasks performed:"
          thesis={`
            Developed front-end applications using HTML5, CSS, JavaScript and Jquery.
            Created and implemented a custom CSS grid system, with CSS media queries for mobile responsiveness.
            Fixed front end bugs (HTML, CSS, Javascript errors (JQUERY).
            Worked with team and client to define job requirements.
          `}
        />
        <EducationCard
          topic="Lead Engineer (OOO Gazpromneft-Khantos)"
          year="2012 - 2014"
          profession="Tasks performed:"
          thesis={`
            Planned and Defended production enterprises of oil for 1year, 5 years and 10 years.
            Checked recoupment.
            Develop tools to automate production planning process.
            Supervised the software implementation process of GTM Invest.
          `}
        />
        <EducationCard
          topic="Oil operator (OOO Gazpromneft-Khantos)"
          year="2010 - 2012"
          profession="Tasks performed:"
          thesis={`
            Participated in the works of maintenance and current repair of oilfield
            equipment, installations and pipelines
          `}
        />

        <Subtitle>Skills</Subtitle>
      </div>
    )
  }

}
