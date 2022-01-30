import './App.css';
import './animation';
import React, {useState} from "react";

// turnery operator if props.authorized is true then do SecretComponent, else RegularComponent
// desctructing of objects - props on line 14 were changed for {authorized} and turnery operator is now asking straight for authorized not for props.authorized
function App() {
  const what = useState("happy"); 
  console.log(what); // use state will return array

  const [emotion, setEmotion] = useState("in love"); // use state will return pair, state and function, we can setEmotion
  console.log(emotion);

  // It looks like I could manipulate the state of what is shown (app could return container according to the variable.. basically switching content)
  return(
    <>
    <h1>Current emotion is {emotion}.</h1>
    <button onClick={() => setEmotion("happy")}>Happy</button>
    <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
    <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
    </>
  )
}

export default App;