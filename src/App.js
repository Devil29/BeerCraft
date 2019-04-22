import React, { Component } from 'react'
import Routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container container-custom">
        <Routes/>
      </div>
    );
  }
}

export default App;
