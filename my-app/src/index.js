import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

//  Chapter 04
// useState

const checkList = ["boots", "tent", "headlamp"];
const [mostImportantItem, second] = ["first item", "second most important thing", "third"];
const [, , light] = ["item won't be shown", "second item wont be shown", "headlamp"];


// Conditionally based rendering
ReactDOM.render(
  <App />,
  document.getElementById("root")
  );