import './App.css';
import './animation';
import React, {useState, useEffect} from "react";

// Chapter 04, Incorporating useReducer

function App() {
const [checked, setChecked] = useState(false);
const [textVariable, setTextVariable] = useState(true);
// onchange is a function which will setChecked if it is not checked
// according to the value of this variable we are changing text displayed on line 15
// the checkbox useState variable true or false are not manipulating the checkbox check..
  return(
    <>
    <input type="checkbox"
     value={checked} onChange={() => setChecked(checked => !checked)}/>
     <p>{checked ? "checked" : "not checked"}</p>

     <input type="checkbox"
     value={textVariable} onChange={() => setTextVariable(textVariable => !textVariable)}/>
     <p>{textVariable ? "text var is true" : "text var is false"}</p>

    </>
  )
}

export default App;