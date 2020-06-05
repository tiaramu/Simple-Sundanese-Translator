import React, { Component } from "react";
import './App.css';
import Title from './app/Title.js';
import Form from './app/Form.js';
// import Container from '@material-ui/core/Container';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

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
