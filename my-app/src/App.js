import './App.css';
import './animation';
import React, {useState, useEffect} from "react";

// Fetching data from other api and internet
// https://api.github.com/users/RomanLearnsHowToCode 

// Chapter 06 - React testing, Initial commit

/* 

There was a problem while retreiving the <h1> Hello React Testing Library</h1> 
The reason was, that the testing library didn't wen't through the code by itself, but actually what was rendered! 
There was some problem while reaching for the code in the original structure

Now the test will be working

*/
function App() {


return(
  <div>
    <h1>
      Hello React Testing Library</h1>
  </div>
  );
}

export default App;