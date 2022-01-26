//import logo from './logo.svg';
import './App.css';
import './animation';
import image from './RPortrait.png';


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
    <img src={image} alt="portfolio pic"/>
    <ul>
      {props.programmingLanguages.map((programmingLanguage) => (
      <li key={programmingLanguage.id}>{programmingLanguage.title}</li>))}
    </ul>
  </section>
  )
}

function Footer(props){
  return(
    <p>New Website made in {props.year}</p>
  )
}

const programmingLanguages = [
"JavaScript",
"C#",
"Java"
];

const programmingLanguagesObject = programmingLanguages.map((programmingLanguage, i) => ({ id: i, title: programmingLanguage}));

// function create JSX component
function App() {
  return (
    <div className="App">
      <Header name="Roman"/>
      <Main adjective="amazing" programmingLanguages={programmingLanguagesObject}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
