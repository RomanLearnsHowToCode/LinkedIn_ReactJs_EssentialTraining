import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import {BrowserRouter as Router} from "react-router-dom" // dom, we can use tools for native apps as well

// Chapter07 Initial commit
/* React router is a single page website.. basically JavaScript will handle the loading and unloading of content */
// we have imported statement from line 5 and wrapped our App in Router

// Setting the login value
//<App login="RomanLearnsHowToCode"/>,
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);