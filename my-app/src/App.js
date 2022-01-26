//import logo from './logo.svg';
import './App.css';
import './animation';
import logo2 from './RPortrait.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} className="App-logo" alt="logo" />
        <h2>Portfolio WebSite under construction</h2>
        <p>
          26/01/2022 - A whole new website based on React with CI/CD functionality is under construction
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
