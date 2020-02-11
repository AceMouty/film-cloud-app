import React from 'react';
// import logo from './logo.svg';
import logo from './img/TMDBLogo.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Film Cloud. To be developed and powered by <a href="https://www.themoviedb.org/" style={{color: "#EB4E7A"}}>The Movie DB API</a>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Written In React
        </a>
      </header>
    </div>
  );
}

export default App;
