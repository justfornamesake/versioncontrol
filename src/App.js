import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Display from './Display';
import Master from './Master';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Display/>
          <Master/>
      </div>
    );
  }
}

export default App;
