import React, { PureComponent } from 'react'

import './WelcomeSection.scss'


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
              <div className="icon"><i className="icon-basic icon-basic-smartphone" /></div>
              <a className="contacts__link" href="#">+7 987 389 4922</a>
            </div>
            <div className="contacts__item">
              <div className="icon"><i className="icon-basic icon-basic-mail" /></div>
              <a className="contacts__link" href="#">vitalya_kudla@mail.ru</a>
            </div>
            <div className="contacts__item">
              <div className="icon"><i className="icon-basic icon-basic-webpage" /></div>
              <a className="contacts__link" href="#">www.info.vkudla.ru</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
