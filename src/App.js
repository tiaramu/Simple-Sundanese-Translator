import React, { Component } from "react";
import './App.css';
import Title from './app/Title.js';
import Form from './app/Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Title">
          <Title />
        </div>
        <div className="Form">
          <Form />
        </div>
      </div>
    )
  }
}

export default App;
