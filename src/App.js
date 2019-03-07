import React, { Component } from 'react';
import TextInput from './components/TextInput';
import './App.css';

class App extends Component {
  state = {
    notes: [],
    userInput: '',
  }

  onTextChange = (ev) => {
    this.setState({ userInput: ev.target.value });
  }

  render() {
    return (
      <div className="App">
        <TextInput onChange={this.onTextChange} />
      </div>
    );
  }
}

export default App;
