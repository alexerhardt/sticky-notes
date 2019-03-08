import React, { Component } from 'react';
import TextInput from './components/TextInput';
import StickyBoard from './components/StickyBoard';

class App extends Component {
  state = {
    notes: [],
    userInput: '',
  }

  onMemoChange = (ev) => {
    this.setState({ userInput: ev.target.value });
  }

  onMemoSubmit = () => {
    const { userInput } = this.state;
    this.setState(prevState => ({ 
      notes: [...prevState.notes, userInput],
      userInput: '',
    }));
  }

  onMemoRemove = (index) => {
    if (index < 0 || index >= this.state.notes.length) {
      return;
    }
    const notes = [...this.state.notes];
    notes.splice(index, 1);
    this.setState({ notes });
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
          onMemoRemove={this.onMemoRemove}
        />
      </div>
    );
  }
}

export default App;
