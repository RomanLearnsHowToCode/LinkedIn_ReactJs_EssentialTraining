import './App.css';
import './animation';
import React, {useReducer} from "react";

// Chapter 05 - Asynchronous React, Initial commit

function App() {
const [checked, toggle] = useReducer(
  (checked) => !checked,
  false
  );

  return(
    <>
    <input type="checkbox"
     value={checked} onChange={toggle}/>
     <p>{checked ? "checked" : "not checked"}</p>

    </>
  )
}

export default App;