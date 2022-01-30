import './App.css';
import './animation';
import React, {useState, useEffect} from "react";

// Chapter 05 - Asynchronous React, Initial commit
// Fetching data from other api and internet
// https://api.github.com/users/RomanLearnsHowToCode 

function App({login}) {
const [data, setData] = useState(null);

useEffect(() => {
  fetch(`https://api.github.com/users/${login}`)
  .then(response => response.json()
  .then(setData));
}, []);

if (data){
  return <div>{JSON.stringify(data)}</div>;
}

  return(
    <div>
      No User Available
    </div>
  )
}

export default App;