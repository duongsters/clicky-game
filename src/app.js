import React, { Component } from 'react';
import Gameboard from './components/gameboard/gameboard';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Gameboard />
        <Footer />
      </div>
    );
  }
}

export default App;