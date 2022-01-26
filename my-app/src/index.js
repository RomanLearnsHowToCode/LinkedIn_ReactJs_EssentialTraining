import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Anim from './animation.js';

// Conditionally based rendering
ReactDOM.render(
  <App authorized={false}/>,
  document.getElementById("root")
  );