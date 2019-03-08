import React from 'react';
import Row from './Row';
import shortid from 'shortid';

const StickyBoard = (props) => {
  let toRender;
  const { notes } = props;

  if (notes.length > 0) {
    toRender = [];
    const { numCols, onMemoRemove } = props;
    const numRows = Math.ceil(notes.length / numCols); 

    for(let i = 0; i < numRows; i+= numCols) {
      const rowNotes = notes.slice(i, i + numCols);
      const row = <Row key={shortid.generate()} 
                       rowIndex={i} 
                       numCols={numCols} 
                       notes={rowNotes} 
                       onMemoRemove={onMemoRemove}
                    />;
      toRender = [...toRender, row];
    } 
  }
  else {
    toRender = <h1>There are no notes. Add one!</h1>;
  }

  console.log('toRender: ' + toRender);

  return (
    <div>
      {toRender}
    </div>
  )
}

export default StickyBoard;