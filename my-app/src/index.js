import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Anim from './animation.js';

ReactDOM.render(
  <React.Fragment>
    <App/>
    <Anim/>
  </React.Fragment>,
  document.getElementById("root")
);