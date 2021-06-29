import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';


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
    .then(states => this.setState({states: states}));

  }

  render() {
    return (
      <div className="App">
        {console.log(this.state.states)}
      </div>
    )
  }
}

export default App;
