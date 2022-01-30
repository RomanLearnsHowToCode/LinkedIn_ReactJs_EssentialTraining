import './App.css';
import './animation';

function SecretComponent(){
  return <h1>Super secret infromation for authorized users only</h1>;
}

function RegularComponent(){
  return <h1>Everyone can see this component</h1>;
}

// turnery operator if props.authorized is true then do SecretComponent, else RegularComponent
// desctructing of objects - props on line 14 were changed for {authorized} and turnery operator is now asking straight for authorized not for props.authorized
function App({authorized}) {
  return(
    <>
    {authorized ? <SecretComponent /> : <RegularComponent /> }
    </>
  )
}

export default App;