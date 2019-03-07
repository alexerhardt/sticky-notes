import React from 'react';

const StickyNote = (props) => {
  return (
    <div>
      {props.text}
      <button onClick={props.onMemoRemove(props.index)}>X</button>
    </div>
  )
}

export default StickyNote;
