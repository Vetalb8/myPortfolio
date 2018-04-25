import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';


const rootEl = document.getElementById('root');

const render = () =>
  ReactDOM.render(
    <App />,
    rootEl
  );


render();
