import './App.css';
import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super();
    this.state = {
      states: []
    }
  }

  componentDidMount(){
    fetch('./test.json')
    .then(response => response.json())
    .then(response => this.setState({states: response}));

  }

  render() {
    <div className="App">
      
    </div>
  }
}

export default App;
