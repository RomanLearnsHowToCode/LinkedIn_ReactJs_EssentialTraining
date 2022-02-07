import './App.css';
import './animation';
import React, {useState, useEffect} from "react";

// Fetching data from other api and internet
// https://api.github.com/users/RomanLearnsHowToCode 

// Chapter 06 - React testing, Initial commit


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
    <p>Hi!, this is me accessing GitHub API to obtain following information:</p>
    <p>My GitHub account name is: </p><h1>{data.login}</h1><p>, and I currently resides in {data.location}</p>
    <img alt={data.login} src={data.avatar_url}/>
  </div>
  );
}

export default App;