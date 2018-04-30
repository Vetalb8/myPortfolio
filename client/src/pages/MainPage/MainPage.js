import React, { Component } from 'react'

import './MainPage.scss'

import WelcomeSection from '../../components/WelcomeSection/WelcomeSection'
import AboutSection from '../../components/AboutSection/AboutSection'
import ResumeSection from '../../components/ResumeSection/ResumeSection'


export default class MainPage extends Component {

  static propTypes = {}

  render() {
    return (
      <div className="mainPage">
        <WelcomeSection />
        <main className="content">
          <AboutSection />
          <ResumeSection />
        </main>
      </div>
    )
  }

}
