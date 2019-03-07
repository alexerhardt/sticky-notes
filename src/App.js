import React, { Component } from 'react';
import TextInput from './components/TextInput';
import StickyBoard from './components/StickyBoard';
import './App.css';

class App extends Component {
  state = {
    notes: [],
    userInput: '',
  }

  onMemoChange = (ev) => {
    this.setState({ userInput: ev.target.value });
  }

  onMemoSubmit = () => {
    const { notes, userInput } = this.state;
    notes.push(userInput);
    this.setState({ 
      notes,
      userInput: '',
    });
  }

  render() {
    return (
      <div className="App">
        <TextInput 
          value={this.state.userInput}
          onChange={this.onMemoChange} 
          onClick={this.onMemoSubmit}
        />
        <StickyBoard
          notes={this.state.notes}
        />
      </div>
    );
  }
}

export default App;
