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

*/
function App({login}) {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  if(!login) return;
  setLoading(true);
  fetch(`https://api.github.com/users/${login}`)
  .then((response) => response.json())
  .then(setData)
  .then(() => setLoading(false))
  .catch(setError);
}, [login]);

if (loading) return <h1>Loading...</h1>;
if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
if (!data) return null;

return(
  <div>
    <h1>
      Hello React Testing Library</h1>
  </div>
  );
}

export default App;