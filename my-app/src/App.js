import './App.css';
import './animation';
import React, {useState, useEffect} from "react";

// Chapter 05 - Asynchronous React, Initial commit
// Fetching data from other api and internet
// https://api.github.com/users/RomanLearnsHowToCode 


// handling loading states
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);

function App({login}) {
const [data, setData] = useState(null);

useEffect(() => {
  fetch(`https://api.github.com/users/${login}`)
  .then(response => response.json()
  .then(setData));
}, []);

if (data){
  return <div>
    <p>Hi!, this is me accessing GitHub API to obtain following information:</p>
    <p>My GitHub account name is: </p><h1>{data.login}</h1><p>, and I currently resides in {data.location}</p>
    <img alt={data.login} src={data.avatar_url}/>
  </div>;
}

  return(
    <div>
      No User Available
    </div>
  )
}

export default App;