import React from 'react';
import './StickyNote.css';

const StickyNote = (props) => {
  return (
    <div className="sticky-note">
      {props.note}
      <button onClick={() => props.onMemoRemove(props.index)}>X</button>
    </div>
  )
}

export default StickyNote;
