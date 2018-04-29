import React, { PureComponent } from 'react'

import './WelcomeSection.scss'

import Icon from '../../components/Icon/Icon'


export default class WelcomeSection extends PureComponent {

  static propTypes = {}

  render() {
    return (
      <div className="welcomeSection">
        <div className="content">
          <h1 className="title">Vitaliy Kudla</h1>
          <h3 className="subtitle">Frontend Developer</h3>
          <div className="contacts">
            <div className="contacts__item">
              <Icon name="smartphone" />
              <a className="contacts__link" href="#">+7 987 389 4922</a>
            </div>
            <div className="contacts__item">
              <Icon name="mail" />
              <a className="contacts__link" href="#">vitalya_kudla@mail.ru</a>
            </div>
            <div className="contacts__item">
              <Icon name="webpage" />
              <a className="contacts__link" href="#">www.info.vkudla.ru</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
