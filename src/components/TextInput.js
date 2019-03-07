import React from 'react';

const TextInput = (props) => {
  return (
    <div>
      <textarea onChange={props.onChange} value={props.value}></textarea>
      <button onClick={props.onClick}>Add Note</button>
    </div>
  );
};

export default TextInput;