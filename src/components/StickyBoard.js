import React from 'react';
import StickyNote from './StickyNote';

const StickyBoard = (props) => {
  console.log(props.notes);
  return (
    <div>
      {props.notes.map((note, i) => (
        <StickyNote 
          text={note} 
          index={i} 
          key={i}
          onMemoRemove={props.onMemoRemove}
        />
      ))}
    </div>
  )
}

export default StickyBoard;