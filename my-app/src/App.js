import './App.css';
import './animation';

function SecretComponent(){
  return <h1>Super secret infromation for authorized users only</h1>;
}

function RegularComponent(){
  return <h1>Everyone can see this component</h1>;
}

// turnery operator if props.authorized is true then do SecretComponent, else RegularComponent
function App(props) {
  return(
    <>
    {props.authorized ? <SecretComponent /> : <RegularComponent /> }
    </>
  )
}

export default App;