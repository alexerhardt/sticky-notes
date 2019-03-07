import React from 'react';
import StickyNote from './StickyNote';

const StickyBoard = (props) => {
  return (
    <div>
      {props.notes.map((note, i) => {
        return <StickyNote text={note} index={i} />
      })}
    </div>
  )
}

export default StickyBoard;