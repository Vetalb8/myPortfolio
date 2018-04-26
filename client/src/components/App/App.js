import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.scss'

import MainPage from '../../pages/MainPage/MainPage'
import LoginPage from '../../pages/LoginPage'


export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" component={MainPage} exact />
          <Route path="/login" component={LoginPage} exact />
        </div>
      </BrowserRouter>
    )
  }
}
