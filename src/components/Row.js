import React, { PureComponent } from 'react';
import Cell from './Cell';
import shortid from 'shortid';

class Row extends PureComponent {
  render() {
    const { rowIndex, notes, onMemoRemove } = this.props;
    return (
      notes.map((note, idx) => {
        return (
          <Cell 
            note={note}
            key={shortid.generate()} 
            rowIndex={rowIndex}
            colIndex={idx}
            onMemoRemove={onMemoRemove}
          />
        );
      })
    );
  }
}

export default Row;