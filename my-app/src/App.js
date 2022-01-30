import './App.css';
import './animation';
import React, {useState, useEffect} from "react";

// turnery operator if props.authorized is true then do SecretComponent, else RegularComponent
// desctructing of objects - props on line 14 were changed for {authorized} and turnery operator is now asking straight for authorized not for props.authorized

/*
This chapter and lesson are the basic which could load separate apps to show in react dom
*/

function App() {
  // second parameter is dependency array
  
    const [emotion, setEmotion] = useState("in love"); // use state will return pair, state and function, we can setEmotion
    const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here!`); // This have to be done with ` (tilda! next to number 1 on keyboard!)
  }, [emotion]); // second parameter in this case [emotion] is watching if the value has been changed, this is the "hook", and it will console.log only if the value has changed

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);

  // It looks like I could manipulate the state of what is shown (app could return container according to the variable.. basically switching content)
  return(
    <>
    <h1>Current emotion is {emotion} but also {secondary}.</h1>
    <button onClick={() => setEmotion("happy")}>Happy</button>
    <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
    <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
    <button onClick={() => setSecondary("crabby")}>Make Crabby</button>
    </>
  )
}

export default App;