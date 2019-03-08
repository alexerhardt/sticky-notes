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
        <div className="row text-center">
          <h1>Sticky Notez</h1>
        </div>

        <div className="row">
          <TextInput 
            value={this.state.userInput}
            onChange={this.onMemoChange} 
            onClick={this.onMemoSubmit}
          />
        </div>

        <div className="row">
          <StickyBoard
            notes={this.state.notes}
            onMemoRemove={this.onMemoRemove}
          />
        </div>
      </div>
    );
  }
}

export default App;
