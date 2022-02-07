import './App.css';
import './animation';
import React, {useState, useEffect} from "react";

// Chapter 05 - Asynchronous React, Initial commit
// Fetching data from other api and internet
// https://api.github.com/users/RomanLearnsHowToCode 


// handling loading states
/* adding tw onoew states */
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);
/* updating the useEffect and fetch function*/
// there is a lot of things changed, if there is no login then just return, first of all set loading to true, then try to fetch the login
// wait for response, set the data, once this is done, then we are not loading anymore, if there is an error, then "catch it", in dependency is [login],
// so anytime the login changes, then the useEffect will update

// those if statements on 36,37,38 are self explanatory, and then the return is simplified to return data.. 

function App({login}) {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  if(!login) return; // if we don't have any login, then return
  setLoading(true); // at default we are loading data
  fetch(`https://api.github.com/users/${login}`)
  .then((response) => response.json())
  .then(setData)
  .then(() => setLoading(false))
  .catch(setError);
}, [login]); // throwing login into dependency array, anytime login will change, then we want to reload it

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