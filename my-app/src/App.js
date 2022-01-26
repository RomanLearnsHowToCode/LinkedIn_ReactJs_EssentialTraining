import './App.css';
import './animation';

function SecretComponent(){
  return <h1>Super secret infromation for authorized users only</h1>;
}

function RegularComponent(){
  return <h1>Everyone can see this component</h1>;
}

// conditionally based component rendering
function App(props) {
  if(props.authorized){
    return <SecretComponent />
  } else {
    return <RegularComponent />
  }
}

export default App;
