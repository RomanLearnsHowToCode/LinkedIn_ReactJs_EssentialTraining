import './App.css';
import './animation';
import React, {useState} from "react";

// Chapter 04, Incorporating useReducer

function App() {
const [checked, setChecked] = useState(false);

// Abstracted
function toggle(){
  setChecked((checked) => !checked);
}

// sending function as parameter, this is called REDUCER, it take state and return new state
  return(
    <>
    <input type="checkbox"
     value={checked} onChange={toggle}/>
     <p>{checked ? "checked" : "not checked"}</p>

    </>
  )
}

export default App;