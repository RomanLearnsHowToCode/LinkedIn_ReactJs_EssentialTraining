import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

//  Chapter 04

const checkList = ["boots", "tent", "headlamp"];
console.log(checkList);
console.log(checkList[1]);

const [mostImportantItem, second] = ["first item", "second most important thing", "third"];
console.log(mostImportantItem); // will log first item in array
console.log(second); // will log out second item in array

const [, , light] = ["item won't be shown", "second item wont be shown", "headlamp"];
console.log(light) // this will log out headlamp (third item in array)

// Conditionally based rendering
ReactDOM.render(
  <App authorized={false}/>,
  document.getElementById("root")
  );