import React from 'react';
import StickyNote from './StickyNote';

/**
 * Cell doesn't do anything yet
 * Later we'll add styling, etc
 */
const Cell = (props) => {
  return <div><StickyNote {...props} /></div>;
}

export default Cell;
