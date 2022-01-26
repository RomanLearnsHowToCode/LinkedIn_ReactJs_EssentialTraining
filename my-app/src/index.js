import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Anim from './animation.js';

/* Strict Mode = warning if the code is not with best practices etc.. */
// Take elements we have created and add them to the DOM
// React.createElement("h1", {style: {color: "blue" }}, "Heey Everyone"
// ),
//   document.getElementById('root'),

// JSX - JavaScript as XML

/*
React.createElement(
  "ul",
  null,
  React.createElement("li", null, "Monday"),
  React.createElement("li", null, "Tuesday"),
  React.createElement("li", null, "Wednesday"),
  React.createElement("li", null, "Thursday"),
  React.createElement("li", null, "Friday"),
  React.createElement("li", null, "Saturday"),
  React.createElement("li", null, "Sunday"),
),
document.getElementById('root')

*/

/*

// JSX syntax, babel works here - it is compiling on background our code
<ul>
  <li>Monday</li>
  <li>Tuesday</li>
  <li>Wednesday</li>
  <li>Thursday</li>
  <li>Friday</li>
  <li>Saturday</li>
  <li>Sunday</li>
</ul>,
document.getElementById("root")

*/


ReactDOM.render(
  <App/>,
  document.getElementById("root")
);