import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './ResumeSection.scss'

import Title from '../../components/typography/Title/Title'
import Subtitle from '../../components/typography/Subtitle/Subtitle'
import EducationCard from '../../components/cards/EducationCard/EducationCard'
import ExperienceCard from '../../components/cards/ExperienceCard/ExperienceCard'


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
        <ExperienceCard
          topic="Senior Frontend-developer (Scentbird)"
          year="2017 - Now"
          customer="Scentbird"
          projectDescription="E-commerce platform for subscriptions as well as purchase scent products"
          team="Product Manager, Team Lead, QA team: 2 members, Back-End Developers: 11 members, Front-End Developers: 4 members"
          achievements={`
            Got hands-on experience with a React JS.
            Implemented a lot of API integrations.
            Have written unit tests on Jest framework and e2e test on Cypress.io
            Created and implemented new features.
            Improved skills in Webpack2.
          `}
          environment={`
            Database PostgreSQL , Webstorm, GIT, Chrome Developer Tools, Source Tree, Postman, HTML5/CSS3,
            JavaScript, SASS, Post CSS, React JS, Redux, Immutable JS, Lo-Dash, Jest, ESLint, Cypress.io
          `}
        />
        <ExperienceCard
          topic="Frontend-developer (EPAM Systems)"
          year="2016 - 2017"
          customer="Coleman"
          projectDescription={`
            Client site for Coleman Research Group. Allows clients to require and
            schedule meetings with Coleman experts for getting consultations in different
            kinds of business areas
          `}
          team={`
            Project Manager, Team Lead, QA team: 2 members, DevOps: 3 members,
            Back-End Developers: 6 members, Front-End Developers: 4 members
          `}
          achievements={`
            Got hands-on experience with a new JavaScript framework Angular2.
            Implemented a lot of API integrations.
            Have written unit tests.
            Created and implemented new features.
            Investigated ES 2015, applied new knowledge in practice.
            Got experience in organizing an application.
            Improved skills in TypeScript and RX JS.
          `}
          environment={`
            Database SQL 2013, Webstorm, Visual Studio 2015 , Visual Studio Online,
            GIT, Chrome Developer Tools, Source Tree, Postman, HTML5/CSS3, JavaScript,
            SASS, AngularJS 2, Lo-Dash, jQuery, Karma, Jasmine, ESLint, Node.js
          `}
        />
        <ExperienceCard
          topic="Frontend-developer (EPAM Systems)"
          year="2016 - 2016"
          customer="Bosch is a German multinational engineering and electronics company"
          projectDescription={`
            Internal Bosch's platform for suppliers management. The project includes all the stages of
            interaction with contractor, coordination of decisions, creating complaints, assessment, billing,
            capacity rating, filtering and displaying a particular contractor.
            It's a huge Single Page Application (more than 800pages) based on AngularJS 1.
          `}
          team={`
            Project Manager, Team Lead, QA team: 5 members, Database Developers: 2 members,
            Back-End Developers: 6 members, Front-End Developers: 11 members.
          `}
          achievements={`
            Got hands-on experience with a CSS Preprocessors (Sass).
            Mastered best practices in Sass file organization and structure.
            Created and implemented new features to already existing projects.
            Developed business crucial functionality elements.
            Used semantic markup for displaying lists,data, forms, articles, etc.
            Investigated ES 2015, applied new knowledge in practice.
            Improved experience in Angular framework, using best practices for organizing applications.
            Improved skills in the creation Angular directives and services, interaction with the server.
          `}
          environment={`
            Microsoft SQL 2012, JIRA, Visual Studio 2015, VS Code, Chrome Developer Tools, Tortoise SVN, Gulp,
            Bower, HTML5/CSS3, JavaScript, SASS, AngularJS 1, Lodash, Bootsrtap,
            JQuery, Gulp, ASP .NET, ESLint, Node.js
          `}
        />
        <ExperienceCard
          topic="Frontend-developer (EPAM Systems)"
          year="2015 - 2016"
          customer="EPAM Systems"
          projectDescription={`
            EPAM Store. Single Page Web Application based on AngularJS. It is a book library application,
            where you can order the book, see the detailed information about the book, filter and see the
            entire list of books and write a different comment.
          `}
          team={`
            Project Manager, Developers: 4 members
          `}
          achievements={`
            Developed static pages with a catalog of books, login form and order book.
            Developed custom directive to display and calculate the cost of goods.
            Set up Angular UI routing.
            Created Angular services.
            Estimated change requests.
            Performed bug fixing.
          `}
          environment={`
            MSSQL, Visual Studio 2015, SVN, AngularJS, HTML, CSS, SCSS, JavaScript, lo-dash
          `}
        />
        <ExperienceCard
          topic="Frontend-developer, Freelancer (GRISSLI)"
          year="2015 - 2015"
          customer="Moscow theater"
          projectDescription={`
            The Project Moscow theater. You can view information about the theater, see the poster,
            choose an event, choose a place in the hall of the theater, book and buy a ticket.
          `}
          team={`
            Project Manager, Back-End developers: 1 member, Front-End developers: 2 members
          `}
          achievements={`
            Make up mobile version of the site for design layouts.
            Added effects when scrolling site, validation on ticket forms and queries to the server using jquery.
            Fixed bugs and optimize site using minification and sprites.
          `}
          environment={`
            PostgreSQL, WebStorm, Gulp, Bower, ESLint, HTML, CSS, Bootstrap, Jquer, Ajax
          `}
        />
        <ExperienceCard
          topic="Frontend-developer, Freelancer (Naumen)"
          year="2014 - 2015"
          projectDescription="Corporate Social Network"
          team={`
            Project Manager, Team Lead, Back-End developers: 2members, Front-End developers: 2 members
          `}
          achievements={`
            Developed front-end applications using HTML5, CSS, JavaScript and Jquery.
            Created and implemented a custom CSS grid system, with CSS media queries for mobile responsiveness.
            Fixed front end bugs (HTML, CSS, Javascript errors (JQUERY).
            Worked with team and client to define job requirements.
          `}
          environment={`
            MySql, WebStorm, Adobe Photoshop, Git, Gulp, Bower, JSLint, HTML5, CSS3,  Chrome Developer Tools,
            JavaScript, Jade, Stylus, Jquery, Node.js
          `}
        />
        <ExperienceCard
          topic="Lead Engineer (OOO Gazpromneft-Khantos)"
          year="2012 - 2014"
          customer="Gazpromneft"
          projectDescription="Planning for oil production"
          team="3 members"
          achievements={`
            Planned and Defended production enterprises of oil for 1year, 5 years and 10 years.
            Checked recoupment.
            Develop tools to automate production planning process.
            Supervised the software implementation process of GTM Invest.
          `}
        />
        <ExperienceCard
          topic="Oil operator (OOO Gazpromneft-Khantos)"
          year="2010 - 2012"
          customer="Gazpromneft"
          projectDescription="Exploitation of oil field"
          team="7 members"
          achievements={`
            Participated in the works of maintenance and current repair of oilfield
            equipment, installations and pipelines
          `}
        />

        <Subtitle>Skills</Subtitle>
      </div>
    )
  }

}
