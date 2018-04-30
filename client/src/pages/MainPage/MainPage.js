import React, { Component } from 'react'

import './MainPage.scss'

import WelcomeSection from '../../components/WelcomeSection/WelcomeSection'
import AboutSection from '../../components/AboutSection/AboutSection'


export default class MainPage extends Component {

  static propTypes = {}

  render() {
    return (
      <div className="mainPage">
        <WelcomeSection />
        <AboutSection />
      </div>
    )
  }

}
