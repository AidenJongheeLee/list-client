import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContainer from './components/ListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ListContainer />
      </div>
    );
  }
}

export default App;
