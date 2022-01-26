//import logo from './logo.svg';
import './App.css';
import './animation';


function Header(props){
  return(
    <header>
      <h1>{props.name}'s Portfolio</h1>
    </header>
  )
}

function Main(props){
  return(
  <section>
    <p>Welcome to my {props.adjective} portfolio</p>
  </section>
  )
}

function Footer(props){
  return(
    <p>New Website made in {props.year}</p>
  )
}

// function create JSX component
function App() {
  return (
    <div className="App">
      <Header name="Roman"/>
      <Main adjective="amazing"/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
